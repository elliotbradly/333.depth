"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrb = exports.initOrb = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActBus = require("../../99.bus.unit/bus.action");
const ActAmb = require("../../11.ambit.unit/ambit.action");
const ActOrb = require("../../00.orb.unit/orb.action");
const ActClk = require("../../03.clock.unit/clock.action");
const ActPvt = require("../../act/pivot.action");
const ActDsk = require("../../act/disk.action");
var bit, val, idx, dex, lst, dat;
const initOrb = async (cpy, bal, ste) => {
    if (bal.dat != null)
        bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActOrb, ActAmb, ActClk], dat: bal.dat, src: bal.src });
    //bit = await ste.hunt(ActClr.INIT_COLOR, { lst: bal.lst, bit: bal.bit, dat: bal.dat })
    if (bal.val == 1) {
        setTimeout(() => {
            patch(ste, ActMnu.INIT_MENU, bal);
        }, 33);
    }
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-orb" } });
    return cpy;
};
exports.initOrb = initOrb;
const updateOrb = async (cpy, bal, ste) => {
    var lstMsg = [];
    bit = await ste.bus(ActPvt.SHIP_PIVOT, { src: '811.orb' });
    lstMsg = lstMsg.concat(bit.pvtBit.lst);
    idx = "../../333.depth/811.orb/";
    bit = await ste.bus(ActDsk.COPY_DISK, { src: './work/811.orb/', idx });
    lstMsg = lstMsg.concat(bit.pvtBit);
    idx = "../../333.depth/812.space/";
    bit = await ste.bus(ActDsk.COPY_DISK, { src: './812.space/', idx });
    lstMsg = lstMsg.concat(bit.pvtBit);
    idx = "../../333.depth/814.being/";
    bit = await ste.bus(ActDsk.COPY_DISK, { src: './814.being/', idx });
    lstMsg = lstMsg.concat(bit.pvtBit);
    bal.slv({ orbBit: { idx: "update-orb", lst: lstMsg } });
    return cpy;
};
exports.updateOrb = updateOrb;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=orb.buzz.js.map