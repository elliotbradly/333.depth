"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexmapMenu = void 0;
const ActMnu = require("../menu.action");
const ActFoc = require("../../01.focus.unit/focus.action");
const ActTrm = require("../../act/terminal.action");
const ActChc = require("../../act/choice.action");
const ActGrd = require("../../act/grid.action");
const ActCns = require("../../act/console.action");
const ActPut = require("../../act/input.action");
const ActMap = require("../../03.hexmap.unit/hexmap.action");
const ActGeo = require("../../02.geojson.unit/geojson.action");
var bit, lst, dex, idx, dat, src, val;
const hexmapMenu = async (cpy, bal, ste) => {
    var mapMod = ste.value.hexmap;
    //bit = await ste.bus(ActTrm.CLEAR_TERMINAL, { src: "-----------" })
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Hexmap Menu" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    var select = mapMod.select;
    var nowIdx = 'None';
    var nowW = 0;
    var nowH = 0;
    var nowForm = 'None';
    if (select != null) {
        nowIdx = select.idx;
        nowW = select.w;
        nowH = select.h;
        nowForm = select.frm;
    }
    var nowIdx = 'None';
    if (select != null) {
        nowIdx = select.idx;
    }
    //bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Now---" + cpy.mapNomNow })
    //bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Width---" + nowW })
    //bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })
    //bit = await ste.bus(ActTrm.WRITE_TERMINAL, { val: 3, src: "Now---" + cpy.mapNomNow })
    //bit = await ste.bus(ActTrm.WRITE_TERMINAL, { val: 3, src: "Width---" + nowW })
    //bit = await ste.bus(ActTrm.WRITE_TERMINAL, { val: 3, src: "Height---" + nowH })
    //bit = await ste.bus(ActTrm.WRITE_TERMINAL, { val: 3, src: "Form---" + nowForm })
    //bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "GEOJSON:" + JSON.stringify(cpy.geoJsonNow) })
    lst = [ActMap.WRITE_HEXMAP,
        ActMap.LIST_HEXMAP,
        //ActMap.SHAPE_HEXMAP,
        //ActMap.OPEN_HEXMAP,
        //ActMap.ADD_HEXMAP,
        //ActMap.WRITE_HEXMAP,
        //ActMap.FOCUSING_HEXMAP,
        //ActMap.LOAD_HEXMAP,
        //ActGeo.LOAD_GEOJSON,
        //ActMnu.CREATE_HEXMAP_MENU,
        ActMnu.UPDATE_MENU];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActMap.LIST_HEXMAP:
            bit = await ste.hunt(ActMap.LIST_HEXMAP, {});
            lst = bit.mapBit.lst;
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 12 });
            bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
            src = bit.chcBit.src;
            break;
        case ActMap.WRITE_HEXMAP:
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 6 });
            bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input hexmap name', net: bit.grdBit.dat });
            idx = bit.putBit.src;
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "hexmap named " + idx });
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 6 });
            bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input hexmap width', net: bit.grdBit.dat });
            var w = Number(bit.putBit.src);
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "hexmap width " + w });
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 6 });
            bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'input hexmap height', net: bit.grdBit.dat });
            var h = Number(bit.putBit.src);
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "hexmap height " + h });
            var shapeList = [];
            for (var key in SHAPE) {
                if (key === SHAPE.RECTANGLE) {
                }
                else
                    shapeList.push(SHAPE[key]);
            }
            shapeList.unshift(SHAPE.RECTANGLE);
            shapeList;
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 12 });
            bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst: shapeList, net: bit.grdBit.dat });
            //bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst: shapeList })
            src = bit.chcBit.src;
            var frm = src;
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "hexmap shape " + frm });
            //now the type
            bit = await ste.hunt(ActMap.SHAPE_HEXMAP, { idx, dat: { frm, w, h } });
            //mapMod.select = bit.mapBit.dat
            var grid = bit.mapBit.dat.dat.bit;
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "processing " + grid.length });
            bit = await ste.hunt(ActMap.WRITE_HEXMAP, { idx, dat: { bit: { grid } } });
            dat = bit.mapBit;
            bit = await ste.hunt(ActMap.READ_HEXMAP, { idx });
            dat = bit.mapBit.dat;
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "---> " });
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "---> " });
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "---> " });
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "pocessed " + idx });
            bit = await ste.hunt(ActMnu.HEXMAP_MENU);
            break;
        case ActMap.SHAPE_HEXMAP:
            lst = [SHAPE.RECTANGLE, SHAPE.TRIANGLE, SHAPE.HEXAGON, SHAPE.PARALLELOGRAM];
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 12 });
            bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
            src = bit.chcBit.src;
            bit = await ste.hunt(ActMap.SHAPE_HEXMAP, { idx: 'hex00', dat: { frm: src } });
            debugger;
            break;
        case ActMnu.CREATE_HEXMAP_MENU:
            bit = await ste.hunt(ActMnu.CREATE_HEXMAP_MENU);
            bit = await ste.hunt(ActMnu.HEXMAP_MENU);
            break;
        case ActMap.OPEN_HEXMAP:
            //bit = await ste.bus(ActDsk.INDEX_DISK, { src: './data/hexmap/' })
            //lst = bit.dskBit.lst
            bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
            bit = bit.trmBit;
            src = lst[bit.val];
            idx = src.replace('.json', '');
            bit = await ste.hunt(ActMap.OPEN_HEXMAP, { idx });
            mapMod.select = bit.mapBit.dat;
            cpy.mapNomNow = mapMod.select.idx;
            bit = await ste.hunt(ActMnu.UPDATE_MENU);
            break;
        case ActMap.ADD_HEXMAP:
            //bit = await ste.bus(ActDsk.INDEX_DISK, { src: './data/hexmap/' })
            //lst = bit.dskBit.lst
            debugger;
            bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
            bit = bit.trmBit;
            src = lst[bit.val];
            idx = src.replace('.json', '');
            //bit = await ste.bus(ActDsk.READ_DISK, { src: './data/hexmap/' + src, val: 1 })
            dat = bit.dskBit.dat;
            bit = await ste.hunt(ActMap.ADD_HEXMAP, { idx, dat: { dat, gph: 'gph00' } });
            mapMod.select = bit.mapBit.dat;
            cpy.mapNomNow = mapMod.select.idx;
            bit = await ste.hunt(ActMnu.UPDATE_MENU);
            break;
        case ActMap.FOCUSING_HEXMAP:
            bit = await ste.hunt(ActMap.LIST_HEXMAP, {});
            lst = bit.mapBit.lst;
            bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
            bit = bit.trmBit;
            src = lst[bit.val];
            cpy.mapNomNow = src;
            var hexmap = src;
            bit = await ste.hunt(ActFoc.LIST_FOCUS, {});
            lst = bit.focBit.lst;
            bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
            bit = bit.trmBit;
            src = lst[bit.val];
            var focus = src;
            bit = await ste.hunt(ActMap.FOCUSING_HEXMAP, { idx: hexmap, src });
            bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(bit) });
            bit = await ste.hunt(ActMnu.HEXMAP_MENU);
            break;
        case ActMnu.UPDATE_MENU:
            bit = await ste.hunt(ActMnu.UPDATE_MENU);
            break;
        case ActGeo.LOAD_GEOJSON:
            bit = await ste.hunt(ActGeo.INDEX_GEOJSON, {});
            lst = bit.geoBit.lst;
            bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
            bit = bit.trmBit;
            src = lst[bit.val];
            bit = await ste.hunt(ActGeo.LOAD_GEOJSON, { src });
            dat = bit.geoBit.dat;
            idx = bit.geoBit.src;
            cpy.geoJsonNow = dat;
            cpy.mapNomNow = idx;
            break;
        case ActMap.LOAD_HEXMAP:
            bit = await ste.hunt(ActMap.LIST_HEXMAP, {});
            lst = bit.mapBit.lst;
            bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
            bit = bit.trmBit;
            src = lst[bit.val];
            cpy.mapNomNow = src;
            bit = await ste.hunt(ActMap.LOAD_HEXMAP, { src });
            cpy.sizeNow = bit.mapBit.dat.length;
            dat = bit.mapBit.dat;
            bit = await ste.hunt(ActMap.REPLACE_HEXMAP, { dat });
            bit = await ste.hunt(ActMnu.HEXMAP_MENU);
            //bit = await ste.bus(ActTrm.INPUT_TERMINAL, { lst: ["", "", "Name Hexmap"] });
            // src = bit.trmBit.src;
            // val = mapMod.sizeNow;
            // bit = await ste.hunt(ActMap.SAVE_HEXMAP, { src, val })
            // bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(bit) })
            break;
        default:
            bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    if (bal.slv != null)
        bal.slv({ mnuBit: { idx: "hexmap-menu" } });
    return cpy;
};
exports.hexmapMenu = hexmapMenu;
const SHAPE = require("../../val/shape");
const Color = require("../../val/console-color");
const Align = require("../../val/align");
//# sourceMappingURL=01.hexmap-menu.buzz.js.map