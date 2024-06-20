"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ollamaMenu = void 0;
const ActMnu = require("../menu.action");
const ActOlm = require("../../01.ollama.unit/ollama.action");
//import * as ActFoc from "../../01.focus.unit/focus.action";
//import * as ActPvt from "../../96.pivot.unit/pivot.action";
const ActPmt = require("../../12.prompt.unit/prompt.action");
const ActTrm = require("../../act/terminal.action");
const ActChc = require("../../act/choice.action");
const ActPut = require("../../act/input.action");
const ActGrd = require("../../act/grid.action");
var bit, lst, dex, idx, dat, src;
const ollamaMenu = async (cpy, bal, ste) => {
    lst = [ActOlm.INPUT_OLLAMA, ActOlm.WRITE_OLLAMA, ActMnu.UPDATE_MENU];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActOlm.INPUT_OLLAMA:
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 6 });
            bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
            src = bit.putBit.src;
            bit = await ste.hunt(ActPmt.WRITE_PROMPT, { src, val: 1 });
            bit = await ste.hunt(ActOlm.WRITE_OLLAMA, { src: 'committing control' });
            bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "ollama complete" });
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActOlm.WRITE_OLLAMA:
            bit = await ste.hunt(ActOlm.WRITE_OLLAMA, { src: 'committing control' });
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
        bit = await ste.hunt(ActMnu.OLLAMA_MENU, {});
    }, 333);
    return cpy;
};
exports.ollamaMenu = ollamaMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Align = require("../../val/align");
const Color = require("../../val/console-color");
//# sourceMappingURL=menu.ollama.js.map