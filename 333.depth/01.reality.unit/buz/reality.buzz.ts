
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
import * as ActClk from "../../act/clock.action";

var bit, val, idx, dex, lst, dat, src;

export const initReality = (cpy: RealityModel, bal: RealityBit, ste: State) => {
    debugger
    return cpy;
};


export const openReality = async (cpy: RealityModel, bal: RealityBit, ste: State) => {

    ste.hunt( ActDep.LOG_DEPTH, {src: "opening reality"  } )

    idx = 'clk00'
    var clk: TicBit = { idx, yrs: 1978, mth: 4, day: 11 }
    bit = await ste.bus(ActClk.WRITE_CLOCK, { idx, clk })

    ste.hunt( ActDep.LOG_DEPTH, {src: JSON.stringify(bit) } ) 

    bit = await ste.hunt( ActSok.INIT_SOCKET, {})

    if (cpy.interval != null) clearInterval(cpy.interval)

    //cpy.interval = setInterval(async () => {

    //    bit = ste.hunt(ActRel.UPDATE_REALITY, {})

    //}, 333)

    bal.slv({ sokBit: { idx: "create-reality" } });

    return cpy;
};


export const updateReality = (cpy: RealityModel, bal: RealityBit, ste: State) => {
    
    ste.hunt( ActDep.LOG_DEPTH, {src: "update reality"  } )

    bal.slv({ sokBit: { idx: "update-reality" } });
    return cpy;
};



import { RealityModel } from "../reality.model";
import RealityBit from "../fce/reality.bit";
import State from "../../99.core/state";
import TicBit from "333.depth/fce/tic.bit";
