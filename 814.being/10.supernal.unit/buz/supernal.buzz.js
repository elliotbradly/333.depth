"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSupernal = exports.removeSupernal = exports.writeSupernal = exports.readSupernal = exports.updateSupernal = exports.createSupernal = exports.initSupernal = void 0;
const ActSup = require("../../10.supernal.unit/supernal.action");
const ActCol = require("../../97.collect.unit/collect.action");
var bit, val, idx, dex, lst, dat, src;
const initSupernal = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initSupernal = initSupernal;
const createSupernal = async (cpy, bal, ste) => {
    var dat = { idx: bal.idx, src: bal.src };
    bal.slv({ spkBit: { idx: "create-spark", dat } });
    return cpy;
};
exports.createSupernal = createSupernal;
const updateSupernal = async (cpy, bal, ste) => {
    return cpy;
};
exports.updateSupernal = updateSupernal;
const readSupernal = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = 'sup00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActSup.CREATE_SUPERNAL });
    bal.slv({ spkBit: { idx: "read-spark", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readSupernal = readSupernal;
const writeSupernal = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActSup.CREATE_SUPERNAL });
    if (bal.slv != null)
        bal.slv({ spkBit: { idx: "write-spark", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeSupernal = writeSupernal;
const removeSupernal = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.removeSupernal = removeSupernal;
const deleteSupernal = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteSupernal = deleteSupernal;
//# sourceMappingURL=supernal.buzz.js.map