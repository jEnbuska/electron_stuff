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
const React = require("react");
const Col_1 = require("./Col");
class Row extends React.PureComponent {
    render() {
        const _a = this.props, { data, activeSheet, row } = _a, rest = __rest(_a, ["data", "activeSheet", "row"]);
        const targetRow = data[activeSheet].rows[row];
        return (React.createElement("div", null, Object.keys(targetRow).map(col => (React.createElement(Col_1.default, Object.assign({ key: col, col: col, row: row, activeSheet: activeSheet, data: data }, rest))))));
    }
}
exports.default = Row;
//# sourceMappingURL=Row.js.map