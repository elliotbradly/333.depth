"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subGenre = exports.listGenre = exports.writeGenre = exports.readGenre = exports.updateGenre = exports.initGenre = void 0;
const ActDsk = require("../../act/disk.action");
var bit, val, idx, dex, lst, dat;
const initGenre = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initGenre = initGenre;
const updateGenre = (cpy, bal, ste) => {
    return cpy;
};
exports.updateGenre = updateGenre;
const readGenre = (cpy, bal, ste) => {
    bal.slv({ genBit: { idx: "read-genre", src: cpy.genre } });
    return cpy;
};
exports.readGenre = readGenre;
const writeGenre = async (cpy, bal, ste) => {
    bit = await ste.bus(ActDsk.READ_DISK, { src: './lore/' + bal.idx + '/' + bal.src });
    dat = bit.dskBit.dat;
    cpy.genre = dat;
    bal.slv({ setBit: { idx: "write-setting", src: cpy.genre } });
    return cpy;
};
exports.writeGenre = writeGenre;
const listGenre = async (cpy, bal, ste) => {
    bit = await ste.bus(ActDsk.INDEX_DISK, { src: './lore/' + bal.idx + '/' });
    lst = bit.dskBit.lst;
    bal.slv({ genBit: { idx: "list-genre", lst } });
    return cpy;
};
exports.listGenre = listGenre;
const subGenre = (cpy, bal, ste) => {
    bal.slv({ genBit: { idx: "sub-genre", lst: cpy.list } });
    return cpy;
};
exports.subGenre = subGenre;
//# sourceMappingURL=genre.buzz.js.map