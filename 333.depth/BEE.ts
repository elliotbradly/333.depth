import Model from "./99.core/interface/model.interface";

import DepthUnit from "./00.depth.unit/depth.unit";
import EngineUnit from "./01.engine.unit/engine.unit";
import SceneUnit from "./02.scene.unit/scene.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Depth from "./00.depth.unit/fce/depth.interface";
import { DepthModel } from "./00.depth.unit/depth.model";
import Engine from "./01.engine.unit/fce/engine.interface";
import { EngineModel } from "./01.engine.unit/engine.model";
import Scene from "./02.scene.unit/fce/scene.interface";
import { SceneModel } from "./02.scene.unit/scene.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [DepthUnit,EngineUnit,SceneUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromDepth from "./00.depth.unit/depth.reduce";
import * as reduceFromEngine from "./01.engine.unit/engine.reduce";
import * as reduceFromScene from "./02.scene.unit/scene.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 depth : reduceFromDepth.reducer, 
engine : reduceFromEngine.reducer, 
scene : reduceFromScene.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 depth : Depth = new DepthModel();
engine : Engine = new EngineModel();
scene : Scene = new SceneModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
