
import * as ActScn from '../../02.scene.unit/scene.action'

import * as ActEng from '../engine.action'
import * as ActRpg from '../../act/rpgmaker.action'

var bit;

export const initEngine = async (cpy: EngineModel, bal: EngineBit, ste: State) => {



    return cpy;
};

export const updateEngine = async (cpy: EngineModel, bal: EngineBit, ste: State) => {


    console.log("rendering")

    //bit = await ste.hunt( ActScn.LIST_SCENE, {} )

    //if (scene.activeCamera) {
    //    scene.render();
    // }

    return cpy;
};



export const movementEngine = async (cpy: EngineModel, bal: EngineBit, ste: State) => {

    bit = await ste.bus(ActRpg.PRESS_RPGMAKER, { src: bal.src })
    bal.slv({ engBit: { idx: "movement-engine", dat: {} } });

    return cpy;
};

export const openEngine = (cpy: EngineModel, bal: EngineBit, ste: State) => {
    

    console.log("open the engine")    
    bal.slv({ engBit: { idx: "open-engine", val:1 } });


    return cpy;
};

export const closeEngine = (cpy: EngineModel, bal:EngineBit, ste: State) => {
 
    console.log("close the engine")    
    bal.slv({ engBit: { idx: "close-engine", val:1 } });

    return cpy;
    };


import { EngineModel } from "../engine.model";
import EngineBit from "../fce/engine.bit";
import State from "../../99.core/state";

import * as DIRECTION from '../../val/direction'