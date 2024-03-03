"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./spectrum.action");
const spectrum_model_1 = require("./spectrum.model");
const Buzz = require("./spectrum.buzzer");
function reducer(model = new spectrum_model_1.SpectrumModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_SPECTRUM:
            return Buzz.updateSpectrum(clone(model), act.bale, state);
        case Act.INIT_SPECTRUM:
            return Buzz.initSpectrum(clone(model), act.bale, state);
        case Act.MIN_SPECTRUM:
            return Buzz.minSpectrum(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=spectrum.reduce.js.map