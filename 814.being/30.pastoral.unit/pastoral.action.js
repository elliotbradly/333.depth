"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePastoral = exports.CREATE_PASTORAL = exports.DeletePastoral = exports.DELETE_PASTORAL = exports.RemovePastoral = exports.REMOVE_PASTORAL = exports.WritePastoral = exports.WRITE_PASTORAL = exports.ReadPastoral = exports.READ_PASTORAL = exports.UpdatePastoral = exports.UPDATE_PASTORAL = exports.InitPastoral = exports.INIT_PASTORAL = void 0;
// Pastoral actions
exports.INIT_PASTORAL = "[Pastoral action] Init Pastoral";
class InitPastoral {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_PASTORAL;
    }
}
exports.InitPastoral = InitPastoral;
exports.UPDATE_PASTORAL = "[Pastoral action] Update Pastoral";
class UpdatePastoral {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_PASTORAL;
    }
}
exports.UpdatePastoral = UpdatePastoral;
exports.READ_PASTORAL = "[Read action] Read Pastoral";
class ReadPastoral {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_PASTORAL;
    }
}
exports.ReadPastoral = ReadPastoral;
exports.WRITE_PASTORAL = "[Write action] Write Pastoral";
class WritePastoral {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_PASTORAL;
    }
}
exports.WritePastoral = WritePastoral;
exports.REMOVE_PASTORAL = "[Remove action] Remove Pastoral";
class RemovePastoral {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_PASTORAL;
    }
}
exports.RemovePastoral = RemovePastoral;
exports.DELETE_PASTORAL = "[Delete action] Delete Pastoral";
class DeletePastoral {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_PASTORAL;
    }
}
exports.DeletePastoral = DeletePastoral;
exports.CREATE_PASTORAL = "[Create action] Create Pastoral";
class CreatePastoral {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_PASTORAL;
    }
}
exports.CreatePastoral = CreatePastoral;
//# sourceMappingURL=pastoral.action.js.map