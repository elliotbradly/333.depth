"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeOpenai = exports.updateOpenai = exports.initOpenai = void 0;
const ActPmt = require("../../12.prompt.unit/prompt.action");
const ActAut = require("../../13.author.unit/author.action");
const ActDsk = require("../../act/disk.action");
const ActCns = require("../../act/console.action");
var bit, val, idx, dex, lst, dat;
const initOpenai = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initOpenai = initOpenai;
const updateOpenai = (cpy, bal, ste) => {
    return cpy;
};
exports.updateOpenai = updateOpenai;
const writeOpenai = async (cpy, bal, ste) => {
    require("dotenv").config();
    const { Configuration, OpenAIApi } = require('openai');
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    bit = await ste.hunt(ActPmt.READ_PROMPT, {});
    var prompt = bit.pmtBit.src;
    bit = await ste.hunt(ActAut.READ_AUTHOR, {});
    var author = bit.autBit.src;
    var content = prompt;
    var love = [
        {
            "role": "system", "content": author
        },
        {
            "role": "user", "content": content
        }
    ];
    love;
    debugger;
    var completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: love,
    });
    var response = completion.data.choices[0].message.content;
    debugger;
    var fin = response;
    fin = S(fin).replaceAll(".", ". \n").s;
    fin = S(fin).replaceAll(",", ", \n").s;
    fin = S(fin).replaceAll("(", "\n(").s;
    fin = S(fin).replaceAll(" and ", "\nand ").s;
    //clipboardy.writeSync(response)
    lst = fin.split('\n');
    lst.forEach((a, b) => {
        lst[b] = S(a).collapseWhitespace().s;
    });
    lst.forEach((a) => {
        ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: a });
    });
    bit = await ste.bus(ActDsk.READ_DISK, { src: './lore/progress.txt' });
    fin = fin + '\n ' + bit.dskBit.dat;
    bal.slv({ oaiBit: { idx: "write-openai", lst } });
    return cpy;
};
exports.writeOpenai = writeOpenai;
const S = require("string");
//# sourceMappingURL=openai.buzz.js.map