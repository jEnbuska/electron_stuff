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
const store_1 = require("../store");
const Row_1 = require("./Row");
const utils_1 = require("../utils");
const react_redux_1 = require("react-redux");
const mapDispatchToProps = utils_1.pick(store_1.actionCreators, 'updateCell', 'focusCell');
const mapStateToProps = ({ sheets }) => sheets;
class Sheet extends React.PureComponent {
    render() {
        const _a = this.props, { activeSheet, data } = _a, rest = __rest(_a, ["activeSheet", "data"]);
        const { rows } = data[activeSheet];
        return (React.createElement("div", { className: "sheet" }, Object.keys(rows).map(row => (React.createElement(Row_1.default, Object.assign({ key: row, row: row, data: data, activeSheet: activeSheet }, rest))))));
    }
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Sheet);
//# sourceMappingURL=Sheet.js.map