import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActSok from "../../96.socket.unit/socket.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";
import * as ActCsk from "../../act/clientsocket.action";

var bit, val, idx, dex, lst, dat, src;

export const initSocket = (cpy: SocketModel, bal: SocketBit, ste: State) => {

    const WebSocket = require("ws");

    const PORT = process.env.PORT || 1000;

    const wss = new WebSocket.Server({ port: PORT });

    function heartbeat() {
        this.isAlive = true;
        this.send("heartbeat")
    }

    wss.on('open', () => { console.log("are you open") });

    wss.on("connection", async (ws) => {
        ws.on('pong', heartbeat);

        idx = uuidv4();
        ws.idx = idx;

        console.log(ws.idx + ' connnected...')

        bit = await ste.hunt(ActSok.WRITE_SOCKET, { idx, dat: { bit: ws } });
    });

    const interval = setInterval(async function ping() {

        var count = 0

        var colBit = await ste.hunt(ActCol.LIST_COLLECT, { bit: ActSok.CREATE_SOCKET })
        var colLst = colBit.colBit.lst

        var dex = colLst.length - 1;

        var nextSocket = async () => {

            if (dex < 0) {
                //console.log("complete next socket")
                return;
            }

            var now = colLst[dex];

            var sokBit = await ste.hunt(ActSok.READ_SOCKET, { idx:now })
            sokBit = sokBit.sokBit;
            var alive = sokBit.dat.bit.isAlive

            console.log( 'alive: ' + now + ' ::: ' + alive )

            dex -= 1

            count +=1;

            await nextSocket()
        }

        await nextSocket()


       // colLst.forEach((sokBit) => {

           // count += 1;

          //  console.log('checking...' + sokBit)

            //if (ws.isAlive === false) {
            //    console.log("remove socket ")
            //    return ws.terminate();
            //}

            //ws.isAlive = false;
            //ws.ping();
        //});

        // wss.clients.forEach(function each(ws) {

        //     count += 1;

        //     console.log('checking...' + ws.isAlive )

        //     if (ws.isAlive === false) {
        //         console.log("remove socket ")
        //         return ws.terminate();
        //     }

        //    ws.isAlive = false;
        //   ws.ping();
        //});

        console.log('size...' + count)

    }, 10000);


    //wss.on('close', function close() {
    //    clearInterval(interval);
    //});

    bal.slv({ intBit: { idx: "init-socket" } });
    return cpy;
};

export const updateSocket = async (cpy: SocketModel, bal: SocketBit, ste: State) => {

    var data = bal.dat

    bit = await ste.hunt(ActSok.READ_SOCKET, { idx: bal.idx });
    dat = bit.sokBit;

    console.log("update socket ::: " + JSON.stringify(bal))

    if (data.visible != null) dat.bit.visible = data.visible

    bal.slv({ sokBit: { idx: "update-socket", dat } });

    return cpy;
};

export const createSocket = async (cpy: SocketModel, bal: SocketBit, ste: State) => {

    console.log("create socket ::: " + bal.idx)
    console.log("socket data ::: " + bal.dat)
    console.log("socket bit ::: " + bal.dat.bit)

    //if ( bal.dat == null ) bal.dat = {}

    if (bal == null) {
        bal.slv({ sokBit: { idx: "error-create-socket", src: 'no socket bale', dat: {} } });
        return cpy;
    }

    if (bal.dat == null) {
        bal.slv({ sokBit: { idx: "error-create-socket", src: "no socket dat", dat: {} } });
        return cpy;
    }

    if (bal.dat.bit == null) {
        bal.slv({ sokBit: { idx: "error-create-socket", src: "no socket bit", dat: {} } });
        return cpy;
    }

    if (bal.src == null) bal.src = 'connecting...'

    var bit = bal.dat.bit;

    bit.isAlive = true;
    bit.on('error', console.error);
    bit.on("message", (msg) => {

        console.log("incoming message " + msg)
        //    patch(ste, ActSok.WRITE_SOCKET, { idx: bal.idx, src: msg })

    })

    var dat: SockBit = { idx: bal.idx, src: 'create', bit };

    //bit.send(JSON.stringify({ idx: ActCsk.OPEN_CLIENTSOCKET, bal: { idx: bal.idx } }));

    bal.slv({ sokBit: { idx: "create-socket", dat } });
    return cpy;
};


export const readSocket = async (cpy: SocketModel, bal: SocketBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'ply00';

    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActSok.CREATE_SOCKET });

    var item = bit.clcBit.dat;

    if (slv != null) slv({ sokBit: { idx: "read-socket", dat: item } });
    return cpy;

};
export const writeSocket = async (cpy: SocketModel, bal: SocketBit, ste: State) => {
    var slv = bal.slv;

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActSok.CREATE_SOCKET });
    var item = bit.clcBit.dat;

    if (bit.clcBit.val == 1) await ste.hunt(ActSok.UPDATE_SOCKET, { idx: bal.idx, dat: bal.dat });

    if (slv != null) slv({ sokBit: { idx: "write-socket", dat: item } });
    return cpy;

};

export const removeSocket = async (cpy: SocketModel, bal: SocketBit, ste: State) => {

    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActSok.DELETE_SOCKET })
    if (bal.slv != null) bal.slv({ sokBit: { idx: "remove-socket", dat: bit.clcBit } });

    return cpy;
};

export const deleteSocket = async (cpy: SocketModel, bal: SocketBit, ste: State) => {

    bit = await ste.hunt(ActSok.READ_SOCKET, { idx: bal.idx });
    dat = bit.sokBit;

    console.log("delete a socket")

    //var graphic = dat.bit;
    //graphic.destroy()
    //dat.bit = null


    bal.slv({ sokBit: { idx: "delete-socket", dat } });
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



var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { SocketModel } from "../socket.model";
import SocketBit from "../fce/socket.bit";
import State from "../../99.core/state";
import SockBit from "../fce/sock.bit";

import { v4 as uuidv4 } from 'uuid';
