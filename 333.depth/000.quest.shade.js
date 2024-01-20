global.SHADE = require("../dist/110.shade/hunt");

global.MQTT = require("async-mqtt");

global.SHADE.ActShd = require("../dist/110.shade/00.shade.unit/shade.action");
global.SHADE.ActVsg = require("../dist/110.shade/01.visage.unit/visage.action");
global.SHADE.ActCan = require("../dist/110.shade/03.container.unit/container.action");
global.SHADE.ActGph = require("../dist/110.shade/04.graphic.unit/graphic.action");
global.SHADE.ActTxt = require("../dist/110.shade/05.text.unit/text.action");
global.SHADE.ActSpr = require("../dist/110.shade/06.sprite.unit/sprite.action");
global.SHADE.ActHex = require("../dist/110.shade/07.hexagon.unit/hexagon.action");
global.SHADE.ActFcg = require("../dist/110.shade/08.focigon.unit/focigon.action");
global.SHADE.ActLop = require("../dist/110.shade/09.loop.unit/loop.action");
global.SHADE.ActTun = require("../dist/110.shade/10.toon.unit/toon.action");
global.SHADE.ActVid = require("../dist/110.shade/11.video.unit/video.action");
global.SHADE.ActFme = require("../dist/110.shade/12.frame.unit/frame.action");
