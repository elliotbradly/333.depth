"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.focusPlayMenu = void 0;
const ActMnu = require("../menu.action");
const ActTrm = require("../../act/terminal.action");
var bit, lst, dex, idx, dat, src;
const focusPlayMenu = async (cpy, bal, ste) => {
    var focMod = ste.value.focus;
    bit = await ste.bus(ActTrm.CLEAR_TERMINAL, { src: "-----------" });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Focus Play Menu V0" });
    bit = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" });
    bit = await ste.hunt(ActMnu.FOCUS_MENU, {});
    //updateMenu(cpy, bal, ste);
    return cpy;
};
exports.focusPlayMenu = focusPlayMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=focus-play-menu.buzz.js.map