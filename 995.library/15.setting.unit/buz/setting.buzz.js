"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSetting = exports.writeSetting = exports.readSetting = exports.updateSetting = exports.initSetting = void 0;
const ActDsk = require("../../act/disk.action");
var bit, val, idx, dex, lst, dat;
const initSetting = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initSetting = initSetting;
const updateSetting = (cpy, bal, ste) => {
    return cpy;
};
exports.updateSetting = updateSetting;
const readSetting = (cpy, bal, ste) => {
    bal.slv({ setBit: { idx: "read-setting", src: cpy.setting } });
    return cpy;
};
exports.readSetting = readSetting;
const writeSetting = async (cpy, bal, ste) => {
    bit = await ste.bus(ActDsk.READ_DISK, { src: './lore/setting/' + bal.src });
    dat = bit.dskBit.dat;
    cpy.setting = dat;
    bal.slv({ setBit: { idx: "write-setting", src: cpy.setting } });
    return cpy;
};
exports.writeSetting = writeSetting;
const listSetting = async (cpy, bal, ste) => {
    bit = await ste.bus(ActDsk.INDEX_DISK, { src: './lore/setting/' });
    lst = bit.dskBit.lst;
    bal.slv({ setBit: { idx: "list-setting", lst } });
    return cpy;
};
exports.listSetting = listSetting;
//# sourceMappingURL=setting.buzz.js.map