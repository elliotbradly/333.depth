import * as ActMnu from "../menu.action";

import * as ActDep from "../../00.depth.unit/depth.action";
//import * as ActFoc from "../../01.focus.unit/focus.action";
//import * as ActPvt from "../../96.pivot.unit/pivot.action";

//import * as ActMap from "../../03.hexmap.unit/hexmap.action"

import * as ActTrm from "../../act/terminal.action";
import * as ActChc from "../../act/choice.action";

import * as ActGrd from "../../act/grid.action";
import * as ActCvs from "../../act/canvas.action";
import * as ActCns from "../../act/console.action";

var bit, lst, dex, idx, dat, src;

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  if (bal == null) bal = { idx: null }

  bit = await ste.bus(ActTrm.CLEAR_TERMINAL, {})

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 3, y: 0, xSpan: 1, ySpan: 12 })
  bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, })

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 10, ySpan: 12 })
  bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } })

  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Depth PIVOT V0" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })

  updateMenu(cpy, bal, ste);
  return cpy;
};

var updateDepth = async (ste) => {

  var bitUp = await ste.hunt(ActDep.UPDATE_DEPTH, {})
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'updating depth....' })
  bit = await ste.hunt(ActMnu.PRINT_MENU, bitUp)

}

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  lst = [ ActMnu.REALITY_MENU,  ActDep.UPDATE_DEPTH, ActDep.RELOAD_DEPTH, ActDep.COMMIT_DEPTH,  ActMnu.SOCKET_MENU ]
  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActMnu.REALITY_MENU:
      bit = await ste.hunt(ActMnu.REALITY_MENU, {})
      break;

      case ActMnu.SOCKET_MENU:
        bit = await ste.hunt( ActMnu.SOCKET_MENU, {})
        break;

    case ActDep.COMMIT_DEPTH:
      bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'commit depth....' })
      bit = await ste.hunt(ActDep.COMMIT_DEPTH, {})
      lst = bit.depBit.lst;

      lst.forEach((a) => {
        ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a })
      })

      var count = 0

      var interval = setInterval(() => {

        count += 1;
        if (count <= 110) ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'waiting... ' + count })
        else clearInterval(interval)
      }, 1000)

      break;

    case ActDep.UPDATE_DEPTH:
      await updateDepth(ste)
      break;


    case ActDep.RELOAD_DEPTH:

      var bitUp = await ste.hunt(ActDep.RELOAD_DEPTH, {})
      bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'reloading setup' })

      const fs = require('fs');

      // can be a filename or a directory...
      const fileToWatch = './0.AlligatorEarth.js'
      const dirToWatch = './333.depth'

      fs.watch(fileToWatch, async (eventType, fileName) => {
        if (eventType != 'rename') {
          await updateDepth(ste)
          ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: `${fileName} was updated` })
        }
      });

      fs.watch(dirToWatch, { recursive: true }, async (eventType, fileName) => {
        if (eventType != 'rename') {
          bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'updating...' })
          await updateDepth(ste)
          ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: `${fileName} was updated` })
        }
      });

      break;

    default:
      bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {})
      break;
  }

  setTimeout(() => { updateMenu(cpy, bal, ste) }, 11)

  return cpy;
};

export const testMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  return cpy;
};

export const closeMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  await ste.bus(ActTrm.CLOSE_TERMINAL, {})

  return cpy;
};

export const createMenu = (cpy: MenuModel, bal: MenuBit, ste: State) => {
  debugger
  return cpy;
};

export const logMenu = (cpy: MenuModel, bal: MenuBit, ste: State) => {
  ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: bal.src });
  bal.slv({ mnuBit: { idx: "log-menu" } });
  return cpy;
};

export const printMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  dat = bal;
  if (dat == null) return bal.slv({ mnuBit: { idx: "print-menu", dat } });

  var itm = JSON.stringify(dat);

  lst = itm.split(",");
  lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: a }));
  ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "------------" });

  bal.slv({ mnuBit: { idx: "print-menu", dat: itm } });
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


