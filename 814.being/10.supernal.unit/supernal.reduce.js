"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./supernal.action");
const supernal_model_1 = require("./supernal.model");
const Buzz = require("./supernal.buzzer");
function reducer(model = new supernal_model_1.SupernalModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_SUPERNAL:
            return Buzz.updateSupernal(clone(model), act.bale, state);
        case Act.INIT_SUPERNAL:
            return Buzz.initSupernal(clone(model), act.bale, state);
        case Act.READ_SUPERNAL:
            return Buzz.readSupernal(clone(model), act.bale, state);
        case Act.WRITE_SUPERNAL:
            return Buzz.writeSupernal(clone(model), act.bale, state);
        case Act.REMOVE_SUPERNAL:
            return Buzz.removeSupernal(clone(model), act.bale, state);
        case Act.DELETE_SUPERNAL:
            return Buzz.deleteSupernal(clone(model), act.bale, state);
        case Act.CREATE_SUPERNAL:
            return Buzz.createSupernal(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=supernal.reduce.js.map