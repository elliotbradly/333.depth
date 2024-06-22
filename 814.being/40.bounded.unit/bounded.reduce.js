"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./bounded.action");
const bounded_model_1 = require("./bounded.model");
const Buzz = require("./bounded.buzzer");
function reducer(model = new bounded_model_1.BoundedModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_BOUNDED:
            return Buzz.updateBounded(clone(model), act.bale, state);
        case Act.INIT_BOUNDED:
            return Buzz.initBounded(clone(model), act.bale, state);
        case Act.READ_BOUNDED:
            return Buzz.readBounded(clone(model), act.bale, state);
        case Act.WRITE_BOUNDED:
            return Buzz.writeBounded(clone(model), act.bale, state);
        case Act.REMOVE_BOUNDED:
            return Buzz.removeBounded(clone(model), act.bale, state);
        case Act.DELETE_BOUNDED:
            return Buzz.deleteBounded(clone(model), act.bale, state);
        case Act.CREATE_BOUNDED:
            return Buzz.createBounded(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=bounded.reduce.js.map