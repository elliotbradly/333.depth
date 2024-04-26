import * as clone from "clone-deep";
import * as Act from "./reality.action";
import { RealityModel } from "./reality.model";
import * as Buzz from "./reality.buzzer";
import State from "../99.core/state";

export function reducer(model: RealityModel = new RealityModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_REALITY:
 return Buzz.updateReality(clone(model), act.bale, state);

 case Act.INIT_REALITY:
 return Buzz.initReality(clone(model), act.bale, state);

case Act.OPEN_REALITY:
 return Buzz.openReality(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
