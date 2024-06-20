"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLibrary = exports.initLibrary = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActBus = require("../../99.bus.unit/bus.action");
const ActLib = require("../library.action");
const ActOlm = require("../../01.ollama.unit/ollama.action");
const ActDsk = require("../../act/disk.action");
const ActPvt = require("../../act/pivot.action");
var bit, val, idx, dex, lst, dat;
const initLibrary = async (cpy, bal, ste) => {
    if (bal.dat != null)
        bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActLib, ActOlm], dat: bal.dat, src: bal.src });
    if (bal.val == 1)
        patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-control" } });
    return cpy;
};
exports.initLibrary = initLibrary;
const updateLibrary = async (cpy, bal, ste) => {
    var lstMsg = [];
    debugger;
    bit = await ste.bus(ActPvt.SHIP_PIVOT, { src: '995.library' });
    lstMsg = lstMsg.concat(bit.pvtBit.lst);
    debugger;
    idx = "../../333.depth/995.library/";
    bit = await ste.bus(ActDsk.COPY_DISK, { src: './work/995.library/', idx });
    lstMsg = lstMsg.concat(bit.pvtBit);
    debugger;
    //idx = "../../333.depth/812.space/";
    //bit = await ste.bus(ActDsk.COPY_DISK, { src: './812.space/', idx  });
    //lstMsg = lstMsg.concat(bit.pvtBit)
    //idx = "../../333.depth/814.being/";
    //bit = await ste.bus(ActDsk.COPY_DISK, { src: './814.being/', idx  });
    //lstMsg = lstMsg.concat(bit.pvtBit)
    bal.slv({ libBit: { idx: "update-library", lst: lstMsg } });
    return cpy;
};
exports.updateLibrary = updateLibrary;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=library.buzz.js.map