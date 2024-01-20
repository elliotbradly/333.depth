import * as ActTtl from "../../00.core/title/title.action";
import * as ActCan from "../../08.container.unit/container.action";
import * as ActGph from "../../06.graphic.unit/graphic.action";
import * as ActSpr from "../../05.sprite.unit/sprite.action";
import * as ActSfc from "../../09.surface.unit/surface.action";
import * as ActHml from "../../03.html.unit/html.action";
import * as ActLup from "../../12.loop.unit/loop.action";

var can0, can1, mask, can2;
var containIDX00 = "go-tang";
var containIDX01 = "contain00";

var containIDXBG = "contain00BG";
var containIDXCAR = "contain00CAR";
var containIDXMOHAWK = "contain00MOHAWK";

var graphicIDX00 = "grph00";

var contain00, contain01, containBG, containCar, containMohawk;

var mountains, knee, mouth;

export const initToon = (cpy: ToonModel, bal: ToonBit, ste: State) => {
  var htmlMod: HtmlModel = ste.value.html;
  var containerMod: ContainerModel = ste.value.container;
  var graphicMod: GraphicModel = ste.value.graphic;
  var loopMod: LoopModel = ste.value.loop;

  //BACKGROUND CONTAINER
  patch(ste, ActCan.CREATE_CONTAINER, { idx: containIDXBG, can: htmlMod.stageContainerIDX });
  containBG = containerMod.containerNow;

  //CAR CONTAINER
  patch(ste, ActCan.CREATE_CONTAINER, { idx: containIDXCAR, can: htmlMod.stageContainerIDX });
  containCar = containerMod.containerNow;

  patch(ste, ActCan.CREATE_CONTAINER, { idx: containIDX00, can: htmlMod.stageContainerIDX });
  contain00 = containerMod.containerNow;

  patch(ste, ActCan.CREATE_CONTAINER, { idx: containIDX01, can: htmlMod.stageContainerIDX });
  contain01 = containerMod.containerNow;
  contain01.x = -750;
  contain01.y = 550;

  patch(ste, ActGph.CREATE_GRAPHIC, { w: cpy.width, h: cpy.height, clr: 0x00ff00, idx: graphicIDX00, can: containIDXBG });
  mask = graphicMod.graphicNow;

  //BACKGROUND
  patch(ste, ActLup.CREATE_LOOP, { idx: "backg0", lst: ["./img/Planet.png"], x: 0, can: containIDXBG });
  mountains = loopMod.nowLoop;
  mountains.x = 0;

  patch(ste, ActLup.CREATE_LOOP, { idx: "backg2", lst: ["./img/ship_interior-00.png"], x: 0, can: containIDXBG });

  //BODY
  patch(ste, ActLup.CREATE_LOOP, { idx: "car0", lst: ["./img/Shadow.png"], x: 0, can: containIDXCAR });
  patch(ste, ActLup.CREATE_LOOP, { idx: "car1", lst: ["./img/Body.png"], x: 0, can: containIDXCAR });
  patch(ste, ActLup.CREATE_LOOP, {
    idx: "car2",
    lst: [
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/Dopey_Grin.png",
      "./img/Dopey_Grin.png",
      "./img/Dopey_Grin.png",
      "./img/Dopey_Grin.png",
      "./img/Dopey_Grin.png",
      "./img/Dopey_Grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
      "./img/closed_grin.png",
    ],
    x: 0,
    can: containIDXCAR,
  });
  mouth = loopMod.nowLoop;
  patch(ste, ActLup.CREATE_LOOP, { idx: "car3", lst: ["./img/Legs.png"], x: 0, can: containIDXCAR });
  knee = loopMod.nowLoop;
  patch(ste, ActLup.CREATE_LOOP, { idx: "car4", lst: ["./img/water_can.png"], x: 0, can: containIDXCAR });
  patch(ste, ActLup.CREATE_LOOP, {
    idx: "car5",
    lst: [
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/Closed.png",
      "./img/Eyes/Closed.png",
      "./img/Eyes/Closed.png",
      "./img/Eyes/Closed.png",
      "./img/Eyes/Closed.png",
      "./img/Eyes/Closed.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
      "./img/Eyes/open.png",
    ],
    x: 0,
    can: containIDXCAR,
  });

  patch(ste, ActLup.CREATE_LOOP, { idx: "car4", lst: ["./img/Monstera.png"], x: 0, can: containIDXCAR });

  patch(ste, ActLup.CREATE_LOOP, {
    idx: "car4",
    lst: [
      "./img/water_drops00.png",
      "./img/water_drops01.png",
      "./img/water_drops02.png",
      "./img/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/water_drops00.png",
      "./img/water_drops01.png",
      "./img/water_drops02.png",
      "./img/water_drops03.png",
      "./img/water_drops00.png",
      "./img/water_drops01.png",
      "./img/water_drops02.png",
      "./img/water_drops03.png",

      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",

      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",

      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/water_drops00.png",
      "./img/water_drops01.png",
      "./img/water_drops02.png",
      "./img/water_drops03.png",
      "./img/water_drops00.png",
      "./img/water_drops01.png",
      "./img/water_drops02.png",
      "./img/water_drops03.png",
      "./img/water_drops00.png",
      "./img/water_drops01.png",
      "./img/water_drops02.png",
      "./img/water_drops03.png",

      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
      "./img/no/water_drops03.png",
    ],
    x: 0,
    can: containIDXCAR,
  });

  return cpy;
};

export const openToon = (cpy: ToonModel, bal: ToonBit, ste: State) => {
  console.log("let us start the show");

  gsap.ticker.fps(12);

  //loop.pivot.set(loop.width / 2, loop.height / 2);
  var tween = gsap.to(mountains, { y: mountains.y + 50, x: mountains.x + 10, duration: 6, ease: "linear", repeat: 133 });
  tween.yoyo(true);

  // var tween = gsap.to(containMohawk, { rotation: 0.02, duration: 0.15, ease: "linear", repeat: 133 });

  var tween = gsap.to(knee, { y: knee.y - 3, duration: 0.15, ease: "linear", repeat: 133 });
  tween.yoyo(true);

  //var tween = gsap.to(mouth, { y: knee.y - 3, duration: 0.15, ease: "linear", repeat: 133 });
  //tween.yoyo(true);

  gsap
    .to(contain00, { duration: 12 })
    .eventCallback("onStart", () => {
      console.log("start");

      var htmlMod: HtmlModel = ste.value.html;

      (async () => {
        const rawResponse = await fetch("http://localhost:7000/openRender/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ canvasData: htmlMod.canvasData }),
        });
        const content = await rawResponse.json();

        console.log(content);
      })();
    })
    .eventCallback("onUpdate", () => {
      patch(ste, ActHml.RENDER_HTML, {});

      patch(ste, ActLup.UPDATE_LOOP, {});

      var htmlMod: HtmlModel = ste.value.html;

      (async () => {
        const rawResponse = await fetch("http://localhost:7000/writeRender/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ canvasData: htmlMod.canvasData }),
        });
        const content = await rawResponse.json();

        console.log(content);
      })();

      //now send it to where the sun shines

      //console.log("update " + list.length);
      //talk to me
    })
    .eventCallback("onComplete", () => {
      console.log("complete");

      var htmlMod: HtmlModel = ste.value.html;

      (async () => {
        const rawResponse = await fetch("http://localhost:7000/closeRender/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ canvasData: htmlMod.canvasData }),
        });
        const content = await rawResponse.json();

        console.log(content);
      })();
    });

  return cpy;
};

export const updateToon = (cpy: ToonModel, bal: ToonBit, ste: State) => {
  return cpy;
};

var query = (ste, pvt, hrk) => {
  var val = ste.value.title[pvt].query(hrk);
  if (val == null) return console.error("no val for " + pvt + " : " + hrk);
  return val;
};

var harkPivot = (ste, pvt, hrk, rsp) => ste.value.title[pvt].hark(hrk, rsp);

var hark = (ste, hrk, rsp) => {
  var itm = ste.hark(hrk);
  itm.subscribe(rsp);
  return itm;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import gsap from "gsap";

import { ToonModel } from "../toon.model";
import ToonBit from "../fce/toon.bit";
import State from "../../00.core/state";

import * as FS from "fs-extra";

import { HtmlModel } from "../../03.html.unit/html.model";
import { ContainerModel } from "../../08.container.unit/container.model";
import { GraphicModel } from "../../06.graphic.unit/graphic.model";
import { SpriteModel } from "../../05.sprite.unit/sprite.model";
import { LoopModel } from "../../12.loop.unit/loop.model";
