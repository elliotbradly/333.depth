"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./setting.action");
const setting_model_1 = require("./setting.model");
const Buzz = require("./setting.buzzer");
function reducer(model = new setting_model_1.SettingModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_SETTING:
            return Buzz.updateSetting(clone(model), act.bale, state);
        case Act.INIT_SETTING:
            return Buzz.initSetting(clone(model), act.bale, state);
        case Act.READ_SETTING:
            return Buzz.readSetting(clone(model), act.bale, state);
        case Act.WRITE_SETTING:
            return Buzz.writeSetting(clone(model), act.bale, state);
        case Act.LIST_SETTING:
            return Buzz.listSetting(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=setting.reduce.js.map