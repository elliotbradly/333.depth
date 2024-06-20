"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writePrompt = exports.readPrompt = exports.listPrompt = exports.updatePrompt = exports.initPrompt = void 0;
const ActPmt = require("../../12.prompt.unit/prompt.action");
const ActAut = require("../../13.author.unit/author.action");
const ActGen = require("../../14.genre.unit/genre.action");
const ActSet = require("../../15.setting.unit/setting.action");
const ActDsk = require("../../act/disk.action");
var bit, val, idx, dex, lst, dat, src;
const initPrompt = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initPrompt = initPrompt;
const updatePrompt = (cpy, bal, ste) => {
    return cpy;
};
exports.updatePrompt = updatePrompt;
const listPrompt = async (cpy, bal, ste) => {
    bit = await ste.bus(ActDsk.INDEX_DISK, { src: './lore/prompt/' });
    lst = bit.dskBit.lst;
    bal.slv({ pmtBit: { idx: "list-prompt", lst } });
    return cpy;
};
exports.listPrompt = listPrompt;
const readPrompt = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActAut.READ_AUTHOR, {});
    var author = bit.autBit.src;
    bit = await ste.hunt(ActGen.READ_GENRE, {});
    var genre = bit.genBit.src;
    bit = await ste.hunt(ActSet.READ_SETTING, {});
    var setting = bit.setBit.src;
    var gel = { setting, genre, author };
    var out = [];
    var prompt = cpy.prompt;
    var output = prompt.split('\n');
    output.forEach((a, b) => {
        if (a.includes('//') == true)
            return;
        var doTCompiled = doT.template(a);
        var outLine = doTCompiled(gel);
        out.push(outLine);
    });
    src = out.join('\n');
    bal.slv({ pmtBit: { idx: "read-prompt", src } });
    return cpy;
};
exports.readPrompt = readPrompt;
const writePrompt = async (cpy, bal, ste) => {
    if (bal.val == null) {
        bit = await ste.hunt(ActPmt.LIST_PROMPT, {});
        bit = await ste.bus(ActDsk.READ_DISK, { src: './lore/prompt/' + bal.src });
        dat = bit.dskBit.dat;
        cpy.prompt = dat;
        bit = await ste.hunt(ActPmt.READ_PROMPT, {});
        src = bit.pmtBit.src;
    }
    else {
        cpy.prompt = bal.src;
    }
    bal.slv({ pmtBit: { idx: "write-prompt", src } });
    return cpy;
};
exports.writePrompt = writePrompt;
const doT = require("dot");
//# sourceMappingURL=prompt.buzz.js.map