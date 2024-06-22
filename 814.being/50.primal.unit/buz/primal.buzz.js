"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePrimal = exports.removePrimal = exports.writePrimal = exports.readPrimal = exports.updatePrimal = exports.createPrimal = exports.initPrimal = void 0;
const ActPrm = require("../../50.primal.unit/primal.action");
const ActCol = require("../../97.collect.unit/collect.action");
var bit, val, idx, dex, lst, dat, src;
const initPrimal = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initPrimal = initPrimal;
const createPrimal = async (cpy, bal, ste) => {
    var dat = { idx: bal.idx, src: bal.src };
    bal.slv({ priBit: { idx: "create-primal", dat } });
    return cpy;
};
exports.createPrimal = createPrimal;
const updatePrimal = async (cpy, bal, ste) => {
    return cpy;
};
exports.updatePrimal = updatePrimal;
const readPrimal = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = 'bnd00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActPrm.CREATE_PRIMAL });
    bal.slv({ priBit: { idx: "read-primal", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readPrimal = readPrimal;
const writePrimal = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActPrm.CREATE_PRIMAL });
    if (bal.slv != null)
        bal.slv({ priBit: { idx: "write-primal", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writePrimal = writePrimal;
const removePrimal = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.removePrimal = removePrimal;
const deletePrimal = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deletePrimal = deletePrimal;
//# sourceMappingURL=primal.buzz.js.map