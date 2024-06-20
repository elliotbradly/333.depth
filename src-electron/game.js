"use strict";

//const ActMap = require('../002.space/03.hexmap.unit/hexmap.action')
//const ActFoc = require('../002.space/01.focus.unit/focus.action')
//const SHAPE = require('../002.space/val/shape')
//const FOCUS = require('../002.space/val/focus')

Object.defineProperty(exports, "__esModule", { value: true });
var sim = {
    hunt: null,
    state: null
};


sim.open = (space) => { return open(space); };
var open = (space) => {



    init(space);

    var slv;
    const promo = new Promise((rslv, rjct) => (slv = rslv));

    //if (obj == null)
     //   obj = {};
    //if (obj.slv == null)
    //    obj.slv = (val0) => slv(val0);

   // return promo;
};

var init = async ( space ) => {

  console.log("open the game ")

  var bit;

  var idx = 'shape'

  //bit = await space.hunt(ActMap.SHAPE_HEXMAP, { idx, dat: { frm: SHAPE.RECTANGLE, h: 3, w: 3 } })
  var grid = bit.mapBit.dat.dat.bit;
  bit = await space.hunt(ActMap.WRITE_HEXMAP, { idx:"map00", dat: { bit: { grid } } })

  bit = await space.hunt(ActFoc.WRITE_FOCUS, { idx: 'foc00', src:'map00', dat: { x:1,y:2, typ: FOCUS.AVAS } })

  bit = await space.hunt(ActFoc.SPIN_LEFT_FOCUS, { idx: 'foc00' })
  bit = await space.hunt(ActFoc.FORWARD_FOCUS, { idx: 'foc00' })
  bit = await space.hunt(ActFoc.SPIN_RIGHT_FOCUS, { idx: 'foc00' })
  bit = await space.hunt(ActFoc.SPIN_RIGHT_FOCUS, { idx: 'foc00' })
  bit = await space.hunt(ActFoc.FORWARD_FOCUS, { idx: 'foc00' })

  //bit = await space.hunt(ActFoc.WRITE_FOCUS, { idx: 'foc01', src:'map00', dat: { x:4,y:3, typ: FOCUS.AVAS } })
  //bit = await space.hunt(ActFoc.WRITE_FOCUS, { idx: 'foc02', src:'map00', dat: { x:3,y:6, typ: FOCUS.AVAS } })
  //bit = await space.hunt(ActFoc.WRITE_FOCUS, { idx: 'foc03', src:'map00', dat: { x:2,y:7, typ: FOCUS.AVAS } })
  //bit = await space.hunt(ActFoc.WRITE_FOCUS, { idx: 'foc04', src:'map00', dat: { x:10,y:10, typ: FOCUS.AVAS } })


};

module.exports = sim;
