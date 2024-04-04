"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlayer = exports.CREATE_PLAYER = exports.DeletePlayer = exports.DELETE_PLAYER = exports.RemovePlayer = exports.REMOVE_PLAYER = exports.WritePlayer = exports.WRITE_PLAYER = exports.ReadPlayer = exports.READ_PLAYER = exports.UpdatePlayer = exports.UPDATE_PLAYER = exports.InitPlayer = exports.INIT_PLAYER = void 0;
// Player actions
exports.INIT_PLAYER = "[Player action] Init Player";
class InitPlayer {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_PLAYER;
    }
}
exports.InitPlayer = InitPlayer;
exports.UPDATE_PLAYER = "[Player action] Update Player";
class UpdatePlayer {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_PLAYER;
    }
}
exports.UpdatePlayer = UpdatePlayer;
exports.READ_PLAYER = "[Read action] Read Player";
class ReadPlayer {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_PLAYER;
    }
}
exports.ReadPlayer = ReadPlayer;
exports.WRITE_PLAYER = "[Write action] Write Player";
class WritePlayer {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_PLAYER;
    }
}
exports.WritePlayer = WritePlayer;
exports.REMOVE_PLAYER = "[Remove action] Remove Player";
class RemovePlayer {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_PLAYER;
    }
}
exports.RemovePlayer = RemovePlayer;
exports.DELETE_PLAYER = "[Delete action] Delete Player";
class DeletePlayer {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_PLAYER;
    }
}
exports.DeletePlayer = DeletePlayer;
exports.CREATE_PLAYER = "[Create action] Create Player";
class CreatePlayer {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_PLAYER;
    }
}
exports.CreatePlayer = CreatePlayer;
//# sourceMappingURL=player.action.js.map