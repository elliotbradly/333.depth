"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minSpectrum = exports.updateSpectrum = exports.initSpectrum = void 0;
var bit, lst;
const initSpectrum = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.initSpectrum = initSpectrum;
const updateSpectrum = (cpy, bal, ste) => {
    var clrMod = ste.value.color;
    var list = FS.readFileSync(clrMod.clrSrc).toString().split("\n");
    var colors = [];
    list.forEach((a) => {
        if (a.includes(":") == false)
            return;
        var idx = S(a).slugify().s;
        colors.push(idx);
    });
    var out = [];
    FS.ensureDirSync(clrMod.clrRoot);
    FS.ensureDirSync(clrMod.clrRootMax);
    var colorNameData = {};
    colors.forEach((a, b) => {
        var sub = a.split('-')[0];
        var dom = a.split('-')[1];
        var letterA = sub[0].toUpperCase();
        var letterB = dom[0].toUpperCase();
        var idx = letterA + letterB;
        var dex = String(b).padStart(2, "0");
        var loc = dex + '.' + idx;
        out.push(loc + ':');
        FS.ensureDirSync(clrMod.clrRootMax + loc + '.' + a);
        var swatches = FS.readdirSync(clrMod.clrRootMax + loc + '.' + a);
        var swatchList = [];
        swatches.forEach((a) => {
            swatchList.push(a.split('.')[0]);
        });
        colorNameData[loc + '.' + a] = swatchList;
    });
    var bale = { clrBit: { idx: "update-color", lst: colors } };
    FS.writeJsonSync(clrMod.clrDat, bale);
    FS.writeJsonSync(clrMod.clrDatNom, colorNameData);
    FS.writeFileSync(clrMod.rskDat, out.join('\n'));
    console.log("writing... " + clrMod.clrDat);
    setTimeout(() => { if (bal.slv != null)
        bal.slv(bale); }, 1333);
    return cpy;
};
exports.updateSpectrum = updateSpectrum;
const minSpectrum = (cpy, bal, ste) => {
    lst = [];
    var clrMod = ste.value.color;
    clrMod.clrLst.forEach((a) => {
        var alpha = a.split('-')[0][0];
        var beta = a.split('-')[1][0];
        lst.push(alpha + beta);
    });
    if (bal.slv != null)
        bal.slv({ spkBit: { idx: "min-spectrum", lst } });
    return cpy;
};
exports.minSpectrum = minSpectrum;
const FS = require("fs-extra");
const S = require("string");
//# sourceMappingURL=spectrum.buzz.js.map