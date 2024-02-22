import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActScn from "../../02.scene.unit/scene.action";

var bit, val, idx, dex, lst, dat;

export const initScene = (cpy: SceneModel, bal: SceneBit, ste: State) => {
    debugger
    return cpy;
};

export const updateScene = async (cpy: SceneModel, bal: SceneBit, ste: State) => {

    //bit = await ste.hunt(ActCan.READ_CONTAINER, { idx: bal.idx })
    //dat = bit.canBit.dat

    //var can: PIXI.Container = dat.bit;

    //can.x = dat.x;
    //can.y = dat.y;

    //if (bal.slv != null) return bal.slv({ canBit: { idx: "update-container", dat } });

    return cpy;
};


export const readScene = async (cpy: SceneModel, bal: SceneBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'can00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActScn.CREATE_SCENE })
    if (slv != null) slv({ scnBit: { idx: "read-scene", dat: bit.clcBit.dat } });
    return cpy;
};
export const writeScene = async (cpy: SceneModel, bal: SceneBit, ste: State) => {

    if (typeof window != "object") return bal.slv({ canBit: { idx: "error-write-container", dat: {} } });

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActScn.CREATE_SCENE })
    ste.hunt(ActScn.UPDATE_SCENE, { idx: bal.idx })

    if (bal.slv != null) bal.slv({ canBit: { idx: "write-scene", dat: bit.clcBit.dat } });

    return cpy;
};
export const removeScene = (cpy: SceneModel, bal: SceneBit, ste: State) => {
    debugger
    return cpy;
};
export const deleteScene = (cpy: SceneModel, bal: SceneBit, ste: State) => {
    debugger
    return cpy;
};
export const createScene = (cpy: SceneModel, bal: SceneBit, ste: State) => {

    
    var engMod: EngineModel = ste.value.engine
    //you have a source visage
    //now you wish to update a bit of the source visage
    var dat: SetBit = { idx: bal.idx };

    for (var key in bal.dat) {
        dat[key] = bal.dat[key]
    }


    
    if (bal.slv != null) return bal.slv({ scnBit: { idx: "create-scene", dat } });



    return cpy;
};

export const listScene = async (cpy: SceneModel, bal: SceneBit, ste: State) => {

    dat = null

    if (bal.src == 'bus') bit = await ste.bus(ActCol.FETCH_COLLECT, { val: 0, bit: ActScn.CREATE_SCENE })
    else bit = await ste.hunt(ActCol.FETCH_COLLECT, { val: 0, bit: ActScn.CREATE_SCENE })

    if (bit.clcBit.dat == null) lst = []
    else dat = bit.clcBit.dat;

    if (dat != null) {

        dat.bitList.forEach((a) => {
            lst = []
            lst.push((a.idx))
        })

        lst
    }

    if (bal.slv != null) bal.slv({ scnBit: { idx: 'list-scene', lst } });

    return cpy;
};

import { SceneModel } from "../scene.model";
import SceneBit from "../fce/scene.bit";
import State from "../../99.core/state";
import SetBit from "../fce/set.bit";
import { EngineModel } from "333.depth/01.engine.unit/engine.model";

