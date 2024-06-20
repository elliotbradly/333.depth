"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printMenu = exports.createMenu = exports.closeMenu = exports.testMenu = exports.updateMenu = exports.initMenu = void 0;
const ActMnu = require("../menu.action");
const ActLib = require("../../00.library.unit/library.action");
const ActPmt = require("../../12.prompt.unit/prompt.action");
const ActAut = require("../../13.author.unit/author.action");
const ActGen = require("../../14.genre.unit/genre.action");
const ActSet = require("../../15.setting.unit/setting.action");
const ActTrm = require("../../act/terminal.action");
const ActChc = require("../../act/choice.action");
const ActGrd = require("../../act/grid.action");
const ActCvs = require("../../act/canvas.action");
const ActCns = require("../../act/console.action");
var bit, lst, dex, idx, dat, src, val;
const initMenu = async (cpy, bal, ste) => {
    if (bal == null)
        bal = { idx: null };
    bit = await ste.bus(ActTrm.CLEAR_TERMINAL, {});
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 1, ySpan: 12 });
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, });
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 8, ySpan: 12 });
    bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Control PIVOT V0" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.initMenu = initMenu;
const updateMenu = async (cpy, bal, ste) => {
    lst = [ActPmt.UPDATE_PROMPT, ActAut.UPDATE_AUTHOR, ActGen.UPDATE_GENRE, ActSet.UPDATE_SETTING, ActMnu.OLLAMA_MENU, ActMnu.OPENAI_MENU, ActLib.UPDATE_LIBRARY, ActMnu.GITHUB_MENU];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActPmt.UPDATE_PROMPT:
            bit = await ste.hunt(ActPmt.LIST_PROMPT, {});
            lst = bit.pmtBit.lst;
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
            bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
            src = bit.chcBit.src;
            bit = await ste.hunt(ActPmt.WRITE_PROMPT, { src });
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActAut.UPDATE_AUTHOR:
            bit = await ste.hunt(ActAut.LIST_AUTHOR, {});
            lst = bit.autBit.lst;
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
            bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
            src = bit.chcBit.src;
            bit = await ste.hunt(ActAut.WRITE_AUTHOR, { src });
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActSet.UPDATE_SETTING:
            bit = await ste.hunt(ActSet.LIST_SETTING, {});
            lst = bit.setBit.lst;
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
            bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
            src = bit.chcBit.src;
            bit = await ste.hunt(ActSet.WRITE_SETTING, { src });
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActGen.UPDATE_GENRE:
            bit = await ste.hunt(ActGen.SUB_GENRE, {});
            lst = bit.genBit.lst;
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
            bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
            idx = bit.chcBit.src;
            bit = await ste.hunt(ActGen.LIST_GENRE, { idx });
            lst = bit.genBit.lst;
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
            bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
            src = bit.chcBit.src;
            bit = await ste.hunt(ActGen.WRITE_GENRE, { idx, src });
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActMnu.OLLAMA_MENU:
            bit = await ste.hunt(ActMnu.OLLAMA_MENU, {});
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActMnu.OPENAI_MENU:
            bit = await ste.hunt(ActMnu.OPENAI_MENU, {});
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActLib.UPDATE_LIBRARY:
            ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Update Library Pivot" });
            bit = await ste.hunt(ActLib.UPDATE_LIBRARY, {});
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActMnu.GITHUB_MENU:
            bit = await ste.hunt(ActMnu.GITHUB_MENU, {});
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            bit = await ste.hunt(ActMnu.UPDATE_MENU);
            break;
        default:
            bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    setTimeout(() => {
        (0, exports.updateMenu)(cpy, bal, ste);
    }, 1111);
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