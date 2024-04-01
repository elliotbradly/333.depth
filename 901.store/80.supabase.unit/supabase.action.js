"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSupabase = exports.UPDATE_SUPABASE = exports.InitSupabase = exports.INIT_SUPABASE = void 0;
// Supabase actions
exports.INIT_SUPABASE = "[Supabase action] Init Supabase";
class InitSupabase {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_SUPABASE;
    }
}
exports.InitSupabase = InitSupabase;
exports.UPDATE_SUPABASE = "[Supabase action] Update Supabase";
class UpdateSupabase {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_SUPABASE;
    }
}
exports.UpdateSupabase = UpdateSupabase;
//# sourceMappingURL=supabase.action.js.map