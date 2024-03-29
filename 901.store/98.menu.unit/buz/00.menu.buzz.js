"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visageMenu = exports.shadeMenu = exports.closeMenu = exports.testMenu = exports.printMenu = exports.updateMenu = exports.initMenu = void 0;
const ActMnu = require("../menu.action");
const ActStr = require("../../00.store.unit/store.action");
const ActTrm = require("../../act/terminal.action");
const ActGrd = require("../../act/grid.action");
const ActCvs = require("../../act/canvas.action");
const ActCns = require("../../act/console.action");
const ActChc = require("../../act/choice.action");
let bit, lst, dex, src, dat;
const initMenu = async (cpy, bal, ste) => {
    if (bal == null)
        bal = { idx: null };
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 3, y: 0, xSpan: 6, ySpan: 12 });
    bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, });
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 6, y: 0, xSpan: 6, ySpan: 12 });
    bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Store PIVOT V0" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.initMenu = initMenu;
var updateStore = async (ste) => {
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'updating store....' });
    var bitUp = await ste.hunt(ActStr.UPDATE_STORE, {});
    bit = await ste.hunt(ActMnu.PRINT_MENU, bitUp);
};
const updateMenu = async (cpy, bal, ste) => {
    lst = [ActMnu.SUPABASE_MENU, ActStr.UPDATE_STORE];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 5, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActMnu.SUPABASE_MENU:
            bit = await ste.hunt(ActMnu.SUPABASE_MENU, {});
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActStr.GENERATE_STORE:
            bit = await ste.hunt(ActStr.GENERATE_STORE, { idx: '0002_modern_thunderbolt_ross.sql', src: 'pacman-mouth' });
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActStr.UPDATE_STORE:
            await updateStore(ste);
            break;
        default:
            bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    setTimeout(() => { (0, exports.updateMenu)(cpy, bal, ste); }, 11);
    return cpy;
};
exports.updateMenu = updateMenu;
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
const testMenu = async (cpy, bal, ste) => {
    return cpy;
};
exports.testMenu = testMenu;
const closeMenu = async (cpy, bal, ste) => {
    //await ste.bus(ActTrm.CLOSE_TERMINAL, {})
    return cpy;
};
exports.closeMenu = closeMenu;
const shadeMenu = async (cpy, bal, ste) => {
    return cpy;
};
exports.shadeMenu = shadeMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const visageMenu = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.visageMenu = visageMenu;
const Align = require("../../val/align");
const Color = require("../../val/console-color");
//# sourceMappingURL=00.menu.buzz.js.map