"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const utils_1 = require("../utils");
const mapStateToProps = ({ router }) => router.location;
const TabContainer = styled_components_1.default.div `
    padding: 5px;
    .tab{
        padding: 10px;
        color: light-blue;
    }
    .tab.active{
        font-weight: bold;
    }
`;
function NavTabs({ tabs, pathname }) {
    return (React.createElement(TabContainer, null, tabs.map((key) => {
        const to = `/sheets/${key}`;
        return (React.createElement(react_router_dom_1.Link, { key: key, to: to, className: utils_1.addClass('tab', pathname === to && 'active') }, key));
    })));
}
exports.default = react_redux_1.connect(mapStateToProps)(NavTabs);
//# sourceMappingURL=NavTabs.js.map