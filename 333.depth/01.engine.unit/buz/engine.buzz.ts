
import * as ActScn from '../../02.scene.unit/scene.action'

import * as ActEng from '../engine.action'

var bit;

export const initEngine = async (cpy: EngineModel, bal: EngineBit, ste: State) => {

    var canvas = document.createElement("canvas");

    var engine = new BABYLON.Engine(canvas, true);

    engine.runRenderLoop(async () => {
        ste.hunt(ActEng.UPDATE_ENGINE, {})
    });

    cpy.engine = engine
    
    return cpy;
};

export const updateEngine = async (cpy: EngineModel, bal: EngineBit, ste: State) => {


    console.log("rendering")

    bit = await ste.hunt( ActScn.LIST_SCENE, {} )
    debugger


    //if (scene.activeCamera) {
    //    scene.render();
    // }


    return cpy;
};

import * as BABYLON from 'babylonjs';

import { EngineModel } from "../engine.model";
import EngineBit from "../fce/engine.bit";
import State from "../../99.core/state";