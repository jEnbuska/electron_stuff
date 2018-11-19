"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// should be called only on user input when sheet, col, and row are defined
function onUpdateCell(state, payload) {
    const { activeSheet, data } = state;
    const _a = data[activeSheet], rows = __rest(_a.rows, []), cols = __rest(_a.cols, []);
    const { value, col, row } = payload;
    rows[row] = Object.assign({}, rows[row], { [col]: value });
    cols[col] = Object.assign({}, rows[col], { [row]: value });
    return Object.assign({}, state, { data: Object.assign({}, data, { [activeSheet]: Object.assign({}, data[activeSheet], { rows,
                cols }) }) });
}
exports.onUpdateCell = onUpdateCell;
function onFocusCell(state, payload) {
    const { activeSheet, data } = state;
    const { row, col } = payload;
    return Object.assign({}, state, { data: Object.assign({}, data, { [activeSheet]: Object.assign({}, data[activeSheet], { cursor: { col, row } }) }) });
}
exports.onFocusCell = onFocusCell;
function onChangeSheet(state, payload) {
    try {
        const [page, activeSheet] = payload.location.pathname.split('/').slice(1);
        if (page === 'sheets' && activeSheet) {
            return Object.assign({}, state, { activeSheet });
        }
    }
    catch (e) { }
    return state;
}
exports.onChangeSheet = onChangeSheet;
//# sourceMappingURL=actionHandlers.js.map