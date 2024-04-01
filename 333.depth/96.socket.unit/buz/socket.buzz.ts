import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActSok from "../socket.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";
import * as ActCns from "../../act/console.action"
import * as ActPvt from "../../act/pivot.action"

export const initSocket = (cpy: SocketModel, bal: SocketBit, ste: State) => {

    const WebSocket = require("ws");
    const PORT = process.env.PORT || 3000;
    const wss = new WebSocket.Server({ port: PORT });

    function heartbeat() {
        this.isAlive = true;
        this.send("heartbeat")
    }

    wss.on('open', () => { console.log("are you open") });

    wss.on("connection", (ws) => {
        ws.isAlive = true;
        ws.on('error', console.error);
        ws.on('pong', heartbeat);
        ws.on("message", (message) => patch(ste, ActSok.UPDATE_SOCKET, { src: message }));
        //ws.send("connect to STORE SOCKET");
    });

    const interval = setInterval(function ping() {
        wss.clients.forEach(function each(ws) {
            if (ws.isAlive === false) return ws.terminate();

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

export const updateSocket = (cpy: SocketModel, bal: SocketBit, ste: State) => {


    return cpy;
};


export const connectSocket = (cpy: SocketModel, bal: SocketBit, ste: State) => {
    debugger
    return cpy;
};

export const closeSocket = (cpy: SocketModel, bal: SocketBit, ste: State) => {
    debugger
    return cpy;
};

export const readSocket = (cpy: SocketModel, bal: SocketBit, ste: State) => {
    debugger
    return cpy;
};
export const writeSocket = (cpy: SocketModel, bal: SocketBit, ste: State) => {
    debugger
    return cpy;
};
export const removeSocket = (cpy: SocketModel, bal: SocketBit, ste: State) => {
    debugger
    return cpy;
};
export const deleteSocket = (cpy: SocketModel, bal: SocketBit, ste: State) => {
    debugger
    return cpy;
};
export const createSocket = (cpy: SocketModel, bal: SocketBit, ste: State) => {
    debugger
    return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { SocketModel } from "../socket.model";
import SocketBit from "../fce/socket.bit";
import State from "../../99.core/state";