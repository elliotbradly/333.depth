"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WritePrompt = exports.WRITE_PROMPT = exports.ReadPrompt = exports.READ_PROMPT = exports.ListPrompt = exports.LIST_PROMPT = exports.UpdatePrompt = exports.UPDATE_PROMPT = exports.InitPrompt = exports.INIT_PROMPT = void 0;
// Prompt actions
exports.INIT_PROMPT = "[Prompt action] Init Prompt";
class InitPrompt {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_PROMPT;
    }
}
exports.InitPrompt = InitPrompt;
exports.UPDATE_PROMPT = "[Prompt action] Update Prompt";
class UpdatePrompt {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_PROMPT;
    }
}
exports.UpdatePrompt = UpdatePrompt;
exports.LIST_PROMPT = "[List action] List Prompt";
class ListPrompt {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LIST_PROMPT;
    }
}
exports.ListPrompt = ListPrompt;
exports.READ_PROMPT = "[Read action] Read Prompt";
class ReadPrompt {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_PROMPT;
    }
}
exports.ReadPrompt = ReadPrompt;
exports.WRITE_PROMPT = "[Write action] Write Prompt";
class WritePrompt {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_PROMPT;
    }
}
exports.WritePrompt = WritePrompt;
//# sourceMappingURL=prompt.action.js.map