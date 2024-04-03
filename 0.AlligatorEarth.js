var FS = require("fs");

console.log("----------------------");
console.log("starting up the server");
console.log("----------------------");

const PORT = 1333;

const MQTT = require("async-mqtt");

const aedes = require("aedes")();
const server = require('net').createServer(aedes.handle)

server.listen( PORT, function () {
  console.log('server started and listening on port ', PORT)
  init(PORT);
})

var depth = FS.readFileSync("./333.depth.js").toString();
var pivot = eval(depth);

var DEPTH_ACTION = DEPTH.ActDep;

var init = async (prt) => {
  const local = "mqtt://localhost:" + prt;
  const localBit = { idx: "local", src: local };
  await DEPTH.hunt(DEPTH_ACTION.INIT_DEPTH, { val: 0, dat: MQTT, src: [localBit] });
};



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
