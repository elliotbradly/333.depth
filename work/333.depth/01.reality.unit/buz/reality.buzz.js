"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReality = exports.openReality = exports.initReality = void 0;
const ActRel = require("../../01.reality.unit/reality.action");
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
    cpy.interval = setInterval(async () => {
        bit = ste.hunt(ActRel.UPDATE_REALITY, {});
    }, 333);
    return cpy;
};
exports.openReality = openReality;
const updateReality = (cpy, bal, ste) => {
    return cpy;
};
exports.updateReality = updateReality;
//# sourceMappingURL=reality.buzz.js.map