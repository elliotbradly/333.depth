"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.list = void 0;
const being_unit_1 = require("./00.being.unit/being.unit");
const spark_unit_1 = require("./01.spark.unit/spark.unit");
const player_unit_1 = require("./10.player.unit/player.unit");
const collect_unit_1 = require("./97.collect.unit/collect.unit");
const menu_unit_1 = require("./98.menu.unit/menu.unit");
const bus_unit_1 = require("./99.bus.unit/bus.unit");
const being_model_1 = require("./00.being.unit/being.model");
const spark_model_1 = require("./01.spark.unit/spark.model");
const player_model_1 = require("./10.player.unit/player.model");
const collect_model_1 = require("./97.collect.unit/collect.model");
const menu_model_1 = require("./98.menu.unit/menu.model");
const bus_model_1 = require("./99.bus.unit/bus.model");
exports.list = [being_unit_1.default, spark_unit_1.default, player_unit_1.default, collect_unit_1.default, menu_unit_1.default, bus_unit_1.default];
const reduceFromBeing = require("./00.being.unit/being.reduce");
const reduceFromSpark = require("./01.spark.unit/spark.reduce");
const reduceFromPlayer = require("./10.player.unit/player.reduce");
const reduceFromCollect = require("./97.collect.unit/collect.reduce");
const reduceFromMenu = require("./98.menu.unit/menu.reduce");
const reduceFromBus = require("./99.bus.unit/bus.reduce");
exports.reducer = {
    being: reduceFromBeing.reducer,
    spark: reduceFromSpark.reducer,
    player: reduceFromPlayer.reducer,
    collect: reduceFromCollect.reducer,
    menu: reduceFromMenu.reducer,
    bus: reduceFromBus.reducer,
};
class UnitData {
    constructor() {
        this.being = new being_model_1.BeingModel();
        this.spark = new spark_model_1.SparkModel();
        this.player = new player_model_1.PlayerModel();
        this.collect = new collect_model_1.CollectModel();
        this.menu = new menu_model_1.MenuModel();
        this.bus = new bus_model_1.BusModel();
    }
}
exports.default = UnitData;
//# sourceMappingURL=BEE.js.map