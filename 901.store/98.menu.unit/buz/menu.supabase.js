"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabaseMenu = void 0;
const ActMnu = require("../menu.action");
const ActSup = require("../../80.supabase.unit/supabase.action");
//import * as ActFoc from "../../01.focus.unit/focus.action";
//import * as ActPvt from "../../96.pivot.unit/pivot.action";
//import * as ActMap from "../../03.hexmap.unit/hexmap.action"
const ActTrm = require("../../act/terminal.action");
const ActChc = require("../../act/choice.action");
111;
const ActGrd = require("../../act/grid.action");
const ActCns = require("../../act/console.action");
var bit, lst, dex, idx, dat, src;
const supabaseMenu = async (cpy, bal, ste) => {
    lst = [ActSup.INIT_SUPABASE, ActSup.UPDATE_SUPABASE];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 5, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActSup.INIT_SUPABASE:
            require("dotenv").config();
            var url = 'https://' + process.env.SUPABASE_URL;
            var key = process.env.SUPABASE_ANON;
            var role = process.env.SUPABASE_SERVICE_ROLE;
            bit = await ste.hunt(ActSup.INIT_SUPABASE, { dat: { url, key } });
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActSup.UPDATE_SUPABASE:
            bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "update supabase" });
            bit = await ste.hunt(ActSup.UPDATE_SUPABASE, {});
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        case ActMnu.UPDATE_MENU:
            bit = await ste.hunt(ActMnu.UPDATE_MENU);
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            break;
        default:
            bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    setTimeout(() => { (0, exports.supabaseMenu)(cpy, bal, ste); }, 11);
    return cpy;
};
exports.supabaseMenu = supabaseMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Align = require("../../val/align");
const Color = require("../../val/console-color");
//# sourceMappingURL=menu.supabase.js.map