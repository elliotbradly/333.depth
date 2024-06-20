"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./openai.action");
const openai_model_1 = require("./openai.model");
const Buzz = require("./openai.buzzer");
function reducer(model = new openai_model_1.OpenaiModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_OPENAI:
            return Buzz.updateOpenai(clone(model), act.bale, state);
        case Act.INIT_OPENAI:
            return Buzz.initOpenai(clone(model), act.bale, state);
        case Act.WRITE_OPENAI:
            return Buzz.writeOpenai(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=openai.reduce.js.map