"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openaiMenu = void 0;
const ActMnu = require("../menu.action");
const ActOai = require("../../02.openai.unit/openai.action");
//import * as ActFoc from "../../01.focus.unit/focus.action";
//import * as ActPvt from "../../96.pivot.unit/pivot.action";
//import * as ActMap from "../../03.hexmap.unit/hexmap.action"
const ActTrm = require("../../act/terminal.action");
const ActChc = require("../../act/choice.action");
111;
const ActGrd = require("../../act/grid.action");
var bit, lst, dex, idx, dat, src;
const openaiMenu = async (cpy, bal, ste) => {
    lst = [ActOai.WRITE_OPENAI, ActMnu.UPDATE_MENU];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActOai.WRITE_OPENAI:
            bit = await ste.hunt(ActOai.WRITE_OPENAI, { src: 'write openai' });
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActMnu.UPDATE_MENU:
            bit = await ste.hunt(ActMnu.UPDATE_MENU, {});
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        default:
            bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    return cpy;
};
exports.openaiMenu = openaiMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Align = require("../../val/align");
const Color = require("../../val/console-color");
//# sourceMappingURL=menu.openai.js.map