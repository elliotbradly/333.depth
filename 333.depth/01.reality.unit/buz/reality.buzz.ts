
import * as ActRel from "../../01.reality.unit/reality.action";

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


var bit, val, idx, dex, lst, dat, src;



export const initReality = (cpy: RealityModel, bal: RealityBit, ste: State) => {
    debugger
    return cpy;
};


export const openReality = (cpy: RealityModel, bal: RealityBit, ste: State) => {

    console.log("opening reality")

    if (cpy.interval != null) clearInterval(cpy.interval)

    cpy.interval = setInterval(async () => {

        bit = ste.hunt(ActRel.UPDATE_REALITY, {})

    }, 333)

    return cpy;
};


export const updateReality = (cpy: RealityModel, bal: RealityBit, ste: State) => {
    return cpy;
};



import { RealityModel } from "../reality.model";
import RealityBit from "../fce/reality.bit";
import State from "../../99.core/state";