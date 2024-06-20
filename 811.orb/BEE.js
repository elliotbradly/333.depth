"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.list = void 0;
const orb_unit_1 = require("./00.orb.unit/orb.unit");
const emotion_unit_1 = require("./01.emotion.unit/emotion.unit");
const fate_unit_1 = require("./02.fate.unit/fate.unit");
const clock_unit_1 = require("./03.clock.unit/clock.unit");
const risk_unit_1 = require("./06.risk.unit/risk.unit");
const weather_unit_1 = require("./07.weather.unit/weather.unit");
const plot_unit_1 = require("./08.plot.unit/plot.unit");
const crown_unit_1 = require("./09.crown.unit/crown.unit");
const axis_unit_1 = require("./10.axis.unit/axis.unit");
const ambit_unit_1 = require("./11.ambit.unit/ambit.unit");
const arena_unit_1 = require("./12.arena.unit/arena.unit");
const collect_unit_1 = require("./97.collect.unit/collect.unit");
const menu_unit_1 = require("./98.menu.unit/menu.unit");
const bus_unit_1 = require("./99.bus.unit/bus.unit");
const orb_model_1 = require("./00.orb.unit/orb.model");
const emotion_model_1 = require("./01.emotion.unit/emotion.model");
const fate_model_1 = require("./02.fate.unit/fate.model");
const clock_model_1 = require("./03.clock.unit/clock.model");
const risk_model_1 = require("./06.risk.unit/risk.model");
const weather_model_1 = require("./07.weather.unit/weather.model");
const plot_model_1 = require("./08.plot.unit/plot.model");
const crown_model_1 = require("./09.crown.unit/crown.model");
const axis_model_1 = require("./10.axis.unit/axis.model");
const ambit_model_1 = require("./11.ambit.unit/ambit.model");
const arena_model_1 = require("./12.arena.unit/arena.model");
const collect_model_1 = require("./97.collect.unit/collect.model");
const menu_model_1 = require("./98.menu.unit/menu.model");
const bus_model_1 = require("./99.bus.unit/bus.model");
exports.list = [orb_unit_1.default, emotion_unit_1.default, fate_unit_1.default, clock_unit_1.default, risk_unit_1.default, weather_unit_1.default, plot_unit_1.default, crown_unit_1.default, axis_unit_1.default, ambit_unit_1.default, arena_unit_1.default, collect_unit_1.default, menu_unit_1.default, bus_unit_1.default];
const reduceFromOrb = require("./00.orb.unit/orb.reduce");
const reduceFromEmotion = require("./01.emotion.unit/emotion.reduce");
const reduceFromFate = require("./02.fate.unit/fate.reduce");
const reduceFromClock = require("./03.clock.unit/clock.reduce");
const reduceFromRisk = require("./06.risk.unit/risk.reduce");
const reduceFromWeather = require("./07.weather.unit/weather.reduce");
const reduceFromPlot = require("./08.plot.unit/plot.reduce");
const reduceFromCrown = require("./09.crown.unit/crown.reduce");
const reduceFromAxis = require("./10.axis.unit/axis.reduce");
const reduceFromAmbit = require("./11.ambit.unit/ambit.reduce");
const reduceFromArena = require("./12.arena.unit/arena.reduce");
const reduceFromCollect = require("./97.collect.unit/collect.reduce");
const reduceFromMenu = require("./98.menu.unit/menu.reduce");
const reduceFromBus = require("./99.bus.unit/bus.reduce");
exports.reducer = {
    orb: reduceFromOrb.reducer,
    emotion: reduceFromEmotion.reducer,
    fate: reduceFromFate.reducer,
    clock: reduceFromClock.reducer,
    risk: reduceFromRisk.reducer,
    weather: reduceFromWeather.reducer,
    plot: reduceFromPlot.reducer,
    crown: reduceFromCrown.reducer,
    axis: reduceFromAxis.reducer,
    ambit: reduceFromAmbit.reducer,
    arena: reduceFromArena.reducer,
    collect: reduceFromCollect.reducer,
    menu: reduceFromMenu.reducer,
    bus: reduceFromBus.reducer,
};
class UnitData {
    constructor() {
        this.orb = new orb_model_1.OrbModel();
        this.emotion = new emotion_model_1.EmotionModel();
        this.fate = new fate_model_1.FateModel();
        this.clock = new clock_model_1.ClockModel();
        this.risk = new risk_model_1.RiskModel();
        this.weather = new weather_model_1.WeatherModel();
        this.plot = new plot_model_1.PlotModel();
        this.crown = new crown_model_1.CrownModel();
        this.axis = new axis_model_1.AxisModel();
        this.ambit = new ambit_model_1.AmbitModel();
        this.arena = new arena_model_1.ArenaModel();
        this.collect = new collect_model_1.CollectModel();
        this.menu = new menu_model_1.MenuModel();
        this.bus = new bus_model_1.BusModel();
    }
}
exports.default = UnitData;
//# sourceMappingURL=BEE.js.map