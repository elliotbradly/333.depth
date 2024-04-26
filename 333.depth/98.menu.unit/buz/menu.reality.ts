import * as ActMnu from "../menu.action";

import * as ActRel from "../../01.reality.unit/reality.action";

//import * as ActFoc from "../../01.focus.unit/focus.action";
//import * as ActPvt from "../../96.pivot.unit/pivot.action";


import * as ActTrm from "../../act/terminal.action";
import * as ActChc from "../../act/choice.action";
import * as ActPut from "../../act/input.action";

import * as ActGrd from "../../act/grid.action";
import * as ActCvs from "../../act/canvas.action";
import * as ActCns from "../../act/console.action";

var bit, lst, dex, idx, dat, src;

export const realityMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  lst = [ActRel.OPEN_REALITY, ActRel.UPDATE_REALITY, ActMnu.UPDATE_MENU]

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActRel.OPEN_REALITY:
      bit = await ste.hunt(ActRel.OPEN_REALITY, { src: 'committing control' })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    case ActRel.UPDATE_REALITY:
      bit = await ste.hunt(ActRel.UPDATE_REALITY, { src: 'committing control' })
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;


    case ActMnu.UPDATE_MENU:
      bit = await ste.hunt(ActMnu.UPDATE_MENU, {})
      bit = await ste.hunt(ActMnu.PRINT_MENU, bit)
      break;

    default:
      bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {})
      break;
  }


  setTimeout(async () => {

    bit = await ste.hunt(ActMnu.REALITY_MENU, {})

  }, 333)


  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
//import { HexmapModel } from "../../03.hexmap.unit/hexmap.model";


import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';

import * as SHAPE from '../../val/shape'
import * as FOCUS from "../../val/focus";

