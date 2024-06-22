import Model from "./99.core/interface/model.interface";

import DepthUnit from "./00.depth.unit/depth.unit";
import RealityUnit from "./01.reality.unit/reality.unit";
import SparkUnit from "./03.spark.unit/spark.unit";
import SupernalUnit from "./10.supernal.unit/supernal.unit";
import BlessedUnit from "./20.blessed.unit/blessed.unit";
import PastoralUnit from "./30.pastoral.unit/pastoral.unit";
import BoundedUnit from "./40.bounded.unit/bounded.unit";
import PrimalUnit from "./50.primal.unit/primal.unit";
import SocketUnit from "./96.socket.unit/socket.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Depth from "./00.depth.unit/fce/depth.interface";
import { DepthModel } from "./00.depth.unit/depth.model";
import Reality from "./01.reality.unit/fce/reality.interface";
import { RealityModel } from "./01.reality.unit/reality.model";
import Spark from "./03.spark.unit/fce/spark.interface";
import { SparkModel } from "./03.spark.unit/spark.model";
import Supernal from "./10.supernal.unit/fce/supernal.interface";
import { SupernalModel } from "./10.supernal.unit/supernal.model";
import Blessed from "./20.blessed.unit/fce/blessed.interface";
import { BlessedModel } from "./20.blessed.unit/blessed.model";
import Pastoral from "./30.pastoral.unit/fce/pastoral.interface";
import { PastoralModel } from "./30.pastoral.unit/pastoral.model";
import Bounded from "./40.bounded.unit/fce/bounded.interface";
import { BoundedModel } from "./40.bounded.unit/bounded.model";
import Primal from "./50.primal.unit/fce/primal.interface";
import { PrimalModel } from "./50.primal.unit/primal.model";
import Socket from "./96.socket.unit/fce/socket.interface";
import { SocketModel } from "./96.socket.unit/socket.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [DepthUnit,RealityUnit,SparkUnit,SupernalUnit,BlessedUnit,PastoralUnit,BoundedUnit,PrimalUnit,SocketUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromDepth from "./00.depth.unit/depth.reduce";
import * as reduceFromReality from "./01.reality.unit/reality.reduce";
import * as reduceFromSpark from "./03.spark.unit/spark.reduce";
import * as reduceFromSupernal from "./10.supernal.unit/supernal.reduce";
import * as reduceFromBlessed from "./20.blessed.unit/blessed.reduce";
import * as reduceFromPastoral from "./30.pastoral.unit/pastoral.reduce";
import * as reduceFromBounded from "./40.bounded.unit/bounded.reduce";
import * as reduceFromPrimal from "./50.primal.unit/primal.reduce";
import * as reduceFromSocket from "./96.socket.unit/socket.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 depth : reduceFromDepth.reducer, 
reality : reduceFromReality.reducer, 
spark : reduceFromSpark.reducer, 
supernal : reduceFromSupernal.reducer, 
blessed : reduceFromBlessed.reducer, 
pastoral : reduceFromPastoral.reducer, 
bounded : reduceFromBounded.reducer, 
primal : reduceFromPrimal.reducer, 
socket : reduceFromSocket.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 depth : Depth = new DepthModel();
reality : Reality = new RealityModel();
spark : Spark = new SparkModel();
supernal : Supernal = new SupernalModel();
blessed : Blessed = new BlessedModel();
pastoral : Pastoral = new PastoralModel();
bounded : Bounded = new BoundedModel();
primal : Primal = new PrimalModel();
socket : Socket = new SocketModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
