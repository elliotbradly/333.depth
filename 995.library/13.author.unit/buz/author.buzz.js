"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAuthor = exports.writeAuthor = exports.readAuthor = exports.updateAuthor = exports.initAuthor = void 0;
const ActDsk = require("../../act/disk.action");
var bit, val, idx, dex, lst, dat;
const initAuthor = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initAuthor = initAuthor;
const updateAuthor = (cpy, bal, ste) => {
    return cpy;
};
exports.updateAuthor = updateAuthor;
const readAuthor = (cpy, bal, ste) => {
    bal.slv({ autBit: { idx: "read-author", src: cpy.author } });
    return cpy;
};
exports.readAuthor = readAuthor;
const writeAuthor = async (cpy, bal, ste) => {
    bit = await ste.bus(ActDsk.READ_DISK, { src: './lore/author/' + bal.src });
    dat = bit.dskBit.dat;
    cpy.author = dat;
    bal.slv({ autBit: { idx: "write-author", src: cpy.author } });
    return cpy;
};
exports.writeAuthor = writeAuthor;
const listAuthor = async (cpy, bal, ste) => {
    bit = await ste.bus(ActDsk.INDEX_DISK, { src: './lore/author/' });
    lst = bit.dskBit.lst;
    bal.slv({ autBit: { idx: "list-author", lst } });
    return cpy;
};
exports.listAuthor = listAuthor;
//# sourceMappingURL=author.buzz.js.map