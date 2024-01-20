import { Action } from "../99.core/interface/action.interface";
import  DepthBit  from "./fce/depth.bit";

// Depth actions

export const INIT_DEPTH = "[Depth action] Init Depth";
export class InitDepth implements Action {
 readonly type = INIT_DEPTH;
 constructor(public bale: DepthBit) {}
}

export const UPDATE_DEPTH = "[Depth action] Update Depth";
export class UpdateDepth implements Action {
 readonly type = UPDATE_DEPTH;
 constructor(public bale: DepthBit) {}
}

export const OPEN_DEPTH = "[Depth action] Open Depth";
export class OpenDepth implements Action {
 readonly type = OPEN_DEPTH;
 constructor(public bale: DepthBit) {}
}

export type Actions = | InitDepth | UpdateDepth | OpenDepth ;
