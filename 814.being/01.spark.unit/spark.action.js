"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSpark = exports.UPDATE_SPARK = exports.InitSpark = exports.INIT_SPARK = void 0;
// Spark actions
exports.INIT_SPARK = "[Spark action] Init Spark";
class InitSpark {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_SPARK;
    }
}
exports.InitSpark = InitSpark;
exports.UPDATE_SPARK = "[Spark action] Update Spark";
class UpdateSpark {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_SPARK;
    }
}
exports.UpdateSpark = UpdateSpark;
//# sourceMappingURL=spark.action.js.map