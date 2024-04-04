"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./depth.action");
const depth_model_1 = require("./depth.model");
const Buzz = require("./depth.buzzer");
function reducer(model = new depth_model_1.DepthModel(), act, state) {
    switch (act.type) {
        case Act.OPEN_DEPTH:
            return Buzz.openDepth(clone(model), act.bale, state);
        case Act.UPDATE_DEPTH:
            return Buzz.updateDepth(clone(model), act.bale, state);
        case Act.INIT_DEPTH:
            return Buzz.initDepth(clone(model), act.bale, state);
        case Act.TEST_DEPTH:
            return Buzz.testDepth(clone(model), act.bale, state);
        case Act.COMMIT_DEPTH:
            return Buzz.commitDepth(clone(model), act.bale, state);
        case Act.RELOAD_DEPTH:
            return Buzz.reloadDepth(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=depth.reduce.js.map