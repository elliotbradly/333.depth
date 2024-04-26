"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.realityMenu = void 0;
const ActMnu = require("../menu.action");
const ActRel = require("../../01.reality.unit/reality.action");
//import * as ActFoc from "../../01.focus.unit/focus.action";
//import * as ActPvt from "../../96.pivot.unit/pivot.action";
const ActTrm = require("../../act/terminal.action");
const ActChc = require("../../act/choice.action");
const ActGrd = require("../../act/grid.action");
var bit, lst, dex, idx, dat, src;
const realityMenu = async (cpy, bal, ste) => {
    lst = [ActRel.OPEN_REALITY, ActRel.UPDATE_REALITY, ActMnu.UPDATE_MENU];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActRel.OPEN_REALITY:
            bit = await ste.hunt(ActRel.OPEN_REALITY, { src: 'committing control' });
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActRel.UPDATE_REALITY:
            bit = await ste.hunt(ActRel.UPDATE_REALITY, { src: 'committing control' });
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
    setTimeout(async () => {
        bit = await ste.hunt(ActMnu.REALITY_MENU, {});
    }, 333);
    return cpy;
};
exports.realityMenu = realityMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Align = require("../../val/align");
const Color = require("../../val/console-color");
//# sourceMappingURL=menu.reality.js.map