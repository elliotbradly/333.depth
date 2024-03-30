const WebSocket = require("ws");
const PORT = process.env.PORT || 3000;
const wss = new WebSocket.Server({ port: PORT });

wss.on("connection", (ws) => {


  ws.on("message", (message) => {
    console.log(`Received message => ${message}`);
  });

  
  ws.send("Hello! Message From Server!!");



});



//const express = require("express");

//const path = require("path");
//const cors = require("cors");

//require("dotenv").config();

//const app = express();
//const PORT = process.env.PORT || 3001;

//var bit;
//var opened = false;

//app.use(express.json());

//app
//  .use(express.static(path.join(__dirname, "public")))
//  .use(
//    cors({
//      origin: "*",
//    })
// )
//  .listen(PORT, () => console.log(`Listening on ${PORT}`));

//var expressWs = require("express-ws")(app);

//require("./routes/00.index")(app);

//app.ws("/echo", function (ws, req) {
//  ws.on("message", function (msg) {
//    ws.send(msg);
//  });
//});

//require("./333.depth");
//require("../002.space/002.space/000.quest.space");

//const MQTT = require("async-mqtt");
//var local = "ws://swamp-fly-448d63614f75.herokuapp.com/";

//DEPTH.hunt(DEPTH.ActDep.INIT_DEPTH, { val: 0, dat: MQTT, src: local });
