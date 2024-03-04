import { Action } from "../99.core/interface/action.interface";
import  EngineBit  from "./fce/engine.bit";

// Engine actions

export const INIT_ENGINE = "[Engine action] Init Engine";
export class InitEngine implements Action {
 readonly type = INIT_ENGINE;
 constructor(public bale: EngineBit) {}
}

export const UPDATE_ENGINE = "[Engine action] Update Engine";
export class UpdateEngine implements Action {
 readonly type = UPDATE_ENGINE;
 constructor(public bale: EngineBit) {}
}

export const MOVEMENT_ENGINE = "[Movement action] Movement Engine";
 export class MovementEngine implements Action {
 readonly type = MOVEMENT_ENGINE;
 constructor(public bale: EngineBit) {}
 }
 
export const OPEN_ENGINE = "[Open action] Open Engine";
 export class OpenEngine implements Action {
 readonly type = OPEN_ENGINE;
 constructor(public bale: EngineBit) {}
 }
 
export const CLOSE_ENGINE = "[Close action] Close Engine";
 export class CloseEngine implements Action {
 readonly type = CLOSE_ENGINE;
 constructor(public bale: EngineBit) {}
 }
 
export type Actions = | InitEngine | UpdateEngine 
| MovementEngine
| OpenEngine
| CloseEngine