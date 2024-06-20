"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputOllama = exports.INPUT_OLLAMA = exports.WriteOllama = exports.WRITE_OLLAMA = exports.UpdateOllama = exports.UPDATE_OLLAMA = exports.InitOllama = exports.INIT_OLLAMA = void 0;
// Ollama actions
exports.INIT_OLLAMA = "[Ollama action] Init Ollama";
class InitOllama {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_OLLAMA;
    }
}
exports.InitOllama = InitOllama;
exports.UPDATE_OLLAMA = "[Ollama action] Update Ollama";
class UpdateOllama {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_OLLAMA;
    }
}
exports.UpdateOllama = UpdateOllama;
exports.WRITE_OLLAMA = "[Write action] Write Ollama";
class WriteOllama {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_OLLAMA;
    }
}
exports.WriteOllama = WriteOllama;
exports.INPUT_OLLAMA = "[Input action] Input Ollama";
class InputOllama {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INPUT_OLLAMA;
    }
}
exports.InputOllama = InputOllama;
//# sourceMappingURL=ollama.action.js.map