"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./pastoral.action");
const pastoral_model_1 = require("./pastoral.model");
const Buzz = require("./pastoral.buzzer");
function reducer(model = new pastoral_model_1.PastoralModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_PASTORAL:
            return Buzz.updatePastoral(clone(model), act.bale, state);
        case Act.INIT_PASTORAL:
            return Buzz.initPastoral(clone(model), act.bale, state);
        case Act.READ_PASTORAL:
            return Buzz.readPastoral(clone(model), act.bale, state);
        case Act.WRITE_PASTORAL:
            return Buzz.writePastoral(clone(model), act.bale, state);
        case Act.REMOVE_PASTORAL:
            return Buzz.removePastoral(clone(model), act.bale, state);
        case Act.DELETE_PASTORAL:
            return Buzz.deletePastoral(clone(model), act.bale, state);
        case Act.CREATE_PASTORAL:
            return Buzz.createPastoral(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=pastoral.reduce.js.map