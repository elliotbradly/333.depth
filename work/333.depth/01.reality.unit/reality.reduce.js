"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./reality.action");
const reality_model_1 = require("./reality.model");
const Buzz = require("./reality.buzzer");
function reducer(model = new reality_model_1.RealityModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_REALITY:
            return Buzz.updateReality(clone(model), act.bale, state);
        case Act.INIT_REALITY:
            return Buzz.initReality(clone(model), act.bale, state);
        case Act.OPEN_REALITY:
            return Buzz.openReality(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=reality.reduce.js.map