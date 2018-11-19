"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actionHandlers_1 = require("./actionHandlers");
const router_1 = require("./router");
const UPDATE_CELL = 'GRID::UPDATE_CELL';
const FOCUS_CELL = 'GRID::FOCUS_CELL';
const initialState = {
    activeSheet: '',
    sheets: ['employees', 'cars'],
    data: {
        employees: {
            cursor: { col: '', row: '' },
            rows: { 1: { a: 'Kalle', b: '50' }, 2: { a: 'Jukka', b: '6' } },
            cols: { a: { 1: 'Kalle', 2: 'Jukka' }, b: { 1: '50', 2: '6' } }
        },
        cars: {
            cursor: { col: '', row: '' },
            rows: { 1: { a: 'Mersu', b: '600' }, 2: { a: 'Honda', b: 'Civic' } },
            cols: { a: { 1: 'Mersu', 2: 'Honda' }, b: { 1: '600', 2: 'Civic' } }
        }
    }
};
function reducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case UPDATE_CELL: return actionHandlers_1.onUpdateCell(state, action.payload);
        case FOCUS_CELL: return actionHandlers_1.onFocusCell(state, action.payload);
        case router_1.LOCATION_CHANGE: return actionHandlers_1.onChangeSheet(state, action.payload);
        default: return state;
    }
}
exports.reducer = reducer;
const updateCell = (payload) => ({ type: UPDATE_CELL, payload });
const focusCell = (payload) => ({ type: FOCUS_CELL, payload });
exports.actionCreators = { updateCell, focusCell };
//# sourceMappingURL=sheets.js.map