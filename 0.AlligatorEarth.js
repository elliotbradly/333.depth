var FS = require("fs");

console.log("----------------------");
console.log("starting up the server");
console.log("----------------------");

const PORT = 1333;

const MQTT = require("async-mqtt");

var DEPTH = require("./333.depth")
var DEPTH_ACTION = require("./333.depth/00.depth.unit/depth.action")
var SOCKET_ACTION = require("./333.depth/96.socket.unit/socket.action")
var SOCKET_BUZZ = require("./333.depth/96.socket.unit/buz/socket.buzz")

var init = async (prt) => {
  const local = "mqtt://localhost:" + prt;
  const localBit = { idx: "local", src: local };

  //SOCKET_BUZZ.initSocket(null, null, null)
  await DEPTH.hunt(SOCKET_ACTION.INIT_SOCKET, { val: 0 });

  const aedes = require("aedes")();
  const server = require('net').createServer(aedes.handle)

  server.listen(PORT, async () => {

    await DEPTH.hunt(DEPTH_ACTION.INIT_DEPTH, { val: 0, dat: MQTT, src: [localBit] });
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
