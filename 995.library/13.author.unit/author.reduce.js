"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./author.action");
const author_model_1 = require("./author.model");
const Buzz = require("./author.buzzer");
function reducer(model = new author_model_1.AuthorModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_AUTHOR:
            return Buzz.updateAuthor(clone(model), act.bale, state);
        case Act.INIT_AUTHOR:
            return Buzz.initAuthor(clone(model), act.bale, state);
        case Act.READ_AUTHOR:
            return Buzz.readAuthor(clone(model), act.bale, state);
        case Act.WRITE_AUTHOR:
            return Buzz.writeAuthor(clone(model), act.bale, state);
        case Act.LIST_AUTHOR:
            return Buzz.listAuthor(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=author.reduce.js.map