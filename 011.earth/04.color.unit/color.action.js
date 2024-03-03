"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListColor = exports.LIST_COLOR = exports.ReadColor = exports.READ_COLOR = exports.DegreeColor = exports.DEGREE_COLOR = exports.MatchColor = exports.MATCH_COLOR = exports.SelectColor = exports.SELECT_COLOR = exports.FetchColor = exports.FETCH_COLOR = exports.UpdateColor = exports.UPDATE_COLOR = exports.InitColor = exports.INIT_COLOR = void 0;
// Color actions
exports.INIT_COLOR = "[Color action] Init Color";
class InitColor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_COLOR;
    }
}
exports.InitColor = InitColor;
exports.UPDATE_COLOR = "[Color action] Update Color";
class UpdateColor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_COLOR;
    }
}
exports.UpdateColor = UpdateColor;
exports.FETCH_COLOR = "[Color action] Fetch Color";
class FetchColor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.FETCH_COLOR;
    }
}
exports.FetchColor = FetchColor;
exports.SELECT_COLOR = "[Color action] Select Color";
class SelectColor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SELECT_COLOR;
    }
}
exports.SelectColor = SelectColor;
exports.MATCH_COLOR = "[Color action] Match Color";
class MatchColor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.MATCH_COLOR;
    }
}
exports.MatchColor = MatchColor;
exports.DEGREE_COLOR = "[Color action] Degree Color";
class DegreeColor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DEGREE_COLOR;
    }
}
exports.DegreeColor = DegreeColor;
exports.READ_COLOR = "[Color action] Read Color";
class ReadColor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_COLOR;
    }
}
exports.ReadColor = ReadColor;
exports.LIST_COLOR = "[List action] List Color";
class ListColor {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LIST_COLOR;
    }
}
exports.ListColor = ListColor;
//# sourceMappingURL=color.action.js.map