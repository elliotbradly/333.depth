"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./primal.action");
const primal_model_1 = require("./primal.model");
const Buzz = require("./primal.buzzer");
function reducer(model = new primal_model_1.PrimalModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_PRIMAL:
            return Buzz.updatePrimal(clone(model), act.bale, state);
        case Act.INIT_PRIMAL:
            return Buzz.initPrimal(clone(model), act.bale, state);
        case Act.READ_PRIMAL:
            return Buzz.readPrimal(clone(model), act.bale, state);
        case Act.WRITE_PRIMAL:
            return Buzz.writePrimal(clone(model), act.bale, state);
        case Act.REMOVE_PRIMAL:
            return Buzz.removePrimal(clone(model), act.bale, state);
        case Act.DELETE_PRIMAL:
            return Buzz.deletePrimal(clone(model), act.bale, state);
        case Act.CREATE_PRIMAL:
            return Buzz.createPrimal(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=primal.reduce.js.map