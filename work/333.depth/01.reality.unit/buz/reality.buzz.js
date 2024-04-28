"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReality = exports.openReality = exports.initReality = void 0;
const ActDep = require("../../00.depth.unit/depth.action");
const ActSok = require("../../96.socket.unit/socket.action");
const ActClk = require("../../act/clock.action");
var bit, val, idx, dex, lst, dat, src;
const initReality = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initReality = initReality;
const openReality = async (cpy, bal, ste) => {
    ste.hunt(ActDep.LOG_DEPTH, { src: "opening reality" });
    idx = 'clk00';
    var clk = { idx, yrs: 1978, mth: 4, day: 11 };
    bit = await ste.bus(ActClk.WRITE_CLOCK, { idx, clk });
    ste.hunt(ActDep.LOG_DEPTH, { src: JSON.stringify(bit) });
    bit = await ste.hunt(ActSok.INIT_SOCKET, {});
    if (cpy.interval != null)
        clearInterval(cpy.interval);
    //cpy.interval = setInterval(async () => {
    //    bit = ste.hunt(ActRel.UPDATE_REALITY, {})
    //}, 333)
    bal.slv({ sokBit: { idx: "create-reality" } });
    return cpy;
};
exports.openReality = openReality;
const updateReality = async (cpy, bal, ste) => {
    //ste.hunt( ActDep.LOG_DEPTH, {src: "update reality"  } )
    require("dotenv").config();
    bit = await ste.bus(ActClk.BLOCK_CLOCK, { idx: process.env.BLOCKFROST });
    var block = JSON.parse(bit.clkBit.dat);
    if (bit.clkBit.val == false || block.score > 1000) {
        bal.slv({ sokBit: { idx: "update-reality", val: 0 } });
        return;
    }
    var msg = bit.clkBit.dex + ' :::: ' + block.score;
    //ste.hunt(ActDep.LOG_DEPTH, { src: msg })
    var idx = 'clk00';
    var dat = { idx };
    dat.min = 1 * block.score;
    dat.sec = 1 * block.score;
    bit = await ste.bus(ActClk.WRITE_CLOCK, { idx, dat });
    var clock = bit.clkBit.dat;
    ste.hunt(ActDep.LOG_DEPTH, { src: clock.frm });
    cpy.now = clock.now;
    cpy.timecode = clock.frm;
    //bit = await ste.bus(ActClk.WRITE_CLOCK, { idx, clk })
    bal.slv({ sokBit: { idx: "update-reality", val: 1 } });
    return cpy;
};
exports.updateReality = updateReality;
//# sourceMappingURL=reality.buzz.js.map