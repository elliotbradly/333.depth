
import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";
import * as ActDep from "../../00.depth.unit/depth.action";
import * as ActSpc from "../../act/space.action"

import * as ActPvt from "../../act/pivot.action";
import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";
import * as ActCtl from "../../act/control.action";

var SHADE = global.SHADE
var SPACE = global.SPACE

var bit, val, idx, dex, lst, dat;

export const initDepth = async (cpy: DepthModel, bal: DepthBit, ste: State) => {


    if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActDep], dat: bal.dat, src: bal.src })

    if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);

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

    const { exec } = require('child_process');

    exec('tsc -b 333.depth', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        bit = await ste.bus(ActPvt.BUNDLE_PIVOT, { src: "333.depth" });

        bit = await ste.bus(ActDsk.READ_DISK, { src: './work/333.depth.js' })
        var depth = bit.dskBit.dat;

        bit = await ste.bus(ActDsk.WRITE_DISK, { src: './public/jsx/333.depth.js', dat: depth })

        setTimeout(() => {
            if (bal.slv != null) bal.slv({ depBit: { idx: "update-depth" } });
        }, 3);

    });


    return cpy;
};

//depth is the portal to control
export const testDepth = async (cpy: DepthModel, bal: DepthBit, ste: State) => {

    bit = await ste.bus(ActCtl.TEST_CONTROL, {})
    bal.slv({ depBit: { idx: "test-depth" } });

    return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { DepthModel } from "../depth.model";
import DepthBit from "../fce/depth.bit";
import State from "../../99.core/state";

