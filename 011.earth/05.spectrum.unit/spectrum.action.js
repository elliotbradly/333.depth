"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinSpectrum = exports.MIN_SPECTRUM = exports.UpdateSpectrum = exports.UPDATE_SPECTRUM = exports.InitSpectrum = exports.INIT_SPECTRUM = void 0;
// Spectrum actions
exports.INIT_SPECTRUM = "[Spectrum action] Init Spectrum";
class InitSpectrum {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_SPECTRUM;
    }
}
exports.InitSpectrum = InitSpectrum;
exports.UPDATE_SPECTRUM = "[Spectrum action] Update Spectrum";
class UpdateSpectrum {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_SPECTRUM;
    }
}
exports.UpdateSpectrum = UpdateSpectrum;
exports.MIN_SPECTRUM = "[Min action] Min Spectrum";
class MinSpectrum {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.MIN_SPECTRUM;
    }
}
exports.MinSpectrum = MinSpectrum;
//# sourceMappingURL=spectrum.action.js.map