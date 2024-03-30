"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSocket = exports.UPDATE_SOCKET = exports.InitSocket = exports.INIT_SOCKET = void 0;
// Socket actions
exports.INIT_SOCKET = "[Socket action] Init Socket";
class InitSocket {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_SOCKET;
    }
}
exports.InitSocket = InitSocket;
exports.UPDATE_SOCKET = "[Socket action] Update Socket";
class UpdateSocket {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_SOCKET;
    }
}
exports.UpdateSocket = UpdateSocket;
//# sourceMappingURL=socket.action.js.map