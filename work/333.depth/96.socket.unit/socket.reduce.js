"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./socket.action");
const socket_model_1 = require("./socket.model");
const Buzz = require("./socket.buzzer");
function reducer(model = new socket_model_1.SocketModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_SOCKET:
            return Buzz.updateSocket(clone(model), act.bale, state);
        case Act.INIT_SOCKET:
            return Buzz.initSocket(clone(model), act.bale, state);
        case Act.CONNECT_SOCKET:
            return Buzz.connectSocket(clone(model), act.bale, state);
        case Act.CLOSE_SOCKET:
            return Buzz.closeSocket(clone(model), act.bale, state);
        case Act.READ_SOCKET:
            return Buzz.readSocket(clone(model), act.bale, state);
        case Act.WRITE_SOCKET:
            return Buzz.writeSocket(clone(model), act.bale, state);
        case Act.REMOVE_SOCKET:
            return Buzz.removeSocket(clone(model), act.bale, state);
        case Act.DELETE_SOCKET:
            return Buzz.deleteSocket(clone(model), act.bale, state);
        case Act.CREATE_SOCKET:
            return Buzz.createSocket(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=socket.reduce.js.map