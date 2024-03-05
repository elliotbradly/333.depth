import { Action } from "../99.core/interface/action.interface";
import  AmbitBit  from "./fce/ambit.bit";

// Ambit actions

export const INIT_AMBIT = "[Ambit action] Init Ambit";
export class InitAmbit implements Action {
 readonly type = INIT_AMBIT;
 constructor(public bale: AmbitBit) {}
}

export const UPDATE_AMBIT = "[Ambit action] Update Ambit";
export class UpdateAmbit implements Action {
 readonly type = UPDATE_AMBIT;
 constructor(public bale: AmbitBit) {}
}

export type Actions = | InitAmbit | UpdateAmbit ;
