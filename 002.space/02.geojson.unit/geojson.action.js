"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexGeojson = exports.INDEX_GEOJSON = exports.LoadGeojson = exports.LOAD_GEOJSON = exports.UpdateGeojson = exports.UPDATE_GEOJSON = exports.InitGeojson = exports.INIT_GEOJSON = void 0;
exports.INIT_GEOJSON = "[Geojson action] Init Geojson";
class InitGeojson {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_GEOJSON;
    }
}
exports.InitGeojson = InitGeojson;
exports.UPDATE_GEOJSON = "[Geojson action] Update Geojson";
class UpdateGeojson {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_GEOJSON;
    }
}
exports.UpdateGeojson = UpdateGeojson;
exports.LOAD_GEOJSON = "[Load action] Load Geojson";
class LoadGeojson {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LOAD_GEOJSON;
    }
}
exports.LoadGeojson = LoadGeojson;
exports.INDEX_GEOJSON = "[Index action] Index Geojson";
class IndexGeojson {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INDEX_GEOJSON;
    }
}
exports.IndexGeojson = IndexGeojson;
//# sourceMappingURL=geojson.action.js.map