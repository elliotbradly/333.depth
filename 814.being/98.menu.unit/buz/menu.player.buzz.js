"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerMenu = void 0;
const ActMnu = require("../menu.action");
const ActPly = require("../../10.player.unit/player.action");
const ActChc = require("../../act/choice.action");
const ActCns = require("../../act/console.action");
const ActGrd = require("../../act/grid.action");
var bit, lst, dex, idx, dat, src;
const playerMenu = async (cpy, bal, ste) => {
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Player Menu" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    lst = [ActPly.WRITE_PLAYER, ActPly.READ_PLAYER, ActMnu.UPDATE_MENU];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActPly.WRITE_PLAYER:
            bit = await ste.hunt(ActPly.WRITE_PLAYER, { idx });
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActPly.READ_PLAYER:
            bit = await ste.hunt(ActPly.READ_PLAYER, { src });
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActMnu.UPDATE_MENU:
            bit = await ste.hunt(ActMnu.UPDATE_MENU, {});
            break;
    }
    bit = await ste.hunt(ActMnu.PLAYER_MENU, {});
    cpy;
};
exports.playerMenu = playerMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Color = require("../../val/console-color");
const Align = require("../../val/align");
//# sourceMappingURL=menu.player.buzz.js.map