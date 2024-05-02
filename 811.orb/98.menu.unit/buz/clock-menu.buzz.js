"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clockMenu = void 0;
const ActMnu = require("../menu.action");
const ActClk = require("../../03.clock.unit/clock.action");
const ActTrm = require("../../act/terminal.action");
const ActCns = require("../../act/console.action");
const ActChc = require("../../act/choice.action");
const ActGrd = require("../../act/grid.action");
var bit, lst, dex, src, dat;
var simIDX;
var print = async (ste, bit) => {
    dat = bit.clkBit;
    if (dat == null)
        return;
    var itm = JSON.stringify(dat);
    var out = [];
    itm.split('').forEach((a, b) => {
        var val = a.charCodeAt(0);
        if (val == 191)
            return;
        if (val == 220)
            return;
        out.push(a);
    });
    out;
    lst = out.join('').split(',');
    lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a }));
    ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '------------' });
    //bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'open earth....' })
};
const clockMenu = async (cpy, bal, ste) => {
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    lst = [ActClk.UPDATE_CLOCK, ActClk.TEST_CLOCK, ActClk.BLOCK_CLOCK, ActClk.WRITE_CLOCK];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActClk.TEST_CLOCK:
            idx = 'clk00';
            var clk = { idx, yrs: 1978, mth: 4, day: 11 };
            bit = await ste.hunt(ActClk.WRITE_CLOCK, { idx, clk });
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            (0, exports.clockMenu)(cpy, bal, ste);
            break;
        case ActClk.UPDATE_CLOCK:
            var idx = 'clk00';
            var dat = { idx };
            dat.yrs = 1;
            dat.mth = 1;
            dat.hrs = 1;
            dat.day = 1;
            dat.min = 1;
            dat.sec = 1;
            bit = await ste.hunt(ActClk.WRITE_CLOCK, { idx, dat });
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            (0, exports.clockMenu)(cpy, bal, ste);
            break;
        case ActClk.WRITE_CLOCK:
            bit = await ste.bus(ActTrm.INPUT_TERMINAL, { lst: ["", "", "idx clock..."] });
            idx = bit.trmBit.src;
            bit = await ste.hunt(ActClk.WRITE_CLOCK, { idx });
            print(ste, bit);
            (0, exports.clockMenu)(cpy, bal, ste);
            break;
        case ActClk.BLOCK_CLOCK:
            //if (simIDX == null) {
            //    simIDX = 'sim00';
            //    bit = await ste.hunt(ActClk.WRITE_CLOCK, { idx: simIDX })
            //}
            require("dotenv").config();
            bit = await ste.hunt(ActClk.BLOCK_CLOCK, { idx: process.env.BLOCKFROST });
            bit = await ste.hunt(ActMnu.PRINT_MENU, bit);
            //setInterval(async () => {
            //    print(ste, bit)
            //    clockMenu(cpy, bal, ste)
            //}, 1000)
            (0, exports.clockMenu)(cpy, bal, ste);
            break;
        default:
            bit = await await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    (0, exports.clockMenu)(cpy, bal, ste);
    return cpy;
};
exports.clockMenu = clockMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Color = require("../../val/console-color");
const Align = require("../../val/align");
//# sourceMappingURL=clock-menu.buzz.js.map