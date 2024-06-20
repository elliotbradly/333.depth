"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadCrown = exports.READ_CROWN = exports.UpdateCrown = exports.UPDATE_CROWN = exports.InitCrown = exports.INIT_CROWN = void 0;
// Crown actions
exports.INIT_CROWN = "[Crown action] Init Crown";
class InitCrown {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_CROWN;
    }
}
exports.InitCrown = InitCrown;
exports.UPDATE_CROWN = "[Crown action] Update Crown";
class UpdateCrown {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_CROWN;
    }
}
exports.UpdateCrown = UpdateCrown;
exports.READ_CROWN = "[Read action] Read Crown";
class ReadCrown {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_CROWN;
    }
}
exports.ReadCrown = ReadCrown;
//# sourceMappingURL=crown.action.js.map