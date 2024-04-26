import { Action } from "../99.core/interface/action.interface";
import  RealityBit  from "./fce/reality.bit";

// Reality actions

export const INIT_REALITY = "[Reality action] Init Reality";
export class InitReality implements Action {
 readonly type = INIT_REALITY;
 constructor(public bale: RealityBit) {}
}

export const UPDATE_REALITY = "[Reality action] Update Reality";
export class UpdateReality implements Action {
 readonly type = UPDATE_REALITY;
 constructor(public bale: RealityBit) {}
}

export const OPEN_REALITY = "[Open action] Open Reality";
 export class OpenReality implements Action {
 readonly type = OPEN_REALITY;
 constructor(public bale: RealityBit) {}
 }
 
export type Actions = | InitReality | UpdateReality 
| OpenReality