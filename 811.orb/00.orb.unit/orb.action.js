"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrb = exports.UPDATE_ORB = exports.InitOrb = exports.INIT_ORB = void 0;
// Orb actions
exports.INIT_ORB = "[Orb action] Init Orb";
class InitOrb {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_ORB;
    }
}
exports.InitOrb = InitOrb;
exports.UPDATE_ORB = "[Orb action] Update Orb";
class UpdateOrb {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_ORB;
    }
}
exports.UpdateOrb = UpdateOrb;
//# sourceMappingURL=orb.action.js.map