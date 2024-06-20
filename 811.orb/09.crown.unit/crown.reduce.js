"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./crown.action");
const crown_model_1 = require("./crown.model");
const Buzz = require("./crown.buzzer");
function reducer(model = new crown_model_1.CrownModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_CROWN:
            return Buzz.updateCrown(clone(model), act.bale, state);
        case Act.INIT_CROWN:
            return Buzz.initCrown(clone(model), act.bale, state);
        case Act.READ_CROWN:
            return Buzz.readCrown(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=crown.reduce.js.map