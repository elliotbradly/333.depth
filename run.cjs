const path = require('path');
const fs = require('fs');
const MQTT = require('async-mqtt');
const { program } = require('commander');

const PORT = 1333;
const wsPort = 8883;

let SHADE;
let VURT;

var idx;
program.option('--first').option('-t, --separator <char>');
program.parse(process.argv);
const options = program.opts();
if (options['separator'] != null) idx = options['separator'];

const title = idx;

let dev = false
let pvt = false

if (title == 'development') dev = true
if (title == 'pivot') pvt = true

const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);

const httpServer = require('http').createServer()
const ws = require('websocket-stream')
ws.createServer({ server: httpServer }, aedes.handle)

httpServer.listen(wsPort, function () {
    console.log('Aedes MQTT-WS listening on port: ' + wsPort)
    aedes.publish({ topic: 'aedes/hello', payload: "I'm broker " + aedes.id })
});

server.listen(PORT, async () => {
    console.log('server started and listening on port ', PORT);

    var exec = require('child_process').exec;

    exec('tsc -b 333.depth', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        init(PORT);

    })


});


const init = async (prt) => {

    console.log("inits")

    const local = 'mqtt://localhost:' + prt;
    const localBit = { idx: 'local', src: local };

    DEPTH = require(path.resolve('./dist/333.depth/hunt'));
    DEPTH_ACTION = require(path.resolve('./dist/333.depth/00.depth.unit/depth.action'));

    ORB = require(path.resolve('./811.orb/index'));
    ORB_ACTION = require(path.resolve('./811.orb/00.orb.unit/orb.action'));

    CONTROL = require(path.resolve('./900.control/index'));
    CONTROL_ACTION = require(path.resolve('./900.control/00.control.unit/control.action'));

    STORE = require(path.resolve('./901.store/index'));
    STORE_ACTION = require(path.resolve('./901.store/00.store.unit/store.action'));

    PIVOT = require(path.resolve('./999.pivot/index'));
    PIVOT_ACTION = require(path.resolve('./999.pivot/00.pivot.unit/pivot.action'));

    TERMINAL = require(path.resolve('./997.terminal/index'));
    TERMINAL_ACTION = require(path.resolve('./997.terminal/00.terminal.unit/terminal.action'));

    var LIBRARY = require(path.resolve('./995.library/index'));
    var LIBRARY_ACTION = require(path.resolve('./995.library/00.library.unit/library.action'));

    if (pvt == false) {

        await TERMINAL.hunt(TERMINAL_ACTION.INIT_TERMINAL, { dat: MQTT, src: local });
        await ORB.hunt( ORB_ACTION.INIT_ORB, {  dat: MQTT, src: local });
        await STORE.hunt( STORE_ACTION.INIT_STORE, {  dat: MQTT, src: local });
        
        await CONTROL.hunt( CONTROL_ACTION.INIT_CONTROL, {  dat: MQTT, src: local });
        await PIVOT.hunt(PIVOT_ACTION.INIT_PIVOT, { dat: MQTT, src: local });

        await DEPTH.hunt(DEPTH_ACTION.INIT_DEPTH, { val: 1, dat: MQTT, src: [localBit] });

        await LIBRARY.hunt( LIBRARY_ACTION.INIT_LIBRARY, { dat: MQTT, src: local });

    }
    else {

        await PIVOT.hunt(PIVOT_ACTION.INIT_PIVOT, { val: 1, dat: MQTT, src: local });
        //await SHADE.hunt( SHADE_ACTION.INIT_SHADE , { val: 1, dat: MQTT, src:  [localBit]  });
    }


};



const close = async () => {


    var run = fs.readFileSync("./run.cjs").toString()
    fs.writeFileSync("./run.cjs", run)

}


if (dev == false) return

console.log("deving...")
const { exec } = require('child_process');
const { resolve } = require('path');
const { LIBRARY } = require('./811.orb/val/ambit');

process.chdir("../");

var pivot = exec("pnpm watch")

process.chdir("./333.depth");

pivot.stderr.on('data', function (data) {
    //console.log('aaads stderr: ' + data.toString());
});

let errored = false
let working = false

pivot.stdout.on('data', async (data) => {
    if (data.length < 3) return

    if (data.includes('Watching for file changes.') == false) return
    if (data.includes('Found 0 errors.') == true) {

        if (errored == false) {

            if (working == false) {

                setTimeout(() => working = true, 3333)

                return
            }

            bit = await close()
            bit = await init(PORT)

            return
        }

        errored = false

        //now reset the game
        bit = await close()
        bit = await init(PORT)

        return

    }


    if (data.includes('Debugger') == true) return
    data
    errored = true;


});

//-----------------------