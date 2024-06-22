"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBounded = exports.CREATE_BOUNDED = exports.DeleteBounded = exports.DELETE_BOUNDED = exports.RemoveBounded = exports.REMOVE_BOUNDED = exports.WriteBounded = exports.WRITE_BOUNDED = exports.ReadBounded = exports.READ_BOUNDED = exports.UpdateBounded = exports.UPDATE_BOUNDED = exports.InitBounded = exports.INIT_BOUNDED = void 0;
// Bounded actions
exports.INIT_BOUNDED = "[Bounded action] Init Bounded";
class InitBounded {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_BOUNDED;
    }
}
exports.InitBounded = InitBounded;
exports.UPDATE_BOUNDED = "[Bounded action] Update Bounded";
class UpdateBounded {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_BOUNDED;
    }
}
exports.UpdateBounded = UpdateBounded;
exports.READ_BOUNDED = "[Read action] Read Bounded";
class ReadBounded {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_BOUNDED;
    }
}
exports.ReadBounded = ReadBounded;
exports.WRITE_BOUNDED = "[Write action] Write Bounded";
class WriteBounded {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_BOUNDED;
    }
}
exports.WriteBounded = WriteBounded;
exports.REMOVE_BOUNDED = "[Remove action] Remove Bounded";
class RemoveBounded {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_BOUNDED;
    }
}
exports.RemoveBounded = RemoveBounded;
exports.DELETE_BOUNDED = "[Delete action] Delete Bounded";
class DeleteBounded {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_BOUNDED;
    }
}
exports.DeleteBounded = DeleteBounded;
exports.CREATE_BOUNDED = "[Create action] Create Bounded";
class CreateBounded {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_BOUNDED;
    }
}
exports.CreateBounded = CreateBounded;
//# sourceMappingURL=bounded.action.js.map