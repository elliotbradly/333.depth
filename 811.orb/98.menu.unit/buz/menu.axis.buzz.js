"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.axisMenu = void 0;
const ActMnu = require("../menu.action");
const ActAxs = require("../../10.axis.unit/axis.action");
const ActAmb = require("../../11.ambit.unit/ambit.action");
const ActPut = require("../../act/input.action");
const ActTrm = require("../../act/terminal.action");
const ActChc = require("../../act/choice.action");
const ActGrd = require("../../act/grid.action");
const ActCns = require("../../act/console.action");
var bit, lst, dex, src, dat;
var simIDX;
var print = async (ste, bit) => {
    dat = bit.ambBit;
    if (dat == null)
        return;
    var itm = JSON.stringify(dat);
    lst = itm.split(',');
    lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a }));
    ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '------------' });
    //bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'open earth....' })
};
const axisMenu = async (cpy, bal, ste) => {
    if (bal == null)
        bal = { idx: null };
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Axis Menu V0" });
    bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" });
    lst = [ActAxs.WRITE_AXIS, ActAxs.READ_AXIS];
    bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 });
    bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat });
    src = bit.chcBit.src;
    switch (src) {
        case ActAxs.WRITE_AXIS:
            if (simIDX == null) {
                bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 6 });
                bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'earth input', net: bit.grdBit.dat });
                simIDX = '#' + bit.putBit.src;
                src = simIDX;
            }
            else {
                src = null;
            }
            bit = await ste.hunt(ActAmb.WRITE_AMBIT, { idx: simIDX, src });
            print(ste, bit);
            break;
        case ActAxs.READ_AXIS:
            bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 3, ySpan: 6 });
            bit = await ste.bus(ActPut.OPEN_INPUT, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, txt: 'earth input', net: bit.grdBit.dat });
            simIDX = '#' + bit.putBit.src;
            bit = await ste.hunt(ActAmb.READ_AMBIT, { idx: simIDX });
            print(ste, bit);
            break;
        default:
            bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
    }
    bit = await ste.hunt(ActMnu.AMBIT_MENU, {});
    return cpy;
};
exports.axisMenu = axisMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const Color = require("../../val/console-color");
const Align = require("../../val/align");
//# sourceMappingURL=menu.axis.buzz.js.map