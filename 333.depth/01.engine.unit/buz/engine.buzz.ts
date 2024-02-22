
import * as ActScn from '../../02.scene.unit/scene.action'

import * as ActEng from '../engine.action'

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



import { EngineModel } from "../engine.model";
import EngineBit from "../fce/engine.bit";
import State from "../../99.core/state";