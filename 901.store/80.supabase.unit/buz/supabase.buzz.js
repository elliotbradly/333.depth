"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSupabase = exports.initSupabase = void 0;
var bit, val, idx, dex, lst, dat;
var supabase;
const initSupabase = (cpy, bal, ste) => {
    if (supabase != null) {
        bal.slv({ intBit: { idx: "already-init-supabase" } });
        return cpy;
    }
    dat = bal.dat;
    supabase = (0, supabase_js_1.createClient)(dat.url, dat.key);
    bal.slv({ intBit: { idx: "init-supabase" } });
    return cpy;
};
exports.initSupabase = initSupabase;
const updateSupabase = async (cpy, bal, ste) => {
    if (supabase == null) {
        bal.slv({ supBit: { idx: "update-supabase-error", src: 'supabase init None' } });
        return;
    }
    //var data: { Players, error } = await supabase.from('Players').select('*')
    const { data, error } = await supabase
        .from('Players')
        .upsert([
        { username: 'katharsis-gale', idx: 113 },
    ])
        .select();
    bal.slv({ supBit: { idx: "update-supabase", dat: data } });
    return cpy;
};
exports.updateSupabase = updateSupabase;
const supabase_js_1 = require("@supabase/supabase-js");
//# sourceMappingURL=supabase.buzz.js.map