var FS = require("fs");

var bit;

console.log("----------------------");
console.log("starting up the server v0>01");
console.log("----------------------");

const PORT = 1333;

const MQTT = require("async-mqtt");

var DEPTH = require("./333.depth")
var DEPTH_ACTION = require("./333.depth/00.depth.unit/depth.action")
var SOCKET_ACTION = require("./333.depth/96.socket.unit/socket.action")
var REALITY_ACTION = require("./333.depth/01.reality.unit/reality.action")

var STORE = require("./901.store")
var STORE_ACTION = require("./901.store/00.store.unit/store.action")

var EARTH = require("./811.earth")
var EARTH_ACTION = require("./811.earth/00.earth.unit/earth.action")

var init = async (prt) => {
  const local = "mqtt://localhost:" + prt;
  const localBit = { idx: "local", src: local };

  //SOCKET_BUZZ.initSocket(null, null, null)
  

  const aedes = require("aedes")();
  const server = require('net').createServer(aedes.handle)

  server.listen(PORT, async () => {

    bit = await EARTH.hunt( EARTH_ACTION.INIT_EARTH, {  dat: MQTT, src: local });
    console.log( JSON.stringify(bit))

    bit = await STORE.hunt( STORE_ACTION.INIT_STORE, {  dat: MQTT, src: local });
    console.log( JSON.stringify(bit))

    bit = await DEPTH.hunt(DEPTH_ACTION.INIT_DEPTH, { val: 0, dat: MQTT, src: [localBit] });
    console.log( JSON.stringify(bit))

    bit = await DEPTH.hunt(REALITY_ACTION.OPEN_REALITY, { val: 0 });
    
    console.log('server started and listening on port ', PORT)
    
  })


};

init( PORT )

//const httpServer = require("http").createServer();
//const ws = require("websocket-stream");
//const port = PORT;

//ws.createServer({ server: httpServer }, aedes.handle);

//httpServer.listen(port, function () {
 // console.log("websocket server listening on port ", port);
 // init(PORT);
//});

//var STORE = require("./901.store");

//const aedes = require('aedes')();
//const server = require('net').createServer(aedes.handle);

//server.listen(PORT, async () => {
//    console.log('server started and listening on port ', PORT);
//    init(PORT);
