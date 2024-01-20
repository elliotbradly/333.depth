"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexGeojson = exports.loadGeojson = exports.updateGeojson = exports.initGeojson = void 0;
const ActDsk = require("../../act/disk.action");
var bit, val, idx, dex, lst, dat, src;
const initGeojson = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initGeojson = initGeojson;
const updateGeojson = (cpy, bal, ste) => {
    return cpy;
};
exports.updateGeojson = updateGeojson;
const loadGeojson = async (cpy, bal, ste) => {
    src = bal.src;
    bit = await ste.bus(ActDsk.READ_DISK, { src: cpy.geoSrc + '/' + src, val: 1 });
    dat = bit.dskBit.dat;
    src = bal.src.split('.')[0] + '.' + bal.src.split('.')[1];
    if (bal.slv != null)
        bal.slv({ geoBit: { idx: "load-geojson", dat, src } });
    return cpy;
};
exports.loadGeojson = loadGeojson;
const indexGeojson = async (cpy, bal, ste) => {
    dat = null;
    bit = await ste.bus(ActDsk.INDEX_DISK, { src: cpy.geoSrc });
    lst = bit.dskBit.lst;
    if (bal.slv != null)
        bal.slv({ geoBit: { idx: "list-geojson", lst } });
    return cpy;
};
exports.indexGeojson = indexGeojson;
//# sourceMappingURL=geojson.buzz.js.map