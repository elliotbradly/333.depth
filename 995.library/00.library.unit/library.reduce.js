"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./library.action");
const library_model_1 = require("./library.model");
const Buzz = require("./library.buzzer");
function reducer(model = new library_model_1.LibraryModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_LIBRARY:
            return Buzz.updateLibrary(clone(model), act.bale, state);
        case Act.INIT_LIBRARY:
            return Buzz.initLibrary(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=library.reduce.js.map