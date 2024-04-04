"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReloadDepth = exports.RELOAD_DEPTH = exports.CommitDepth = exports.COMMIT_DEPTH = exports.TestDepth = exports.TEST_DEPTH = exports.OpenDepth = exports.OPEN_DEPTH = exports.UpdateDepth = exports.UPDATE_DEPTH = exports.InitDepth = exports.INIT_DEPTH = void 0;
// Depth actions
exports.INIT_DEPTH = "[Depth action] Init Depth";
class InitDepth {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_DEPTH;
    }
}
exports.InitDepth = InitDepth;
exports.UPDATE_DEPTH = "[Depth action] Update Depth";
class UpdateDepth {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_DEPTH;
    }
}
exports.UpdateDepth = UpdateDepth;
exports.OPEN_DEPTH = "[Depth action] Open Depth";
class OpenDepth {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.OPEN_DEPTH;
    }
}
exports.OpenDepth = OpenDepth;
exports.TEST_DEPTH = "[Test action] Test Depth";
class TestDepth {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.TEST_DEPTH;
    }
}
exports.TestDepth = TestDepth;
exports.COMMIT_DEPTH = "[Commit action] Commit Depth";
class CommitDepth {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.COMMIT_DEPTH;
    }
}
exports.CommitDepth = CommitDepth;
exports.RELOAD_DEPTH = "[Reload action] Reload Depth";
class ReloadDepth {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.RELOAD_DEPTH;
    }
}
exports.ReloadDepth = ReloadDepth;
//# sourceMappingURL=depth.action.js.map