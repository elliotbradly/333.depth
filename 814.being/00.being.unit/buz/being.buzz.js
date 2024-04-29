"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBeing = exports.initBeing = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActBee = require("../../00.being.unit/being.action");
const ActSpk = require("../../01.spark.unit/spark.action");
const ActBus = require("../../99.bus.unit/bus.action");
const ActDsk = require("../../act/disk.action");
const ActPvt = require("../../act/pivot.action");
var bit, val, idx, dex, lst, dat, src;
const initBeing = async (cpy, bal, ste) => {
    if (bal.dat != null)
        bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActBee, ActSpk], dat: bal.dat, src: bal.src });
    if (bal.val == 1)
        patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-being" } });
    return cpy;
};
exports.initBeing = initBeing;
const updateBeing = async (cpy, bal, ste) => {
    var lstMsg = [];
    bit = await ste.bus(ActPvt.SHIP_PIVOT, { src: '814.being' });
    lstMsg = lstMsg.concat(bit.pvtBit.lst);
    idx = "../811.earth/814.being/";
    bit = await ste.bus(ActDsk.COPY_DISK, { src: './work/814.being/', idx });
    lstMsg = lstMsg.concat(bit.pvtBit);
    bal.slv({ beeBit: { idx: "update-being", lst: lstMsg } });
    return cpy;
};
exports.updateBeing = updateBeing;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=being.buzz.js.map