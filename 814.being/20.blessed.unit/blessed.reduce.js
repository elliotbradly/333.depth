"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./blessed.action");
const blessed_model_1 = require("./blessed.model");
const Buzz = require("./blessed.buzzer");
function reducer(model = new blessed_model_1.BlessedModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_BLESSED:
            return Buzz.updateBlessed(clone(model), act.bale, state);
        case Act.INIT_BLESSED:
            return Buzz.initBlessed(clone(model), act.bale, state);
        case Act.READ_BLESSED:
            return Buzz.readBlessed(clone(model), act.bale, state);
        case Act.WRITE_BLESSED:
            return Buzz.writeBlessed(clone(model), act.bale, state);
        case Act.REMOVE_BLESSED:
            return Buzz.removeBlessed(clone(model), act.bale, state);
        case Act.DELETE_BLESSED:
            return Buzz.deleteBlessed(clone(model), act.bale, state);
        case Act.CREATE_BLESSED:
            return Buzz.createBlessed(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=blessed.reduce.js.map