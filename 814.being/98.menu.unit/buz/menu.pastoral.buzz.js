"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pastoralMenu = void 0;
const ActMnu = require("../menu.action");
const ActPst = require("../../30.pastoral.unit/pastoral.action");
const ActChc = require("../../act/choice.action");
const ActCns = require("../../act/console.action");
const ActGrd = require("../../act/grid.action");
const ActDsk = require("../../act/disk.action");
var bit, lst, dex, idx, dat, src;
const pastoralMenu = async (cpy, bal, ste) => {
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Spark Menu" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    lst = [ActPst.WRITE_PASTORAL, ActPst.READ_PASTORAL, ActMnu.UPDATE_MENU];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActPst.WRITE_PASTORAL:
            bit = await ste.bus(ActDsk.INDEX_DISK, { src: '../icon' });
            lst = bit.dskBit.lst;
            var list = [];
            lst.forEach((a) => {
                if (a.includes('pastoral') == false)
                    return;
                list.push(a);
            });
            lst = list;
            //filter out ones that do not contain pastoral 
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
            bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
            src = bit.chcBit.src;
            var fs = require("fs"), PNG = require("pngjs").PNG;
            var data = fs.readFileSync('../icon/' + src);
            var png = PNG.sync.read(data);
            var idx = 'spk000';
            bit = await ste.hunt(ActPst.WRITE_PASTORAL, { idx, dat: png });
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "inspect pixels.... " });
            //bit = await ste.hunt( ActStv.LIST_STAVE, {})
            //lst = bit.stvBit.lst;
            //bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
            //bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
            //src = bit.chcBit.src;
            //var nowStave = src;
            //bit = await ste.hunt( ActClr.LIST_COLOR, {});
            //lst = bit.clrBit.lst
            //bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
            //bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })
            //var colorIDX = bit.chcBit.src;
            //bit = await ste.hunt(ActPxl.INSPECT_PIXEL, { idx:colorIDX, src:nowStave, dat:png });
            //bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActPst.READ_PASTORAL:
            bit = await ste.hunt(ActPst.READ_PASTORAL, { src });
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActMnu.UPDATE_MENU:
            bit = await ste.hunt(ActMnu.UPDATE_MENU, {});
            break;
    }
    bit = await ste.hunt(ActMnu.PLAYER_MENU, {});
    cpy;
};
exports.pastoralMenu = pastoralMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Color = require("../../val/console-color");
const Align = require("../../val/align");
//# sourceMappingURL=menu.pastoral.buzz.js.map