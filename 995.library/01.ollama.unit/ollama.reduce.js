"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./ollama.action");
const ollama_model_1 = require("./ollama.model");
const Buzz = require("./ollama.buzzer");
function reducer(model = new ollama_model_1.OllamaModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_OLLAMA:
            return Buzz.updateOllama(clone(model), act.bale, state);
        case Act.INIT_OLLAMA:
            return Buzz.initOllama(clone(model), act.bale, state);
        case Act.WRITE_OLLAMA:
            return Buzz.writeOllama(clone(model), act.bale, state);
        case Act.INPUT_OLLAMA:
            return Buzz.inputOllama(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=ollama.reduce.js.map