"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRpgmap = exports.removeRpgmap = exports.writeRpgmap = exports.readRpgmap = exports.updateRpgmap = exports.createRpgmap = exports.initRpgmap = void 0;
const ActCol = require("../../97.collect.unit/collect.action");
const ActRmp = require("../rpgmap.action");
var bit, val, idx, dex, lst, dat;
const initRpgmap = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initRpgmap = initRpgmap;
const createRpgmap = (cpy, bal, ste) => {
    if (bal.dat == null)
        bal.dat = {};
    bal.dat;
    var dat = { idx };
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    bal.slv({ rmpBit: { idx: 'create-rpgmap', dat } });
    return cpy;
    return cpy;
};
exports.createRpgmap = createRpgmap;
const updateRpgmap = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActRmp.READ_RPGMAP, { idx: bal.idx });
    dat = bit.rpmBit;
    bal.slv({ rmpBit: { idx: "update-rpgmap", dat } });
    return cpy;
};
exports.updateRpgmap = updateRpgmap;
const readRpgmap = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = 'pty00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActRmp.CREATE_RPGMAP });
    var item = bit.clcBit.dat;
    if (slv != null)
        slv({ rmpBit: { idx: "read-rpgmap", dat: item } });
    return cpy;
};
exports.readRpgmap = readRpgmap;
const writeRpgmap = async (cpy, bal, ste) => {
    var slv = bal.slv;
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActRmp.CREATE_RPGMAP });
    var item = bit.clcBit.dat;
    if (bit.clcBit.val == 1)
        await ste.hunt(ActRmp.UPDATE_RPGMAP, { idx: bal.idx, dat: bal.dat });
    if (slv != null)
        slv({ rmgBit: { idx: "write-rpgmap", dat: item } });
    return cpy;
};
exports.writeRpgmap = writeRpgmap;
const removeRpgmap = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActRmp.CREATE_RPGMAP });
    if (bal.slv != null)
        bal.slv({ rpgBit: { idx: "remove-rpgmap", dat: bit.clcBit } });
    return cpy;
};
exports.removeRpgmap = removeRpgmap;
const deleteRpgmap = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteRpgmap = deleteRpgmap;
//# sourceMappingURL=rpgmap.buzz.js.map