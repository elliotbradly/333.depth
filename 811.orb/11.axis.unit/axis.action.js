"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAxis = exports.UPDATE_AXIS = exports.InitAxis = exports.INIT_AXIS = void 0;
// Axis actions
exports.INIT_AXIS = "[Axis action] Init Axis";
class InitAxis {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_AXIS;
    }
}
exports.InitAxis = InitAxis;
exports.UPDATE_AXIS = "[Axis action] Update Axis";
class UpdateAxis {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_AXIS;
    }
}
exports.UpdateAxis = UpdateAxis;
//# sourceMappingURL=axis.action.js.map