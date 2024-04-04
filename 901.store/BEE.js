"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.list = void 0;
const store_unit_1 = require("./00.store.unit/store.unit");
const player_unit_1 = require("./10.player.unit/player.unit");
const supabase_unit_1 = require("./80.supabase.unit/supabase.unit");
const collect_unit_1 = require("./97.collect.unit/collect.unit");
const menu_unit_1 = require("./98.menu.unit/menu.unit");
const bus_unit_1 = require("./99.bus.unit/bus.unit");
const store_model_1 = require("./00.store.unit/store.model");
const player_model_1 = require("./10.player.unit/player.model");
const supabase_model_1 = require("./80.supabase.unit/supabase.model");
const collect_model_1 = require("./97.collect.unit/collect.model");
const menu_model_1 = require("./98.menu.unit/menu.model");
const bus_model_1 = require("./99.bus.unit/bus.model");
exports.list = [store_unit_1.default, player_unit_1.default, supabase_unit_1.default, collect_unit_1.default, menu_unit_1.default, bus_unit_1.default];
const reduceFromStore = require("./00.store.unit/store.reduce");
const reduceFromPlayer = require("./10.player.unit/player.reduce");
const reduceFromSupabase = require("./80.supabase.unit/supabase.reduce");
const reduceFromCollect = require("./97.collect.unit/collect.reduce");
const reduceFromMenu = require("./98.menu.unit/menu.reduce");
const reduceFromBus = require("./99.bus.unit/bus.reduce");
exports.reducer = {
    store: reduceFromStore.reducer,
    player: reduceFromPlayer.reducer,
    supabase: reduceFromSupabase.reducer,
    collect: reduceFromCollect.reducer,
    menu: reduceFromMenu.reducer,
    bus: reduceFromBus.reducer,
};
class UnitData {
    constructor() {
        this.store = new store_model_1.StoreModel();
        this.player = new player_model_1.PlayerModel();
        this.supabase = new supabase_model_1.SupabaseModel();
        this.collect = new collect_model_1.CollectModel();
        this.menu = new menu_model_1.MenuModel();
        this.bus = new bus_model_1.BusModel();
    }
}
exports.default = UnitData;
//# sourceMappingURL=BEE.js.map