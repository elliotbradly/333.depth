import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActPst from "../../30.pastoral.unit/pastoral.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action"


var bit, val, idx, dex, lst, dat, src;

export const initPastoral = async (cpy: PastoralModel, bal:PastoralBit, ste: State) => {
 debugger
 return cpy;
};

export const createPastoral = async (cpy: PastoralModel, bal:PastoralBit, ste: State) => {
    var dat: PastureBit = { idx: bal.idx, src: bal.src }
    bal.slv({ pstBit: { idx: "create-pastoral", dat } });
 return cpy;
 };


export const updatePastoral = async (cpy: PastoralModel, bal:PastoralBit, ste: State) => {
 return cpy;
};



export const readPastoral = async (cpy: PastoralModel, bal:PastoralBit, ste: State) => {
 if (bal.idx == null) bal.idx = 'pst00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActPst.CREATE_PASTORAL })

    bal.slv({ pstBit: { idx: "read-pastoral", dat: bit.clcBit.dat } });
    return cpy;
 };


export const writePastoral = async (cpy: PastoralModel, bal:PastoralBit, ste: State) => {
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActPst.CREATE_PASTORAL })

    if (bal.slv != null) bal.slv({ pstBit: { idx: "write-pastoral", dat: bit.clcBit.dat } });
    return cpy;
 
 };
export const removePastoral = async (cpy: PastoralModel, bal:PastoralBit, ste: State) => {
 debugger
 return cpy;
 };
export const deletePastoral = async (cpy: PastoralModel, bal:PastoralBit, ste: State) => {
 debugger
 return cpy;
 };


 
import { PastoralModel } from "../pastoral.model";
import PastoralBit from "../fce/pastoral.bit";
import State from "../../99.core/state";
import PastureBit from "../fce/pasture.bit";
