"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRpgmap = exports.CREATE_RPGMAP = exports.DeleteRpgmap = exports.DELETE_RPGMAP = exports.RemoveRpgmap = exports.REMOVE_RPGMAP = exports.WriteRpgmap = exports.WRITE_RPGMAP = exports.ReadRpgmap = exports.READ_RPGMAP = exports.UpdateRpgmap = exports.UPDATE_RPGMAP = exports.InitRpgmap = exports.INIT_RPGMAP = void 0;
// Rpgmap actions
exports.INIT_RPGMAP = "[Rpgmap action] Init Rpgmap";
class InitRpgmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_RPGMAP;
    }
}
exports.InitRpgmap = InitRpgmap;
exports.UPDATE_RPGMAP = "[Rpgmap action] Update Rpgmap";
class UpdateRpgmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_RPGMAP;
    }
}
exports.UpdateRpgmap = UpdateRpgmap;
exports.READ_RPGMAP = "[Read action] Read Rpgmap";
class ReadRpgmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_RPGMAP;
    }
}
exports.ReadRpgmap = ReadRpgmap;
exports.WRITE_RPGMAP = "[Write action] Write Rpgmap";
class WriteRpgmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_RPGMAP;
    }
}
exports.WriteRpgmap = WriteRpgmap;
exports.REMOVE_RPGMAP = "[Remove action] Remove Rpgmap";
class RemoveRpgmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_RPGMAP;
    }
}
exports.RemoveRpgmap = RemoveRpgmap;
exports.DELETE_RPGMAP = "[Delete action] Delete Rpgmap";
class DeleteRpgmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_RPGMAP;
    }
}
exports.DeleteRpgmap = DeleteRpgmap;
exports.CREATE_RPGMAP = "[Create action] Create Rpgmap";
class CreateRpgmap {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_RPGMAP;
    }
}
exports.CreateRpgmap = CreateRpgmap;
//# sourceMappingURL=rpgmap.action.js.map