"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./axis.action");
const axis_model_1 = require("./axis.model");
const Buzz = require("./axis.buzzer");
function reducer(model = new axis_model_1.AxisModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_AXIS:
            return Buzz.updateAxis(clone(model), act.bale, state);
        case Act.INIT_AXIS:
            return Buzz.initAxis(clone(model), act.bale, state);
        case Act.READ_AXIS:
            return Buzz.readAxis(clone(model), act.bale, state);
        case Act.WRITE_AXIS:
            return Buzz.writeAxis(clone(model), act.bale, state);
        case Act.REMOVE_AXIS:
            return Buzz.removeAxis(clone(model), act.bale, state);
        case Act.DELETE_AXIS:
            return Buzz.deleteAxis(clone(model), act.bale, state);
        case Act.CREATE_AXIS:
            return Buzz.createAxis(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=axis.reduce.js.map