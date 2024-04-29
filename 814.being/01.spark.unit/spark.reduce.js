"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./spark.action");
const spark_model_1 = require("./spark.model");
const Buzz = require("./spark.buzzer");
function reducer(model = new spark_model_1.SparkModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_SPARK:
            return Buzz.updateSpark(clone(model), act.bale, state);
        case Act.INIT_SPARK:
            return Buzz.initSpark(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=spark.reduce.js.map