"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSpark = exports.removeSpark = exports.writeSpark = exports.readSpark = exports.updateSpark = exports.createSpark = exports.initSpark = void 0;
const ActSpk = require("../../01.spark.unit/spark.action");
const ActCol = require("../../97.collect.unit/collect.action");
var bit, val, idx, dex, lst, dat, src;
const initSpark = async (cpy, bal, ste) => {
    //set up colors 
    //src = '000.color.name.json'
    //bit = await ste.bus(ActDsk.READ_DISK, { src: './data/color-list/' + src })
    //var colorList = bit.dskBit.dat;
    //lst = JSON.parse(colorList)
    //bit = await ste.bus(ActClr.WRITE_COLOR, { idx: 'clr00', dat: { lst } });
    //var staveDataLoc = './data/stave/'
    //src = staveDataLoc + '002.genisi.txt';
    //bit = await ste.bus(ActStv.WRITE_STAVE, { src });
    bal.slv({ intBit: { idx: "init-spark" } });
    return cpy;
};
exports.initSpark = initSpark;
const createSpark = async (cpy, bal, ste) => {
    var dat = { idx: bal.idx, src: bal.src };
    bal.slv({ spkBit: { idx: "create-spark", dat } });
    return cpy;
};
exports.createSpark = createSpark;
const updateSpark = async (cpy, bal, ste) => {
    return cpy;
};
exports.updateSpark = updateSpark;
const readSpark = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = 'spk00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActSpk.CREATE_SPARK });
    bal.slv({ spkBit: { idx: "read-spark", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readSpark = readSpark;
const writeSpark = async (cpy, bal, ste) => {
    debugger;
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActSpk.CREATE_SPARK });
    if (bal.slv != null)
        bal.slv({ spkBit: { idx: "write-spark", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeSpark = writeSpark;
const removeSpark = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.removeSpark = removeSpark;
const deleteSpark = async (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deleteSpark = deleteSpark;
//# sourceMappingURL=spark.buzz.js.map