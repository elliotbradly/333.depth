"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./emotion.action");
const emotion_model_1 = require("./emotion.model");
const Buzz = require("./emotion.buzzer");
function reducer(model = new emotion_model_1.EmotionModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_EMOTION:
            return Buzz.updateEmotion(clone(model), act.bale, state);
        case Act.INIT_EMOTION:
            return Buzz.initEmotion(clone(model), act.bale, state);
        case Act.SELECT_EMOTION:
            return Buzz.selectEmotion(clone(model), act.bale, state);
        case Act.READ_EMOTION:
            return Buzz.readEmotion(clone(model), act.bale, state);
        case Act.WRITE_EMOTION:
            return Buzz.writeEmotion(clone(model), act.bale, state);
        case Act.REMOVE_EMOTION:
            return Buzz.removeEmotion(clone(model), act.bale, state);
        case Act.DELETE_EMOTION:
            return Buzz.deleteEmotion(clone(model), act.bale, state);
        case Act.CREATE_EMOTION:
            return Buzz.createEmotion(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=emotion.reduce.js.map