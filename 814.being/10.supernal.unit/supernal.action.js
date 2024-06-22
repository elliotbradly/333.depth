"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSupernal = exports.CREATE_SUPERNAL = exports.DeleteSupernal = exports.DELETE_SUPERNAL = exports.RemoveSupernal = exports.REMOVE_SUPERNAL = exports.WriteSupernal = exports.WRITE_SUPERNAL = exports.ReadSupernal = exports.READ_SUPERNAL = exports.UpdateSupernal = exports.UPDATE_SUPERNAL = exports.InitSupernal = exports.INIT_SUPERNAL = void 0;
// Supernal actions
exports.INIT_SUPERNAL = "[Supernal action] Init Supernal";
class InitSupernal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_SUPERNAL;
    }
}
exports.InitSupernal = InitSupernal;
exports.UPDATE_SUPERNAL = "[Supernal action] Update Supernal";
class UpdateSupernal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_SUPERNAL;
    }
}
exports.UpdateSupernal = UpdateSupernal;
exports.READ_SUPERNAL = "[Read action] Read Supernal";
class ReadSupernal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_SUPERNAL;
    }
}
exports.ReadSupernal = ReadSupernal;
exports.WRITE_SUPERNAL = "[Write action] Write Supernal";
class WriteSupernal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_SUPERNAL;
    }
}
exports.WriteSupernal = WriteSupernal;
exports.REMOVE_SUPERNAL = "[Remove action] Remove Supernal";
class RemoveSupernal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_SUPERNAL;
    }
}
exports.RemoveSupernal = RemoveSupernal;
exports.DELETE_SUPERNAL = "[Delete action] Delete Supernal";
class DeleteSupernal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_SUPERNAL;
    }
}
exports.DeleteSupernal = DeleteSupernal;
exports.CREATE_SUPERNAL = "[Create action] Create Supernal";
class CreateSupernal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_SUPERNAL;
    }
}
exports.CreateSupernal = CreateSupernal;
//# sourceMappingURL=supernal.action.js.map