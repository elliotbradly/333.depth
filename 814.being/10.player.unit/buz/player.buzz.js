"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlayer = exports.removePlayer = exports.writePlayer = exports.readPlayer = exports.updatePlayer = exports.createPlayer = exports.initPlayer = void 0;
const ActPlr = require("../player.action");
const ActCol = require("../../97.collect.unit/collect.action");
var bit, val, idx, dex, lst, dat, src;
const initPlayer = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initPlayer = initPlayer;
const createPlayer = async (cpy, bal, ste) => {
    if (bal.dat == null)
        bal.dat = {};
    var dat = { idx: bal.idx };
    bal.slv({ plyBit: { idx: 'create-player', dat } });
    return cpy;
};
exports.createPlayer = createPlayer;
const updatePlayer = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActPlr.READ_PLAYER, { idx: bal.idx });
    dat = bit.plyBit;
    bal.slv({ plyBit: { idx: "update-player", dat } });
    return cpy;
};
exports.updatePlayer = updatePlayer;
const readPlayer = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = 'ply00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActPlr.CREATE_PLAYER });
    var item = bit.clcBit.dat;
    if (slv != null)
        slv({ plyBit: { idx: "read-player", dat: item } });
    return cpy;
};
exports.readPlayer = readPlayer;
const writePlayer = async (cpy, bal, ste) => {
    debugger;
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = 'ply00';
    debugger;
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActPlr.CREATE_PLAYER });
    var item = bit.clcBit.dat;
    debugger;
    if (bit.clcBit.val == 1)
        await ste.hunt(ActPlr.UPDATE_PLAYER, { idx: bal.idx, dat: bal.dat });
    debugger;
    if (slv != null)
        slv({ plyBit: { idx: "write-player", dat: item } });
    return cpy;
};
exports.writePlayer = writePlayer;
const removePlayer = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActPlr.DELETE_PLAYER });
    if (bal.slv != null)
        bal.slv({ plyBit: { idx: "remove-player", dat: bit.clcBit } });
    return cpy;
};
exports.removePlayer = removePlayer;
const deletePlayer = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deletePlayer = deletePlayer;
//# sourceMappingURL=player.buzz.js.map