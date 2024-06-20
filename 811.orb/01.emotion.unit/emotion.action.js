"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmotion = exports.CREATE_EMOTION = exports.DeleteEmotion = exports.DELETE_EMOTION = exports.RemoveEmotion = exports.REMOVE_EMOTION = exports.WriteEmotion = exports.WRITE_EMOTION = exports.ReadEmotion = exports.READ_EMOTION = exports.SelectEmotion = exports.SELECT_EMOTION = exports.UpdateEmotion = exports.UPDATE_EMOTION = exports.InitEmotion = exports.INIT_EMOTION = void 0;
// Emotion actions
exports.INIT_EMOTION = "[Emotion action] Init Emotion";
class InitEmotion {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_EMOTION;
    }
}
exports.InitEmotion = InitEmotion;
exports.UPDATE_EMOTION = "[Emotion action] Update Emotion";
class UpdateEmotion {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_EMOTION;
    }
}
exports.UpdateEmotion = UpdateEmotion;
exports.SELECT_EMOTION = "[Select action] Select Emotion";
class SelectEmotion {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SELECT_EMOTION;
    }
}
exports.SelectEmotion = SelectEmotion;
exports.READ_EMOTION = "[Read action] Read Emotion";
class ReadEmotion {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_EMOTION;
    }
}
exports.ReadEmotion = ReadEmotion;
exports.WRITE_EMOTION = "[Write action] Write Emotion";
class WriteEmotion {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_EMOTION;
    }
}
exports.WriteEmotion = WriteEmotion;
exports.REMOVE_EMOTION = "[Remove action] Remove Emotion";
class RemoveEmotion {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_EMOTION;
    }
}
exports.RemoveEmotion = RemoveEmotion;
exports.DELETE_EMOTION = "[Delete action] Delete Emotion";
class DeleteEmotion {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_EMOTION;
    }
}
exports.DeleteEmotion = DeleteEmotion;
exports.CREATE_EMOTION = "[Create action] Create Emotion";
class CreateEmotion {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_EMOTION;
    }
}
exports.CreateEmotion = CreateEmotion;
//# sourceMappingURL=emotion.action.js.map