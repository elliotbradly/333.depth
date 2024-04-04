"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlayer = exports.removePlayer = exports.writePlayer = exports.readPlayer = exports.updatePlayer = exports.createPlayer = exports.initPlayer = void 0;
const ActPly = require("../../10.player.unit/player.action");
const ActCol = require("../../97.collect.unit/collect.action");
var bit, val, idx, dex, lst, dat, src;
const initPlayer = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initPlayer = initPlayer;
const createPlayer = async (cpy, bal, ste) => {
    var comp = bal;
    if (bal.src == null)
        bal.src = 'sprite-ultrahudcomponent-window';
    var dat = { idx: bal.idx, src: bal.src };
    //var bit:Sprite_UltraHUDComponent_Window = comp.dat as Sprite_UltraHUDComponent_Window
    //dat.bit = bit;
    // dat.dat = bit._data;
    //debugger
    //var dat = { idx: bal.idx, src: bal.src, bit, dat: bit._data };
    bal.slv({ plyBit: { idx: "create-player", dat } });
    return cpy;
};
exports.createPlayer = createPlayer;
const updatePlayer = async (cpy, bal, ste) => {
    var data = bal.dat;
    bit = await ste.hunt(ActPly.READ_PLAYER, { idx: bal.idx });
    dat = bit.hudBit.dat;
    if (data.visible != null)
        dat.bit.visible = data.visible;
    bal.slv({ plyBit: { idx: "update-player", dat } });
    return cpy;
};
exports.updatePlayer = updatePlayer;
const readPlayer = async (cpy, bal, ste) => {
    var slv = bal.slv;
    if (bal.idx == null)
        bal.idx = 'ply00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActPly.CREATE_PLAYER });
    var item = bit.clcBit.dat;
    if (slv != null)
        slv({ plyBit: { idx: "read-player", dat: item } });
    return cpy;
};
exports.readPlayer = readPlayer;
const writePlayer = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActPly.CREATE_PLAYER });
    var item = bit.clcBit.dat;
    if (bit.clcBit.val == 1)
        await ste.hunt(ActPly.UPDATE_PLAYER, { idx: bal.idx, dat: bal.dat });
    bal.slv({ plyBit: { idx: "write-player", dat: item } });
    return cpy;
};
exports.writePlayer = writePlayer;
const removePlayer = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.removePlayer = removePlayer;
const deletePlayer = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.deletePlayer = deletePlayer;
//# sourceMappingURL=player.buzz.js.map