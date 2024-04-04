import { Action } from "../99.core/interface/action.interface";
import  SocketBit  from "./fce/socket.bit";

// Socket actions

export const INIT_SOCKET = "[Socket action] Init Socket";
export class InitSocket implements Action {
 readonly type = INIT_SOCKET;
 constructor(public bale: SocketBit) {}
}

export const UPDATE_SOCKET = "[Socket action] Update Socket";
export class UpdateSocket implements Action {
 readonly type = UPDATE_SOCKET;
 constructor(public bale: SocketBit) {}
}

export const CONNECT_SOCKET = "[Connect action] Connect Socket";
 export class ConnectSocket implements Action {
 readonly type = CONNECT_SOCKET;
 constructor(public bale: SocketBit) {}
 }
 
export const CLOSE_SOCKET = "[Close action] Close Socket";
 export class CloseSocket implements Action {
 readonly type = CLOSE_SOCKET;
 constructor(public bale: SocketBit) {}
 }
 
export const READ_SOCKET = "[Read action] Read Socket";
 export class ReadSocket implements Action {
 readonly type = READ_SOCKET;
 constructor(public bale: SocketBit) {}
 }
 
export const WRITE_SOCKET = "[Write action] Write Socket";
 export class WriteSocket implements Action {
 readonly type = WRITE_SOCKET;
 constructor(public bale: SocketBit) {}
 }
 
export const REMOVE_SOCKET = "[Remove action] Remove Socket";
 export class RemoveSocket implements Action {
 readonly type = REMOVE_SOCKET;
 constructor(public bale: SocketBit) {}
 }
 
export const DELETE_SOCKET = "[Delete action] Delete Socket";
 export class DeleteSocket implements Action {
 readonly type = DELETE_SOCKET;
 constructor(public bale: SocketBit) {}
 }
 
export const CREATE_SOCKET = "[Create action] Create Socket";
 export class CreateSocket implements Action {
 readonly type = CREATE_SOCKET;
 constructor(public bale: SocketBit) {}
 }
 
export type Actions = | InitSocket | UpdateSocket 
| ConnectSocket
| CloseSocket
| ReadSocket
| WriteSocket
| RemoveSocket
| DeleteSocket
| CreateSocket