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

export const TEST_DEPTH = "[Test action] Test Depth";
 export class TestDepth implements Action {
 readonly type = TEST_DEPTH;
 constructor(public bale: DepthBit) {}
 }
 
export const COMMIT_DEPTH = "[Commit action] Commit Depth";
 export class CommitDepth implements Action {
 readonly type = COMMIT_DEPTH;
 constructor(public bale: DepthBit) {}
 }
 
export const RELOAD_DEPTH = "[Reload action] Reload Depth";
 export class ReloadDepth implements Action {
 readonly type = RELOAD_DEPTH;
 constructor(public bale: DepthBit) {}
 }
 
export const LOG_DEPTH = "[Log action] Log Depth";
 export class LogDepth implements Action {
 readonly type = LOG_DEPTH;
 constructor(public bale: DepthBit) {}
 }
 
export type Actions = | InitDepth | UpdateDepth | OpenDepth 
| TestDepth
| CommitDepth
| ReloadDepth
| LogDepth