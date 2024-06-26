import * as clone from "clone-deep";
import * as Act from "./depth.action";
import { DepthModel } from "./depth.model";
import * as Buzz from "./depth.buzzer";
import State from "../99.core/state";

export function reducer(model: DepthModel = new DepthModel(), act: Act.Actions, state?: State) {
    switch (act.type) {

        case Act.OPEN_DEPTH:
            return Buzz.openDepth(clone(model), act.bale, state);

        case Act.UPDATE_DEPTH:
            return Buzz.updateDepth(clone(model), act.bale, state);

        case Act.INIT_DEPTH:
            return Buzz.initDepth(clone(model), act.bale, state);

case Act.TEST_DEPTH:
 return Buzz.testDepth(clone(model), act.bale, state);
 
case Act.COMMIT_DEPTH:
 return Buzz.commitDepth(clone(model), act.bale, state);
 
case Act.RELOAD_DEPTH:
 return Buzz.reloadDepth(clone(model), act.bale, state);
 
case Act.LOG_DEPTH:
 return Buzz.logDepth(clone(model), act.bale, state);
 
case Act.DEV_DEPTH:
 return Buzz.devDepth(clone(model), act.bale, state);
 
        default:
            return model;
    }
}
