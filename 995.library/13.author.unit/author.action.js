"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAuthor = exports.LIST_AUTHOR = exports.WriteAuthor = exports.WRITE_AUTHOR = exports.ReadAuthor = exports.READ_AUTHOR = exports.UpdateAuthor = exports.UPDATE_AUTHOR = exports.InitAuthor = exports.INIT_AUTHOR = void 0;
// Author actions
exports.INIT_AUTHOR = "[Author action] Init Author";
class InitAuthor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_AUTHOR;
    }
}
exports.InitAuthor = InitAuthor;
exports.UPDATE_AUTHOR = "[Author action] Update Author";
class UpdateAuthor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_AUTHOR;
    }
}
exports.UpdateAuthor = UpdateAuthor;
exports.READ_AUTHOR = "[Read action] Read Author";
class ReadAuthor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_AUTHOR;
    }
}
exports.ReadAuthor = ReadAuthor;
exports.WRITE_AUTHOR = "[Write action] Write Author";
class WriteAuthor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_AUTHOR;
    }
}
exports.WriteAuthor = WriteAuthor;
exports.LIST_AUTHOR = "[List action] List Author";
class ListAuthor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LIST_AUTHOR;
    }
}
exports.ListAuthor = ListAuthor;
//# sourceMappingURL=author.action.js.map