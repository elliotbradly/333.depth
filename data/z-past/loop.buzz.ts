export const initLoop = (cpy: LoopModel, bal: LoopBit, ste: State) => {
  debugger;
  return cpy;
};

export const updateLoop = (cpy: LoopModel, bal: LoopBit, ste: State) => {
  console.log("update the loooop");

  cpy.loopList.forEach((a: PIXI.AnimatedSprite) => {
    var totalFrames = a.totalFrames;
    var nowFrame = a.currentFrame;
    var nextFrame = (nowFrame += 1);
    if (nextFrame > totalFrames) nextFrame = 1;

    a.gotoAndStop(nextFrame);

    console.log(nowFrame + " : " + totalFrames);
  });

  return cpy;
};

export const createLoop = (cpy: LoopModel, bal: LoopBit, ste: State) => {
  var cMod: ContainerModel = ste.value.container;
  var container = cMod.containerList[cMod.containers[bal.can]];

  var list = bal.lst;
  var textureArray = [];

  list.forEach((a) => {
    var texture = PIXI.Texture.from(a);
    textureArray.push(texture);
  });

  var mc = new PIXI.AnimatedSprite(textureArray);

  if (container == null) return console.log("no container loop ");

  container.addChild(mc);

  bal.dex = cpy.loopBitList.length;

  cpy.loopBitList.push(bal);
  cpy.loopBits[bal.idx] = bal.dex;

  cpy.loopList.push(mc);
  cpy.loops[bal.idx] = cpy.loopList.length;

  cpy.nowLoop = mc;

  if (bal.x == null) bal.x = 0;
  if (bal.y == null) bal.y = 0;

  mc.x = bal.x;
  mc.y = bal.y;

  if (bal.xAnc != null) {
    mc.pivot.set(bal.xAnc, bal.yAnc);
    mc.x += bal.xAnc;
    mc.y += bal.yAnc;
    //mc.y -= mc.height;
    //yconsole.log("triggered ancor point");
  }

  cpy.nowLoop = mc;

  return cpy;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { LoopModel } from "../loop.model";
import LoopBit from "../fce/loop.bit";
import State from "../../00.core/state";
import * as ActTtl from "../../00.core/title/title.action";

import * as PIXI from "pixi.js-legacy";

import { ContainerModel } from "../../08.container.unit/container.model";
