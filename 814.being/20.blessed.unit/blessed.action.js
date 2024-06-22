"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBlessed = exports.CREATE_BLESSED = exports.DeleteBlessed = exports.DELETE_BLESSED = exports.RemoveBlessed = exports.REMOVE_BLESSED = exports.WriteBlessed = exports.WRITE_BLESSED = exports.ReadBlessed = exports.READ_BLESSED = exports.UpdateBlessed = exports.UPDATE_BLESSED = exports.InitBlessed = exports.INIT_BLESSED = void 0;
// Blessed actions
exports.INIT_BLESSED = "[Blessed action] Init Blessed";
class InitBlessed {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_BLESSED;
    }
}
exports.InitBlessed = InitBlessed;
exports.UPDATE_BLESSED = "[Blessed action] Update Blessed";
class UpdateBlessed {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_BLESSED;
    }
}
exports.UpdateBlessed = UpdateBlessed;
exports.READ_BLESSED = "[Read action] Read Blessed";
class ReadBlessed {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_BLESSED;
    }
}
exports.ReadBlessed = ReadBlessed;
exports.WRITE_BLESSED = "[Write action] Write Blessed";
class WriteBlessed {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_BLESSED;
    }
}
exports.WriteBlessed = WriteBlessed;
exports.REMOVE_BLESSED = "[Remove action] Remove Blessed";
class RemoveBlessed {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_BLESSED;
    }
}
exports.RemoveBlessed = RemoveBlessed;
exports.DELETE_BLESSED = "[Delete action] Delete Blessed";
class DeleteBlessed {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_BLESSED;
    }
}
exports.DeleteBlessed = DeleteBlessed;
exports.CREATE_BLESSED = "[Create action] Create Blessed";
class CreateBlessed {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_BLESSED;
    }
}
exports.CreateBlessed = CreateBlessed;
//# sourceMappingURL=blessed.action.js.map