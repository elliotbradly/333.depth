"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReality = exports.openReality = exports.initReality = void 0;
const ActRel = require("../../01.reality.unit/reality.action");
var bit, val, idx, dex, lst, dat, src;
const initReality = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initReality = initReality;
const openReality = (cpy, bal, ste) => {
    console.log("opening reality");
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