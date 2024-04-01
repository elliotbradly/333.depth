"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./supabase.action");
const supabase_model_1 = require("./supabase.model");
const Buzz = require("./supabase.buzzer");
function reducer(model = new supabase_model_1.SupabaseModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_SUPABASE:
            return Buzz.updateSupabase(clone(model), act.bale, state);
        case Act.INIT_SUPABASE:
            return Buzz.initSupabase(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=supabase.reduce.js.map