"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerMenu = exports.CONTAINER_MENU = exports.SupabaseMenu = exports.SUPABASE_MENU = exports.CloseMenu = exports.CLOSE_MENU = exports.TestMenu = exports.TEST_MENU = exports.PrintMenu = exports.PRINT_MENU = exports.UpdateMenu = exports.UPDATE_MENU = exports.InitMenu = exports.INIT_MENU = void 0;
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
exports.PRINT_MENU = "[Menu action] Print Menu";
class PrintMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PRINT_MENU;
    }
}
exports.PrintMenu = PrintMenu;
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
exports.SUPABASE_MENU = "[Menu action] Supabase Menu";
class SupabaseMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SUPABASE_MENU;
    }
}
exports.SupabaseMenu = SupabaseMenu;
exports.CONTAINER_MENU = "[Visage action] Container Menu";
class ContainerMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CONTAINER_MENU;
    }
}
exports.ContainerMenu = ContainerMenu;
//# sourceMappingURL=menu.action.js.map