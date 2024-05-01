"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./orb.action");
const orb_model_1 = require("./orb.model");
const Buzz = require("./orb.buzzer");
function reducer(model = new orb_model_1.OrbModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_ORB:
            return Buzz.updateOrb(clone(model), act.bale, state);
        case Act.INIT_ORB:
            return Buzz.initOrb(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=orb.reduce.js.map