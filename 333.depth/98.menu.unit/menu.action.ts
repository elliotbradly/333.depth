import { Action } from "../99.core/interface/action.interface";
import MenuBit from "./fce/menu.bit";

export const INIT_MENU = "[Menu action] Init Menu";
export class InitMenu implements Action {
  readonly type = INIT_MENU;
  constructor(public bale: MenuBit) { }
}

export const UPDATE_MENU = "[Menu action] Update Menu";
export class UpdateMenu implements Action {
  readonly type = UPDATE_MENU;
  constructor(public bale: MenuBit) { }
}

export const TEST_MENU = "[Menu action] Test Menu";
export class TestMenu implements Action {
  readonly type = TEST_MENU;
  constructor(public bale: MenuBit) { }
}

export const CLOSE_MENU = "[Menu action] Close Menu";
export class CloseMenu implements Action {
  readonly type = CLOSE_MENU;
  constructor(public bale: MenuBit) { }
}

export const REALITY_MENU = "[Menu action] Reality Menu";
 export class RealityMenu implements Action {
 readonly type = REALITY_MENU;
 constructor(public bale: MenuBit) {}
 }

export const SOCKET_MENU = "[Menu action] Socket Menu";
 export class SocketMenu implements Action {
 readonly type = SOCKET_MENU;
 constructor(public bale: MenuBit) {}
 }

 export const CONTAINER_MENU = "[Visage action] Container Menu";
 export class ContainerMenu implements Action {
 readonly type = CONTAINER_MENU;
 constructor(public bale: MenuBit) {}
 }

 export const TEXT_MENU = "[Visage action] Text Menu";
 export class TextMenu implements Action {
 readonly type = TEXT_MENU;
 constructor(public bale: MenuBit) {}
 }

 export const PRINT_MENU = "[Visage action] Print Menu";
 export class PrintMenu implements Action {
 readonly type = PRINT_MENU;
 constructor(public bale: MenuBit) {}
 }




export type Actions = InitMenu | UpdateMenu | TestMenu | CloseMenu
| RealityMenu
| SocketMenu
| ContainerMenu
| TextMenu
| PrintMenu
