"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSetting = exports.LIST_SETTING = exports.WriteSetting = exports.WRITE_SETTING = exports.ReadSetting = exports.READ_SETTING = exports.UpdateSetting = exports.UPDATE_SETTING = exports.InitSetting = exports.INIT_SETTING = void 0;
// Setting actions
exports.INIT_SETTING = "[Setting action] Init Setting";
class InitSetting {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_SETTING;
    }
}
exports.InitSetting = InitSetting;
exports.UPDATE_SETTING = "[Setting action] Update Setting";
class UpdateSetting {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_SETTING;
    }
}
exports.UpdateSetting = UpdateSetting;
exports.READ_SETTING = "[Read action] Read Setting";
class ReadSetting {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_SETTING;
    }
}
exports.ReadSetting = ReadSetting;
exports.WRITE_SETTING = "[Write action] Write Setting";
class WriteSetting {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_SETTING;
    }
}
exports.WriteSetting = WriteSetting;
exports.LIST_SETTING = "[List action] List Setting";
class ListSetting {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LIST_SETTING;
    }
}
exports.ListSetting = ListSetting;
//# sourceMappingURL=setting.action.js.map