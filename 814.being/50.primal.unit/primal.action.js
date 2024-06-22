"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePrimal = exports.CREATE_PRIMAL = exports.DeletePrimal = exports.DELETE_PRIMAL = exports.RemovePrimal = exports.REMOVE_PRIMAL = exports.WritePrimal = exports.WRITE_PRIMAL = exports.ReadPrimal = exports.READ_PRIMAL = exports.UpdatePrimal = exports.UPDATE_PRIMAL = exports.InitPrimal = exports.INIT_PRIMAL = void 0;
// Primal actions
exports.INIT_PRIMAL = "[Primal action] Init Primal";
class InitPrimal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_PRIMAL;
    }
}
exports.InitPrimal = InitPrimal;
exports.UPDATE_PRIMAL = "[Primal action] Update Primal";
class UpdatePrimal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_PRIMAL;
    }
}
exports.UpdatePrimal = UpdatePrimal;
exports.READ_PRIMAL = "[Read action] Read Primal";
class ReadPrimal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_PRIMAL;
    }
}
exports.ReadPrimal = ReadPrimal;
exports.WRITE_PRIMAL = "[Write action] Write Primal";
class WritePrimal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_PRIMAL;
    }
}
exports.WritePrimal = WritePrimal;
exports.REMOVE_PRIMAL = "[Remove action] Remove Primal";
class RemovePrimal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_PRIMAL;
    }
}
exports.RemovePrimal = RemovePrimal;
exports.DELETE_PRIMAL = "[Delete action] Delete Primal";
class DeletePrimal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_PRIMAL;
    }
}
exports.DeletePrimal = DeletePrimal;
exports.CREATE_PRIMAL = "[Create action] Create Primal";
class CreatePrimal {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_PRIMAL;
    }
}
exports.CreatePrimal = CreatePrimal;
//# sourceMappingURL=primal.action.js.map