"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const styled_components_1 = require("styled-components");
const Sheet_1 = require("./Sheet");
const NavTabs_1 = require("./NavTabs");
const react_router_1 = require("react-router");
const mapStateToProps = ({ sheets }) => sheets;
const ExcelContainer = styled_components_1.default.div `height: 100%; padding:5px`;
class Excel extends React.PureComponent {
    render() {
        const { data } = this.props;
        const tabs = Object.keys(data);
        return (React.createElement(ExcelContainer, { className: "excel" },
            React.createElement(NavTabs_1.default, { tabs: Object.keys(data) }),
            React.createElement(react_router_1.Switch, null,
                tabs.map(tab => (React.createElement(react_router_1.Route, { key: tab, path: `/sheets/${tab}`, component: Sheet_1.default }))),
                tabs.length && React.createElement(react_router_1.Redirect, { to: `/sheets/${tabs[0]}` }))));
    }
}
exports.default = react_redux_1.connect(mapStateToProps)(Excel);
//# sourceMappingURL=index.js.map