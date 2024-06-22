"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlessed = exports.removeBlessed = exports.writeBlessed = exports.readBlessed = exports.updateBlessed = exports.createBlessed = exports.initBlessed = void 0;
const ActBls = require("../../20.blessed.unit/blessed.action");
const ActCol = require("../../97.collect.unit/collect.action");
var bit, val, idx, dex, lst, dat, src;
const initBlessed = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initBlessed = initBlessed;
const createBlessed = async (cpy, bal, ste) => {
    var dat = { idx: bal.idx, src: bal.src };
    bal.slv({ blsBit: { idx: "create-blessed", dat } });
    return cpy;
};
exports.createBlessed = createBlessed;
const updateBlessed = async (cpy, bal, ste) => {
    return cpy;
};
exports.updateBlessed = updateBlessed;
const readBlessed = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = 'bls00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActBls.CREATE_BLESSED });
    bal.slv({ blsBit: { idx: "read-blessed", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readBlessed = readBlessed;
const writeBlessed = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActBls.CREATE_BLESSED });
    if (bal.slv != null)
        bal.slv({ blsBit: { idx: "write-blessed", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeBlessed = writeBlessed;
const removeBlessed = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.removeBlessed = removeBlessed;
const deleteBlessed = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteBlessed = deleteBlessed;
//# sourceMappingURL=blessed.buzz.js.map