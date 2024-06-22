"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpark = exports.CREATE_SPARK = exports.DeleteSpark = exports.DELETE_SPARK = exports.RemoveSpark = exports.REMOVE_SPARK = exports.WriteSpark = exports.WRITE_SPARK = exports.ReadSpark = exports.READ_SPARK = exports.UpdateSpark = exports.UPDATE_SPARK = exports.InitSpark = exports.INIT_SPARK = void 0;
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
exports.READ_SPARK = "[Read action] Read Spark";
class ReadSpark {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_SPARK;
    }
}
exports.ReadSpark = ReadSpark;
exports.WRITE_SPARK = "[Write action] Write Spark";
class WriteSpark {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_SPARK;
    }
}
exports.WriteSpark = WriteSpark;
exports.REMOVE_SPARK = "[Remove action] Remove Spark";
class RemoveSpark {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_SPARK;
    }
}
exports.RemoveSpark = RemoveSpark;
exports.DELETE_SPARK = "[Delete action] Delete Spark";
class DeleteSpark {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_SPARK;
    }
}
exports.DeleteSpark = DeleteSpark;
exports.CREATE_SPARK = "[Create action] Create Spark";
class CreateSpark {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_SPARK;
    }
}
exports.CreateSpark = CreateSpark;
//# sourceMappingURL=spark.action.js.map