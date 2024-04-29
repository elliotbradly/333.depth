"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBeing = exports.UPDATE_BEING = exports.InitBeing = exports.INIT_BEING = void 0;
// Being actions
exports.INIT_BEING = "[Being action] Init Being";
class InitBeing {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_BEING;
    }
}
exports.InitBeing = InitBeing;
exports.UPDATE_BEING = "[Being action] Update Being";
class UpdateBeing {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_BEING;
    }
}
exports.UpdateBeing = UpdateBeing;
//# sourceMappingURL=being.action.js.map