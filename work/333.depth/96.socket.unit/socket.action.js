"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSocket = exports.CREATE_SOCKET = exports.DeleteSocket = exports.DELETE_SOCKET = exports.RemoveSocket = exports.REMOVE_SOCKET = exports.WriteSocket = exports.WRITE_SOCKET = exports.ReadSocket = exports.READ_SOCKET = exports.CloseSocket = exports.CLOSE_SOCKET = exports.ConnectSocket = exports.CONNECT_SOCKET = exports.UpdateSocket = exports.UPDATE_SOCKET = exports.InitSocket = exports.INIT_SOCKET = void 0;
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
exports.CONNECT_SOCKET = "[Connect action] Connect Socket";
class ConnectSocket {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CONNECT_SOCKET;
    }
}
exports.ConnectSocket = ConnectSocket;
exports.CLOSE_SOCKET = "[Close action] Close Socket";
class CloseSocket {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CLOSE_SOCKET;
    }
}
exports.CloseSocket = CloseSocket;
exports.READ_SOCKET = "[Read action] Read Socket";
class ReadSocket {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_SOCKET;
    }
}
exports.ReadSocket = ReadSocket;
exports.WRITE_SOCKET = "[Write action] Write Socket";
class WriteSocket {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_SOCKET;
    }
}
exports.WriteSocket = WriteSocket;
exports.REMOVE_SOCKET = "[Remove action] Remove Socket";
class RemoveSocket {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_SOCKET;
    }
}
exports.RemoveSocket = RemoveSocket;
exports.DELETE_SOCKET = "[Delete action] Delete Socket";
class DeleteSocket {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_SOCKET;
    }
}
exports.DeleteSocket = DeleteSocket;
exports.CREATE_SOCKET = "[Create action] Create Socket";
class CreateSocket {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_SOCKET;
    }
}
exports.CreateSocket = CreateSocket;
//# sourceMappingURL=socket.action.js.map