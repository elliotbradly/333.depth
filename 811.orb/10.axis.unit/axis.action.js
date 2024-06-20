"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAxis = exports.CREATE_AXIS = exports.DeleteAxis = exports.DELETE_AXIS = exports.RemoveAxis = exports.REMOVE_AXIS = exports.WriteAxis = exports.WRITE_AXIS = exports.ReadAxis = exports.READ_AXIS = exports.UpdateAxis = exports.UPDATE_AXIS = exports.InitAxis = exports.INIT_AXIS = void 0;
// Axis actions
exports.INIT_AXIS = "[Axis action] Init Axis";
class InitAxis {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_AXIS;
    }
}
exports.InitAxis = InitAxis;
exports.UPDATE_AXIS = "[Axis action] Update Axis";
class UpdateAxis {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_AXIS;
    }
}
exports.UpdateAxis = UpdateAxis;
exports.READ_AXIS = "[Read action] Read Axis";
class ReadAxis {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_AXIS;
    }
}
exports.ReadAxis = ReadAxis;
exports.WRITE_AXIS = "[Write action] Write Axis";
class WriteAxis {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_AXIS;
    }
}
exports.WriteAxis = WriteAxis;
exports.REMOVE_AXIS = "[Remove action] Remove Axis";
class RemoveAxis {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_AXIS;
    }
}
exports.RemoveAxis = RemoveAxis;
exports.DELETE_AXIS = "[Delete action] Delete Axis";
class DeleteAxis {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_AXIS;
    }
}
exports.DeleteAxis = DeleteAxis;
exports.CREATE_AXIS = "[Create action] Create Axis";
class CreateAxis {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_AXIS;
    }
}
exports.CreateAxis = CreateAxis;
//# sourceMappingURL=axis.action.js.map