"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSocket = exports.initSocket = void 0;
const initSocket = (cpy, bal, ste) => {
    const WebSocket = require("ws");
    const PORT = process.env.PORT || 3000;
    const wss = new WebSocket.Server({ port: PORT });
    function heartbeat() {
        this.isAlive = true;
        this.send("heartbeat");
    }
    wss.on('open', () => {
        console.log("are you open");
    });
    wss.on("connection", (ws) => {
        ws.isAlive = true;
        ws.on('error', console.error);
        ws.on('pong', heartbeat);
        ws.on("message", (message) => {
            console.log(`Received message => ${message}`);
        });
        ws.send("Hello! Message From Server!!");
    });
    const interval = setInterval(function ping() {
        wss.clients.forEach(function each(ws) {
            if (ws.isAlive === false)
                return ws.terminate();
            ws.isAlive = false;
            ws.ping();
        });
    }, 30000);
    wss.on('close', function close() {
        clearInterval(interval);
    });
    bal.slv({ intBit: { idx: "init-socket" } });
    return cpy;
};
exports.initSocket = initSocket;
const updateSocket = (cpy, bal, ste) => {
    return cpy;
};
exports.updateSocket = updateSocket;
//# sourceMappingURL=socket.buzz.js.map