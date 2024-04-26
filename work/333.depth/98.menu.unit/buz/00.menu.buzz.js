"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printMenu = exports.createMenu = exports.closeMenu = exports.testMenu = exports.updateMenu = exports.initMenu = void 0;
const ActMnu = require("../menu.action");
const ActDep = require("../../00.depth.unit/depth.action");
//import * as ActFoc from "../../01.focus.unit/focus.action";
//import * as ActPvt from "../../96.pivot.unit/pivot.action";
//import * as ActMap from "../../03.hexmap.unit/hexmap.action"
const ActTrm = require("../../act/terminal.action");
const ActChc = require("../../act/choice.action");
const ActGrd = require("../../act/grid.action");
const ActCvs = require("../../act/canvas.action");
const ActCns = require("../../act/console.action");
var bit, lst, dex, idx, dat, src;
const initMenu = async (cpy, bal, ste) => {
    if (bal == null)
        bal = { idx: null };
    bit = await ste.bus(ActTrm.CLEAR_TERMINAL, {});
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 3, y: 0, xSpan: 1, ySpan: 12 });
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, });
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 10, ySpan: 12 });
    bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Depth PIVOT V0" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.initMenu = initMenu;
var updateDepth = async (ste) => {
    var bitUp = await ste.hunt(ActDep.UPDATE_DEPTH, {});
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'updating depth....' });
    bit = await ste.hunt(ActMnu.PRINT_MENU, bitUp);
};
const updateMenu = async (cpy, bal, ste) => {
    lst = [ActDep.UPDATE_DEPTH, ActDep.RELOAD_DEPTH, ActDep.COMMIT_DEPTH, ActMnu.REALITY_MENU];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActMnu.REALITY_MENU:
            bit = await ste.hunt(ActMnu.REALITY_MENU, {});
            break;
        case ActDep.COMMIT_DEPTH:
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'commit depth....' });
            bit = await ste.hunt(ActDep.COMMIT_DEPTH, {});
            lst = bit.depBit.lst;
            lst.forEach((a) => {
                ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a });
            });
            var count = 0;
            var interval = setInterval(() => {
                count += 1;
                if (count <= 110)
                    ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'waiting... ' + count });
                else
                    clearInterval(interval);
            }, 1000);
            break;
        case ActDep.UPDATE_DEPTH:
            await updateDepth(ste);
            break;
        case ActDep.RELOAD_DEPTH:
            var bitUp = await ste.hunt(ActDep.RELOAD_DEPTH, {});
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'reloading setup' });
            const fs = require('fs');
            // can be a filename or a directory...
            const fileToWatch = './0.AlligatorEarth.js';
            const dirToWatch = './333.depth';
            fs.watch(fileToWatch, async (eventType, fileName) => {
                if (eventType != 'rename') {
                    await updateDepth(ste);
                    ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: `${fileName} was updated` });
                }
            });
            fs.watch(dirToWatch, { recursive: true }, async (eventType, fileName) => {
                if (eventType != 'rename') {
                    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'updating...' });
                    await updateDepth(ste);
                    ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: `${fileName} was updated` });
                }
            });
            break;
        default:
            bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    setTimeout(() => { (0, exports.updateMenu)(cpy, bal, ste); }, 11);
    return cpy;
};
exports.updateMenu = updateMenu;
const testMenu = async (cpy, bal, ste) => {
    return cpy;
};
exports.testMenu = testMenu;
const closeMenu = async (cpy, bal, ste) => {
    await ste.bus(ActTrm.CLOSE_TERMINAL, {});
    return cpy;
};
exports.closeMenu = closeMenu;
const createMenu = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.createMenu = createMenu;
const printMenu = async (cpy, bal, ste) => {
    dat = bal;
    if (dat == null)
        return bal.slv({ mnuBit: { idx: "print-menu", dat } });
    var itm = JSON.stringify(dat);
    lst = itm.split(",");
    lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: a }));
    ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "------------" });
    bal.slv({ mnuBit: { idx: "print-menu", dat: itm } });
};
exports.printMenu = printMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Align = require("../../val/align");
const Color = require("../../val/console-color");
//# sourceMappingURL=00.menu.buzz.js.map