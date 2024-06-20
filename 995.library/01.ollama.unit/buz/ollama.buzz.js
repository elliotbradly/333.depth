"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputOllama = exports.writeOllama = exports.updateOllama = exports.initOllama = void 0;
const ActPmt = require("../../12.prompt.unit/prompt.action");
const ActAut = require("../../13.author.unit/author.action");
const ActDsk = require("../../act/disk.action");
const ActCns = require("../../act/console.action");
var bit, val, idx, dex, lst, dat;
const initOllama = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initOllama = initOllama;
const updateOllama = (cpy, bal, ste) => {
    return cpy;
};
exports.updateOllama = updateOllama;
const writeOllama = async (cpy, bal, ste) => {
    var _a, e_1, _b, _c;
    bit = await ste.hunt(ActPmt.READ_PROMPT, {});
    var prompt = bit.pmtBit.src;
    bit = await ste.hunt(ActAut.READ_AUTHOR, {});
    var author = bit.autBit.src;
    const message0 = { role: 'system', content: author };
    const message1 = { role: 'user', content: prompt };
    const response = await ollama_1.default.chat({ model: 'llama3', messages: [message0, message1], stream: true });
    var output = [];
    var line = [];
    var size = 10;
    try {
        for (var _d = true, response_1 = __asyncValues(response), response_1_1; response_1_1 = await response_1.next(), _a = response_1_1.done, !_a; _d = true) {
            _c = response_1_1.value;
            _d = false;
            const part = _c;
            //process.stdout.write(part.message.content)
            output.push(part.message.content);
            line.push(part.message.content);
            if (line.length > size) {
                ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: line.join('') });
                bit = await ste.bus(ActDsk.READ_DISK, { src: './lore/progress.txt' });
                var fin = line.join('');
                fin = S(fin).replaceAll(".", ". \n").s;
                fin = S(fin).replaceAll(",", ", \n").s;
                fin = S(fin).replaceAll("(", "\n(").s;
                fin = S(fin).replaceAll(" and ", "\nand ").s;
                fin = fin + bit.dskBit.dat;
                bit = await ste.bus(ActDsk.WRITE_DISK, { src: './lore/progress.txt', dat: fin });
                line = [];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (!_d && !_a && (_b = response_1.return)) await _b.call(response_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    bal.slv({ olmBit: { idx: "write-ollama", lst } });
    return cpy;
};
exports.writeOllama = writeOllama;
const inputOllama = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.inputOllama = inputOllama;
const ollama_1 = require("ollama");
const S = require("string");
//# sourceMappingURL=ollama.buzz.js.map