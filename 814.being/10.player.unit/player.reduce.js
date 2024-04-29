"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./player.action");
const player_model_1 = require("./player.model");
const Buzz = require("./player.buzzer");
function reducer(model = new player_model_1.PlayerModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_PLAYER:
            return Buzz.updatePlayer(clone(model), act.bale, state);
        case Act.INIT_PLAYER:
            return Buzz.initPlayer(clone(model), act.bale, state);
        case Act.READ_PLAYER:
            return Buzz.readPlayer(clone(model), act.bale, state);
        case Act.WRITE_PLAYER:
            return Buzz.writePlayer(clone(model), act.bale, state);
        case Act.REMOVE_PLAYER:
            return Buzz.removePlayer(clone(model), act.bale, state);
        case Act.DELETE_PLAYER:
            return Buzz.deletePlayer(clone(model), act.bale, state);
        case Act.CREATE_PLAYER:
            return Buzz.createPlayer(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=player.reduce.js.map