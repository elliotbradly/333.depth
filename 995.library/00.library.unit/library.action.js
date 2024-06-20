"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLibrary = exports.UPDATE_LIBRARY = exports.InitLibrary = exports.INIT_LIBRARY = void 0;
// Library actions
exports.INIT_LIBRARY = "[Library action] Init Library";
class InitLibrary {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_LIBRARY;
    }
}
exports.InitLibrary = InitLibrary;
exports.UPDATE_LIBRARY = "[Library action] Update Library";
class UpdateLibrary {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_LIBRARY;
    }
}
exports.UpdateLibrary = UpdateLibrary;
//# sourceMappingURL=library.action.js.map