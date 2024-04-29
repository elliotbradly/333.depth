"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./rpgmap.action");
const rpgmap_model_1 = require("./rpgmap.model");
const Buzz = require("./rpgmap.buzzer");
function reducer(model = new rpgmap_model_1.RpgmapModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_RPGMAP:
            return Buzz.updateRpgmap(clone(model), act.bale, state);
        case Act.INIT_RPGMAP:
            return Buzz.initRpgmap(clone(model), act.bale, state);
        case Act.READ_RPGMAP:
            return Buzz.readRpgmap(clone(model), act.bale, state);
        case Act.WRITE_RPGMAP:
            return Buzz.writeRpgmap(clone(model), act.bale, state);
        case Act.REMOVE_RPGMAP:
            return Buzz.removeRpgmap(clone(model), act.bale, state);
        case Act.DELETE_RPGMAP:
            return Buzz.deleteRpgmap(clone(model), act.bale, state);
        case Act.CREATE_RPGMAP:
            return Buzz.createRpgmap(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=rpgmap.reduce.js.map