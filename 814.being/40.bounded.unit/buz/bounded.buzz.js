"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBounded = exports.removeBounded = exports.writeBounded = exports.readBounded = exports.updateBounded = exports.createBounded = exports.initBounded = void 0;
const ActBnd = require("../../40.bounded.unit/bounded.action");
const ActCol = require("../../97.collect.unit/collect.action");
var bit, val, idx, dex, lst, dat, src;
const initBounded = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initBounded = initBounded;
const createBounded = async (cpy, bal, ste) => {
    var dat = { idx: bal.idx, src: bal.src };
    bal.slv({ bndBit: { idx: "create-bound", dat } });
    return cpy;
};
exports.createBounded = createBounded;
const updateBounded = async (cpy, bal, ste) => {
    return cpy;
};
exports.updateBounded = updateBounded;
const readBounded = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = 'bnd00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActBnd.CREATE_BOUNDED });
    bal.slv({ bndBit: { idx: "read-bounded", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readBounded = readBounded;
const writeBounded = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActBnd.CREATE_BOUNDED });
    if (bal.slv != null)
        bal.slv({ bndBit: { idx: "write-bounded", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeBounded = writeBounded;
const removeBounded = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.removeBounded = removeBounded;
const deleteBounded = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteBounded = deleteBounded;
//# sourceMappingURL=bounded.buzz.js.map