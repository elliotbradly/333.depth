"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriteOpenai = exports.WRITE_OPENAI = exports.UpdateOpenai = exports.UPDATE_OPENAI = exports.InitOpenai = exports.INIT_OPENAI = void 0;
// Openai actions
exports.INIT_OPENAI = "[Openai action] Init Openai";
class InitOpenai {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_OPENAI;
    }
}
exports.InitOpenai = InitOpenai;
exports.UPDATE_OPENAI = "[Openai action] Update Openai";
class UpdateOpenai {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_OPENAI;
    }
}
exports.UpdateOpenai = UpdateOpenai;
exports.WRITE_OPENAI = "[Write action] Write Openai";
class WriteOpenai {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_OPENAI;
    }
}
exports.WriteOpenai = WriteOpenai;
//# sourceMappingURL=openai.action.js.map