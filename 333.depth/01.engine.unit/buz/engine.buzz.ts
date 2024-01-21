
import * as ActEng from '../engine.action'

export const initEngine = async (cpy: EngineModel, bal: EngineBit, ste: State) => {

    var canvas = document.createElement("canvas");

    var engine = new BABYLON.Engine(canvas, true);

    engine.runRenderLoop(async () => {
        ste.hunt(ActEng.UPDATE_ENGINE, {})
    });

    cpy.engine = engine
    
    return cpy;
};

export const updateEngine = (cpy: EngineModel, bal: EngineBit, ste: State) => {


    console.log("rendering")


    //if (scene.activeCamera) {
    //    scene.render();
    // }


    return cpy;
};

import * as BABYLON from 'babylonjs';

import { EngineModel } from "../engine.model";
import EngineBit from "../fce/engine.bit";
import State from "../../99.core/state";