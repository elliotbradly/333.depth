"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmotion = exports.removeEmotion = exports.writeEmotion = exports.readEmotion = exports.selectEmotion = exports.updateEmotion = exports.createEmotion = exports.initEmotion = void 0;
const ActEmo = require("../../01.emotion.unit/emotion.action");
const ActCol = require("../../97.collect.unit/collect.action");
const ActDsk = require("../../act/disk.action");
var bit, val, idx, dex, lst, dat, src;
const initEmotion = async (cpy, bal, ste) => {
    bal.slv({ intBit: { idx: "init-emotion", dat: cpy.data } });
    return cpy;
};
exports.initEmotion = initEmotion;
const createEmotion = async (cpy, bal, ste) => {
    var dat = { idx: bal.idx, src: bal.src };
    bit = await ste.bus(ActDsk.READ_DISK, { src: './data/emotion.txt' });
    var emotion = bit.dskBit.dat;
    bit = await ste.hunt(ActCol.HASH_COLLECT, { src: emotion });
    dat.dat = bit.clcBit.dat;
    bal.slv({ palBit: { idx: "create-emotion", dat } });
    return cpy;
};
exports.createEmotion = createEmotion;
const updateEmotion = async (cpy, bal, ste) => {
    return cpy;
};
exports.updateEmotion = updateEmotion;
const selectEmotion = async (cpy, bal, ste) => {
    if (cpy.firstLoad == false) {
        bit = await ste.hunt(ActEmo.INIT_EMOTION, {});
    }
    lst = cpy.data['emotion'];
    bit = await ste.hunt(ActCol.SELECT_COLLECT, { lst });
    idx = bit.clcBit.dat;
    lst = cpy.data[idx];
    bit = await ste.hunt(ActCol.SELECT_COLLECT, { lst });
    src = bit.clcBit.dat;
    lst = cpy.data[src];
    bit = await ste.hunt(ActCol.SELECT_COLLECT, { lst });
    dat = bit.clcBit.dat;
    var output = 'emotion: ' + idx + ' , ' + src + ' , ' + dat;
    var ncp = require('node-clipboardy');
    ncp.writeSync(output);
    bal.slv({ intBit: { idx: "select-emotion", src: output } });
    return cpy;
};
exports.selectEmotion = selectEmotion;
const readEmotion = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = "hex00";
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, src: bal.src, bit: ActEmo.CREATE_EMOTION });
    if (slv != null)
        slv({ emoBit: { idx: "read-emotion", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readEmotion = readEmotion;
const writeEmotion = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActEmo.CREATE_EMOTION });
    var data = bit.clcBit.dat;
    if (bal.slv != null)
        bal.slv({ emoBit: { idx: "write-emotion", dat: data } });
    return cpy;
};
exports.writeEmotion = writeEmotion;
const removeEmotion = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.removeEmotion = removeEmotion;
const deleteEmotion = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteEmotion = deleteEmotion;
//# sourceMappingURL=emotion.buzz.js.map