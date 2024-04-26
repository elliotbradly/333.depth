import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";
import * as ActDep from "../../00.depth.unit/depth.action";
import * as ActSok from "../../96.socket.unit/socket.action";

import * as ActSpc from "../../act/space.action"

import * as ActPvt from "../../act/pivot.action";
import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";
import * as ActCtl from "../../act/control.action";
import * as ActGit from "../../act/github.action";

var SHADE = global.SHADE
var SPACE = global.SPACE

var bit, val, idx, dex, lst, dat, src;

export const initDepth = async (cpy: DepthModel, bal: DepthBit, ste: State) => {

    console.log("init-depth")

    if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActDep], dat: bal.dat, src: bal.src })

    if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);

    //if (bal.val == 0) {
    //    console.log("init-socket")
    //    bit = await ste.hunt(ActSok.INIT_SOCKET, {})
    //}

    //ste.bus(ActSpc.READY_SPACE, {})

    if (bal.slv != null) bal.slv({ intBit: { idx: "init-depth" } });

    return cpy;
};

export const openDepth = async (cpy: DepthModel, bal: DepthBit, ste: State) => {

    const { exec } = require('child_process');

    exec('npx quasar dev -m electron', async (err, stdout, stderr) => {

        if (bal.slv != null) bal.slv({ depBit: { idx: "open-depth", dat: {} } });

    })

    return cpy;
};

export const updateDepth = (cpy: DepthModel, bal: DepthBit, ste: State) => {

    const { exec } = require("child_process");

    exec("tsc -b 333.depth", async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        lst = [];

        bit = await ste.bus(ActPvt.SHIP_PIVOT, { src: "333.depth" });
        lst.push(bit)

        bit = await ste.bus(ActDsk.ENSURE_DISK, { src: "../service/render.com/333.depth" });
        
        //copy it over 
        
        bit = await ste.bus(ActDsk.COPY_DISK, { src: './work/333.depth/', idx: "../service/render.com/333.depth" });
        lst.push(bit)

        

        //bit = await ste.bus(ActDsk.READ_DISK, { src: "./work/333.depth.js" });
        //var depth = bit.dskBit.dat;

        //bit = await ste.bus(ActDsk.WRITE_DISK, { src: "./public/jsx/122.blender.js", dat: blend });
        //lst.push(bit)

        //src = "../service/render.com/333.depth.js"
        //bit = await ste.bus(ActDsk.WRITE_DISK, { src, dat: depth });
        //lst.push(bit)

        bit = await ste.bus(ActDsk.READ_DISK, { src: "./0.AlligatorEarth.js" });
        var alligator = bit.dskBit.dat;

        src = "../service/render.com/app.js"
        bit = await ste.bus(ActDsk.WRITE_DISK, { src, dat: alligator });
        lst.push(bit)

        bit = await ste.bus(ActDsk.COPY_DISK, { src: './901.store/', idx: "../service/render.com/901.store" });
        lst.push(bit)

        bit = await ste.bus(ActDsk.COPY_DISK, { src: './811.earth/', idx: "../service/render.com/811.earth" });
        lst.push(bit)


        setTimeout(() => {
            bal.slv({ blnBit: { idx: "update-blender", lst } });
            return cpy;
        }, 3);
    });


};

//depth is the portal to control
export const testDepth = async (cpy: DepthModel, bal: DepthBit, ste: State) => {

    console.log("test the depths")

    //bit = await ste.bus(ActCtl.TEST_CONTROL, {})
    bal.slv({ depBit: { idx: "test-depth" } });

    return cpy;
};


export const commitDepth = async (cpy: DepthModel, bal: DepthBit, ste: State) => {

    dat = { lst: ['../', '../', './333.depth'] }
    lst = ['../', './service', './render.com'];
    bit = await ste.bus(ActGit.COMMIT_GITHUB, { idx: '333.depth', lst, src: " from 333.depth", dat });

    lst = bit.gitBit.lst;

    bal.slv({ depBit: { idx: "commit-depth", lst } });

    return cpy;
};

export const reloadDepth = (cpy: DepthModel, bal: DepthBit, ste: State) => {
    debugger
    return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });


import { DepthModel } from "../depth.model";
import DepthBit from "../fce/depth.bit";
import State from "../../99.core/state";

