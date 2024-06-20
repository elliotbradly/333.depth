"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubGenre = exports.SUB_GENRE = exports.ListGenre = exports.LIST_GENRE = exports.WriteGenre = exports.WRITE_GENRE = exports.ReadGenre = exports.READ_GENRE = exports.UpdateGenre = exports.UPDATE_GENRE = exports.InitGenre = exports.INIT_GENRE = void 0;
// Genre actions
exports.INIT_GENRE = "[Genre action] Init Genre";
class InitGenre {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_GENRE;
    }
}
exports.InitGenre = InitGenre;
exports.UPDATE_GENRE = "[Genre action] Update Genre";
class UpdateGenre {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_GENRE;
    }
}
exports.UpdateGenre = UpdateGenre;
exports.READ_GENRE = "[Read action] Read Genre";
class ReadGenre {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_GENRE;
    }
}
exports.ReadGenre = ReadGenre;
exports.WRITE_GENRE = "[Write action] Write Genre";
class WriteGenre {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_GENRE;
    }
}
exports.WriteGenre = WriteGenre;
exports.LIST_GENRE = "[List action] List Genre";
class ListGenre {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LIST_GENRE;
    }
}
exports.ListGenre = ListGenre;
exports.SUB_GENRE = "[Sub action] Sub Genre";
class SubGenre {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SUB_GENRE;
    }
}
exports.SubGenre = SubGenre;
//# sourceMappingURL=genre.action.js.map