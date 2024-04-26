"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenReality = exports.OPEN_REALITY = exports.UpdateReality = exports.UPDATE_REALITY = exports.InitReality = exports.INIT_REALITY = void 0;
// Reality actions
exports.INIT_REALITY = "[Reality action] Init Reality";
class InitReality {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_REALITY;
    }
}
exports.InitReality = InitReality;
exports.UPDATE_REALITY = "[Reality action] Update Reality";
class UpdateReality {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_REALITY;
    }
}
exports.UpdateReality = UpdateReality;
exports.OPEN_REALITY = "[Open action] Open Reality";
class OpenReality {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_REALITY;
    }
}
exports.OpenReality = OpenReality;
//# sourceMappingURL=reality.action.js.map