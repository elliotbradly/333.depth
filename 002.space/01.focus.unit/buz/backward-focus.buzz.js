"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backwardFocus = void 0;
const ActFoc = require("../focus.action");
var bit, val, idx, dex, lst, dat;
const backwardFocus = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActFoc.READ_FOCUS, { idx: bal.idx });
    var spot = bit.focBit.dat;
    var x = spot.x;
    var y = spot.y;
    var face = spot.face;
    var bonds;
    //bit = await ste.hunt(ActFoc.CENTER_FOCUS, {idx:spot.idx, dat: spot } )
    if (spot.face == DIRECTION.WEST) {
        bit = await ste.hunt(ActFoc.BOND_FOCUS, { idx: spot.idx, dat: spot });
        bonds = bit.focBit.dat;
        var bond = bonds[DIRECTION.WEST];
        if (bond != null) {
            x = bond.x;
            y = bond.y;
        }
    }
    if (spot.face == DIRECTION.EAST)
        face = DIRECTION.WEST;
    if (spot.face == DIRECTION.NORTH_WEST)
        face = DIRECTION.WEST;
    if (spot.face == DIRECTION.NORTH_EAST)
        face = DIRECTION.NORTH_WEST;
    if (spot.face == DIRECTION.SOUTH_WEST)
        face = DIRECTION.WEST;
    if (spot.face == DIRECTION.SOUTH_EAST)
        face = DIRECTION.SOUTH_WEST;
    //patch(ste, ActFoc.LIST_VISON_FOCUS, foci);
    //locateHex(ste, foci);
    bit = await ste.hunt(ActFoc.WRITE_FOCUS, { idx: bal.idx, dat: { x, y, bonds, face } });
    if (bal.slv != null)
        bal.slv({ focBit: { idx: "backward-focus", dat: spot } });
};
exports.backwardFocus = backwardFocus;
const DIRECTION = require("../../val/direction");
//# sourceMappingURL=backward-focus.buzz.js.map