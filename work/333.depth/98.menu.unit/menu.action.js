"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintMenu = exports.PRINT_MENU = exports.TextMenu = exports.TEXT_MENU = exports.ContainerMenu = exports.CONTAINER_MENU = exports.SocketMenu = exports.SOCKET_MENU = exports.RealityMenu = exports.REALITY_MENU = exports.CloseMenu = exports.CLOSE_MENU = exports.TestMenu = exports.TEST_MENU = exports.UpdateMenu = exports.UPDATE_MENU = exports.InitMenu = exports.INIT_MENU = void 0;
exports.INIT_MENU = "[Menu action] Init Menu";
class InitMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_MENU;
    }
}
exports.InitMenu = InitMenu;
exports.UPDATE_MENU = "[Menu action] Update Menu";
class UpdateMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_MENU;
    }
}
exports.UpdateMenu = UpdateMenu;
exports.TEST_MENU = "[Menu action] Test Menu";
class TestMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.TEST_MENU;
    }
}
exports.TestMenu = TestMenu;
exports.CLOSE_MENU = "[Menu action] Close Menu";
class CloseMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CLOSE_MENU;
    }
}
exports.CloseMenu = CloseMenu;
exports.REALITY_MENU = "[Menu action] Reality Menu";
class RealityMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REALITY_MENU;
    }
}
exports.RealityMenu = RealityMenu;
exports.SOCKET_MENU = "[Menu action] Socket Menu";
class SocketMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SOCKET_MENU;
    }
}
exports.SocketMenu = SocketMenu;
exports.CONTAINER_MENU = "[Visage action] Container Menu";
class ContainerMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CONTAINER_MENU;
    }
}
exports.ContainerMenu = ContainerMenu;
exports.TEXT_MENU = "[Visage action] Text Menu";
class TextMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.TEXT_MENU;
    }
}
exports.TextMenu = TextMenu;
exports.PRINT_MENU = "[Visage action] Print Menu";
class PrintMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PRINT_MENU;
    }
}
exports.PrintMenu = PrintMenu;
//# sourceMappingURL=menu.action.js.map