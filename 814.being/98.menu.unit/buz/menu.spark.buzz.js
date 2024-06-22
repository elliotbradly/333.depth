"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sparkMenu = void 0;
const ActMnu = require("../menu.action");
const ActSpk = require("../../01.spark.unit/spark.action");
const ActChc = require("../../act/choice.action");
const ActCns = require("../../act/console.action");
const ActGrd = require("../../act/grid.action");
const ActDsk = require("../../act/disk.action");
var bit, lst, dex, idx, dat, src;
const sparkMenu = async (cpy, bal, ste) => {
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Spark Menu" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    lst = [ActSpk.WRITE_SPARK, ActSpk.READ_SPARK, ActMnu.UPDATE_MENU];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActSpk.WRITE_SPARK:
            bit = await ste.bus(ActDsk.INDEX_DISK, { src: '../icon' });
            lst = bit.dskBit.lst;
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
            bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
            src = bit.chcBit.src;
            var fs = require("fs"), PNG = require("pngjs").PNG;
            var data = fs.readFileSync('../icon/' + src);
            var png = PNG.sync.read(data);
            var idx = 'spk000';
            bit = await ste.hunt(ActSpk.WRITE_SPARK, { idx, dat: png });
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
        case ActSpk.READ_SPARK:
            bit = await ste.hunt(ActSpk.READ_SPARK, { src });
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActMnu.UPDATE_MENU:
            bit = await ste.hunt(ActMnu.UPDATE_MENU, {});
            break;
    }
    bit = await ste.hunt(ActMnu.PLAYER_MENU, {});
    cpy;
};
exports.sparkMenu = sparkMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Color = require("../../val/console-color");
const Align = require("../../val/align");
//# sourceMappingURL=menu.spark.buzz.js.map