"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePastoral = exports.removePastoral = exports.writePastoral = exports.readPastoral = exports.updatePastoral = exports.createPastoral = exports.initPastoral = void 0;
const ActPst = require("../../30.pastoral.unit/pastoral.action");
const ActCol = require("../../97.collect.unit/collect.action");
var bit, val, idx, dex, lst, dat, src;
const initPastoral = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initPastoral = initPastoral;
const createPastoral = async (cpy, bal, ste) => {
    var dat = { idx: bal.idx, src: bal.src };
    bal.slv({ pstBit: { idx: "create-pastoral", dat } });
    return cpy;
};
exports.createPastoral = createPastoral;
const updatePastoral = async (cpy, bal, ste) => {
    return cpy;
};
exports.updatePastoral = updatePastoral;
const readPastoral = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = 'pst00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActPst.CREATE_PASTORAL });
    bal.slv({ pstBit: { idx: "read-pastoral", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readPastoral = readPastoral;
const writePastoral = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActPst.CREATE_PASTORAL });
    if (bal.slv != null)
        bal.slv({ pstBit: { idx: "write-pastoral", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writePastoral = writePastoral;
const removePastoral = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.removePastoral = removePastoral;
const deletePastoral = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deletePastoral = deletePastoral;
//# sourceMappingURL=pastoral.buzz.js.map