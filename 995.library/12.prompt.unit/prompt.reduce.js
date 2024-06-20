"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./prompt.action");
const prompt_model_1 = require("./prompt.model");
const Buzz = require("./prompt.buzzer");
function reducer(model = new prompt_model_1.PromptModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_PROMPT:
            return Buzz.updatePrompt(clone(model), act.bale, state);
        case Act.INIT_PROMPT:
            return Buzz.initPrompt(clone(model), act.bale, state);
        case Act.LIST_PROMPT:
            return Buzz.listPrompt(clone(model), act.bale, state);
        case Act.READ_PROMPT:
            return Buzz.readPrompt(clone(model), act.bale, state);
        case Act.WRITE_PROMPT:
            return Buzz.writePrompt(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=prompt.reduce.js.map