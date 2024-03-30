"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.list = void 0;
const store_unit_1 = require("./00.store.unit/store.unit");
const supabase_unit_1 = require("./01.supabase.unit/supabase.unit");
const socket_unit_1 = require("./96.socket.unit/socket.unit");
const collect_unit_1 = require("./97.collect.unit/collect.unit");
const menu_unit_1 = require("./98.menu.unit/menu.unit");
const bus_unit_1 = require("./99.bus.unit/bus.unit");
const store_model_1 = require("./00.store.unit/store.model");
const supabase_model_1 = require("./01.supabase.unit/supabase.model");
const socket_model_1 = require("./96.socket.unit/socket.model");
const collect_model_1 = require("./97.collect.unit/collect.model");
const menu_model_1 = require("./98.menu.unit/menu.model");
const bus_model_1 = require("./99.bus.unit/bus.model");
exports.list = [store_unit_1.default, supabase_unit_1.default, socket_unit_1.default, collect_unit_1.default, menu_unit_1.default, bus_unit_1.default];
const reduceFromStore = require("./00.store.unit/store.reduce");
const reduceFromSupabase = require("./01.supabase.unit/supabase.reduce");
const reduceFromSocket = require("./96.socket.unit/socket.reduce");
const reduceFromCollect = require("./97.collect.unit/collect.reduce");
const reduceFromMenu = require("./98.menu.unit/menu.reduce");
const reduceFromBus = require("./99.bus.unit/bus.reduce");
exports.reducer = {
    store: reduceFromStore.reducer,
    supabase: reduceFromSupabase.reducer,
    socket: reduceFromSocket.reducer,
    collect: reduceFromCollect.reducer,
    menu: reduceFromMenu.reducer,
    bus: reduceFromBus.reducer,
};
class UnitData {
    constructor() {
        this.store = new store_model_1.StoreModel();
        this.supabase = new supabase_model_1.SupabaseModel();
        this.socket = new socket_model_1.SocketModel();
        this.collect = new collect_model_1.CollectModel();
        this.menu = new menu_model_1.MenuModel();
        this.bus = new bus_model_1.BusModel();
    }
}
exports.default = UnitData;
//# sourceMappingURL=BEE.js.map