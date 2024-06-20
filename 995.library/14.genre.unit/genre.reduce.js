"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./genre.action");
const genre_model_1 = require("./genre.model");
const Buzz = require("./genre.buzzer");
function reducer(model = new genre_model_1.GenreModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_GENRE:
            return Buzz.updateGenre(clone(model), act.bale, state);
        case Act.INIT_GENRE:
            return Buzz.initGenre(clone(model), act.bale, state);
        case Act.READ_GENRE:
            return Buzz.readGenre(clone(model), act.bale, state);
        case Act.WRITE_GENRE:
            return Buzz.writeGenre(clone(model), act.bale, state);
        case Act.LIST_GENRE:
            return Buzz.listGenre(clone(model), act.bale, state);
        case Act.SUB_GENRE:
            return Buzz.subGenre(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=genre.reduce.js.map