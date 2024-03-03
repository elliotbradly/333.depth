"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./color.action");
const color_model_1 = require("./color.model");
const Buzz = require("./color.buzzer");
function reducer(model = new color_model_1.ColorModel(), act, state) {
    switch (act.type) {
        case Act.MATCH_COLOR:
            return Buzz.matchColor(clone(model), act.bale, state);
        case Act.READ_COLOR:
            return Buzz.readColor(clone(model), act.bale, state);
        case Act.SELECT_COLOR:
            return Buzz.selectColor(clone(model), act.bale, state);
        case Act.DEGREE_COLOR:
            return Buzz.degreeColor(clone(model), act.bale, state);
        case Act.FETCH_COLOR:
            return Buzz.fetchColor(clone(model), act.bale, state);
        case Act.UPDATE_COLOR:
            return Buzz.updateColor(clone(model), act.bale, state);
        case Act.INIT_COLOR:
            return Buzz.initColor(clone(model), act.bale, state);
        case Act.LIST_COLOR:
            return Buzz.listColor(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=color.reduce.js.map