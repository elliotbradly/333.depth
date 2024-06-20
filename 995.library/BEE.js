"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.list = void 0;
const library_unit_1 = require("./00.library.unit/library.unit");
const ollama_unit_1 = require("./01.ollama.unit/ollama.unit");
const openai_unit_1 = require("./02.openai.unit/openai.unit");
const prompt_unit_1 = require("./12.prompt.unit/prompt.unit");
const author_unit_1 = require("./13.author.unit/author.unit");
const genre_unit_1 = require("./14.genre.unit/genre.unit");
const setting_unit_1 = require("./15.setting.unit/setting.unit");
const collect_unit_1 = require("./97.collect.unit/collect.unit");
const menu_unit_1 = require("./98.menu.unit/menu.unit");
const bus_unit_1 = require("./99.bus.unit/bus.unit");
const library_model_1 = require("./00.library.unit/library.model");
const ollama_model_1 = require("./01.ollama.unit/ollama.model");
const openai_model_1 = require("./02.openai.unit/openai.model");
const prompt_model_1 = require("./12.prompt.unit/prompt.model");
const author_model_1 = require("./13.author.unit/author.model");
const genre_model_1 = require("./14.genre.unit/genre.model");
const setting_model_1 = require("./15.setting.unit/setting.model");
const collect_model_1 = require("./97.collect.unit/collect.model");
const menu_model_1 = require("./98.menu.unit/menu.model");
const bus_model_1 = require("./99.bus.unit/bus.model");
exports.list = [library_unit_1.default, ollama_unit_1.default, openai_unit_1.default, prompt_unit_1.default, author_unit_1.default, genre_unit_1.default, setting_unit_1.default, collect_unit_1.default, menu_unit_1.default, bus_unit_1.default];
const reduceFromLibrary = require("./00.library.unit/library.reduce");
const reduceFromOllama = require("./01.ollama.unit/ollama.reduce");
const reduceFromOpenai = require("./02.openai.unit/openai.reduce");
const reduceFromPrompt = require("./12.prompt.unit/prompt.reduce");
const reduceFromAuthor = require("./13.author.unit/author.reduce");
const reduceFromGenre = require("./14.genre.unit/genre.reduce");
const reduceFromSetting = require("./15.setting.unit/setting.reduce");
const reduceFromCollect = require("./97.collect.unit/collect.reduce");
const reduceFromMenu = require("./98.menu.unit/menu.reduce");
const reduceFromBus = require("./99.bus.unit/bus.reduce");
exports.reducer = {
    library: reduceFromLibrary.reducer,
    ollama: reduceFromOllama.reducer,
    openai: reduceFromOpenai.reducer,
    prompt: reduceFromPrompt.reducer,
    author: reduceFromAuthor.reducer,
    genre: reduceFromGenre.reducer,
    setting: reduceFromSetting.reducer,
    collect: reduceFromCollect.reducer,
    menu: reduceFromMenu.reducer,
    bus: reduceFromBus.reducer,
};
class UnitData {
    constructor() {
        this.library = new library_model_1.LibraryModel();
        this.ollama = new ollama_model_1.OllamaModel();
        this.openai = new openai_model_1.OpenaiModel();
        this.prompt = new prompt_model_1.PromptModel();
        this.author = new author_model_1.AuthorModel();
        this.genre = new genre_model_1.GenreModel();
        this.setting = new setting_model_1.SettingModel();
        this.collect = new collect_model_1.CollectModel();
        this.menu = new menu_model_1.MenuModel();
        this.bus = new bus_model_1.BusModel();
    }
}
exports.default = UnitData;
//# sourceMappingURL=BEE.js.map