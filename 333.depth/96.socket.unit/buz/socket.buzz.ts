import * as ActMnu from "../../98.menu.unit/menu.action";


import * as ActRel from "../../01.reality.unit/reality.action";
import * as ActDep from "../../00.depth.unit/depth.action";

import * as ActSok from "../../96.socket.unit/socket.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";
import * as ActCsk from "../../act/clientsocket.action";

var bit, val, idx, dex, lst, dat, src;

export const initSocket = (cpy: SocketModel, bal: SocketBit, ste: State) => {

    var depthMod: DepthModel = ste.value.depth;
    var realityMod: RealityModel = ste.value.reality;

    const WebSocket = require("ws");

    const PORT = process.env.PORT || 1000;

    const wss = new WebSocket.Server({ port: PORT });


    function heartbeat() {
        console.log("sending heartbeat")
        this.isAlive = true;
        this.send("heartbeat")
    }

    wss.on('open', () => { ste.hunt(ActDep.LOG_DEPTH, { src: "are you open" }) });

    wss.on("connection", async (ws) => {

        var uuid = uuidv4();
        ws.idx = uuid;

        ws.on('pong', heartbeat);

        ws.on("close", async () => {
            bit = await ste.hunt(ActSok.REMOVE_SOCKET, { idx: uuid });

            ste.hunt(ActDep.LOG_DEPTH, { src: "closing..." + uuid })

            uuid = null
        });

        ste.hunt(ActDep.LOG_DEPTH, { src: ws.idx + ' connnected...' })

        //bit = await ste.hunt(ActSok.WRITE_SOCKET, { idx: uuid, dat: { bit: ws } });
    });

    //the point is 
    //that since you will always be running this
    //to check and see if there are any connections to send data out to
    //then any updating for reality should be done here

    const interval = setTimeout(async function ping() {

        var count = 0

        var clcBit = await ste.hunt(ActCol.LIST_COLLECT, { bit: ActSok.CREATE_SOCKET })

        var colLst = clcBit.clcBit.lst

       // ste.hunt(ActDep.LOG_DEPTH, { src: 'watching...' + colLst.length })

        if (colLst.length >= 0) { }

        var dex = colLst.length - 1;

        var nextSocket = async () => {

            if (dex < 0) {
                bit = await ste.hunt(ActRel.UPDATE_REALITY, {});
                setTimeout( ping, 3000 )
                return
            }

            var itm = colLst[dex];

            var now = realityMod.now;
            var cde = realityMod.timecode

            var sokBit = await ste.hunt(ActSok.WRITE_SOCKET, { idx: itm, dat: { now, cde } })
            sokBit = sokBit.sokBit;

            dex -= 1
            count += 1;

            await nextSocket()
        }

        await nextSocket()

        //ste.hunt( ActDep.LOG_DEPTH, {src: "count " + count } )

    }, 3000);


    wss.on('close', function close() {
        clearInterval(interval);
    });

    bal.slv({ intBit: { idx: "init-socket" } });
    return cpy;
};

export const updateSocket = async (cpy: SocketModel, bal: SocketBit, ste: State) => {

    var data = bal.dat

    bit = await ste.hunt(ActSok.READ_SOCKET, { idx: bal.idx });
    dat = bit.sokBit.dat;

    var socket = dat.bit;


    var outData = { idx: bal.idx, dat: data }

    //socket.send(JSON.stringify({ idx: ActCsk.UPDATE_CLIENTSOCKET, bal: outData }));

    ste.hunt(ActDep.LOG_DEPTH, { src: "update socket ::: " + JSON.stringify(bal) })

    if (data.visible != null) dat.bit.visible = data.visible

    bal.slv({ sokBit: { idx: "update-socket", dat } });

    return cpy;
};

export const createSocket = async (cpy: SocketModel, bal: SocketBit, ste: State) => {

    //if ( bal.dat == null ) bal.dat = {}
    ste.hunt(ActDep.LOG_DEPTH, { src: "create socket ::: " + JSON.stringify(bal) })


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

        //hunt or buzz the messsage 
        //send back the response
        var msgDat = JSON.parse( msg )
        debugger

        ste.hunt(ActDep.LOG_DEPTH, { src: "incoming message " + msg })
        //    patch(ste, ActSok.WRITE_SOCKET, { idx: bal.idx, src: msg })
    })

    var dat: SockBit = { idx: bal.idx, src: 'create', bit };

    //enter the arena 


    //get starting location
    //get starting x 
    //get starting y 
    //see if player exists

    // open the player
    // send that data 

    bit.send(JSON.stringify({ idx: ActCsk.OPEN_CLIENTSOCKET, bal: { idx: bal.idx } }));

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

    ste.hunt(ActDep.LOG_DEPTH, { src: "delete a socket" })

    bit = await ste.hunt(ActSok.READ_SOCKET, { idx: bal.idx });
    dat = bit.sokBit;

    ste.hunt(ActDep.LOG_DEPTH, { src: "remove socket ::: " + dat.idx })
    ste.hunt(ActDep.LOG_DEPTH, { src: "socket data ::: " + dat.dat })
    ste.hunt(ActDep.LOG_DEPTH, { src: "socket bit ::: " + dat.dat.bit })

    if (dat.dat.bit.terminate != null) dat.dat.bit.terminate()

    if ((dat.dat != null) && (dat.dat.bit != null)) dat.dat.bit = null
    if (dat.dat != null) dat.dat = null

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
import { DepthModel } from "333.depth/00.depth.unit/depth.model";
import { RealityModel } from "333.depth/01.reality.unit/reality.model";

