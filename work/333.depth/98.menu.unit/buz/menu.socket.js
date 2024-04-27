"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketMenu = void 0;
const ActMnu = require("../menu.action");
const ActSok = require("../../96.socket.unit/socket.action");
//import * as ActFoc from "../../01.focus.unit/focus.action";
//import * as ActPvt from "../../96.pivot.unit/pivot.action";
const ActTrm = require("../../act/terminal.action");
const ActChc = require("../../act/choice.action");
const ActGrd = require("../../act/grid.action");
var bit, lst, dex, idx, dat, src;
const socketMenu = async (cpy, bal, ste) => {
    lst = [ActSok.INIT_SOCKET, ActMnu.UPDATE_MENU];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActSok.INIT_SOCKET:
            bit = await ste.hunt(ActSok.INIT_SOCKET, {});
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
        bit = await ste.hunt(ActMnu.SOCKET_MENU, {});
    }, 333);
    return cpy;
};
exports.socketMenu = socketMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Align = require("../../val/align");
const Color = require("../../val/console-color");
//# sourceMappingURL=menu.socket.js.map