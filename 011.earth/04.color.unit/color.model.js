"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorModel = void 0;
class ColorModel {
    constructor() {
        this.idx = '006.color';
        this.seed = 92125;
        this.clrSrc = "./data/000.color.txt";
        this.clrDat = "./data/000.color.json";
        this.clrDatNom = "./data/000.color.nom.json";
        this.rskDat = "./data/000.risk.txt";
        this.clrRoot = '../color/';
        this.clrRootMax = this.clrRoot + 'max/';
        this.degreeClrLog = './data/log/degree-color-history';
        this.selectClrLog = './data/log/select-color-history';
        //colorBitList: ColorBit[] = [];
        //colorBits: any = {};
    }
}
exports.ColorModel = ColorModel;
//# sourceMappingURL=color.model.js.map