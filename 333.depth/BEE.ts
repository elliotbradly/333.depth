import Model from "./99.core/interface/model.interface";

import DepthUnit from "./00.depth.unit/depth.unit";
import EngineUnit from "./01.engine.unit/engine.unit";
import SceneUnit from "./02.scene.unit/scene.unit";
import AmbitUnit from "./03.ambit.unit/ambit.unit";
import ActorUnit from "./04.actor.unit/actor.unit";
import SocketUnit from "./96.socket.unit/socket.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Depth from "./00.depth.unit/fce/depth.interface";
import { DepthModel } from "./00.depth.unit/depth.model";
import Engine from "./01.engine.unit/fce/engine.interface";
import { EngineModel } from "./01.engine.unit/engine.model";
import Scene from "./02.scene.unit/fce/scene.interface";
import { SceneModel } from "./02.scene.unit/scene.model";
import Ambit from "./03.ambit.unit/fce/ambit.interface";
import { AmbitModel } from "./03.ambit.unit/ambit.model";
import Actor from "./04.actor.unit/fce/actor.interface";
import { ActorModel } from "./04.actor.unit/actor.model";
import Socket from "./96.socket.unit/fce/socket.interface";
import { SocketModel } from "./96.socket.unit/socket.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [DepthUnit,EngineUnit,SceneUnit,AmbitUnit,ActorUnit,SocketUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromDepth from "./00.depth.unit/depth.reduce";
import * as reduceFromEngine from "./01.engine.unit/engine.reduce";
import * as reduceFromScene from "./02.scene.unit/scene.reduce";
import * as reduceFromAmbit from "./03.ambit.unit/ambit.reduce";
import * as reduceFromActor from "./04.actor.unit/actor.reduce";
import * as reduceFromSocket from "./96.socket.unit/socket.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 depth : reduceFromDepth.reducer, 
engine : reduceFromEngine.reducer, 
scene : reduceFromScene.reducer, 
ambit : reduceFromAmbit.reducer, 
actor : reduceFromActor.reducer, 
socket : reduceFromSocket.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 depth : Depth = new DepthModel();
engine : Engine = new EngineModel();
scene : Scene = new SceneModel();
ambit : Ambit = new AmbitModel();
actor : Actor = new ActorModel();
socket : Socket = new SocketModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
