import * as clone from "clone-deep";
import * as Act from "./socket.action";
import { SocketModel } from "./socket.model";
import * as Buzz from "./socket.buzzer";
import State from "../99.core/state";

export function reducer(model: SocketModel = new SocketModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_SOCKET:
 return Buzz.updateSocket(clone(model), act.bale, state);

 case Act.INIT_SOCKET:
 return Buzz.initSocket(clone(model), act.bale, state);

case Act.CONNECT_SOCKET:
 return Buzz.connectSocket(clone(model), act.bale, state);
 
case Act.CLOSE_SOCKET:
 return Buzz.closeSocket(clone(model), act.bale, state);
 
case Act.READ_SOCKET:
 return Buzz.readSocket(clone(model), act.bale, state);
 
case Act.WRITE_SOCKET:
 return Buzz.writeSocket(clone(model), act.bale, state);
 
case Act.REMOVE_SOCKET:
 return Buzz.removeSocket(clone(model), act.bale, state);
 
case Act.DELETE_SOCKET:
 return Buzz.deleteSocket(clone(model), act.bale, state);
 
case Act.CREATE_SOCKET:
 return Buzz.createSocket(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
