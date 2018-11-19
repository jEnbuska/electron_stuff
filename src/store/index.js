"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const history_1 = require("history");
const connected_react_router_1 = require("connected-react-router");
const initialState_1 = require("./initialState");
const sheets = require("./sheets");
exports.history = history_1.createBrowserHistory();
const middlewares = [
    connected_react_router_1.routerMiddleware(exports.history),
    function (store) {
        return function (next) {
            return function (action) {
                next(action);
                localStorage.setItem('state', JSON.stringify(store.getState()));
                console.log(localStorage.getItem('state'));
            };
        };
    }
];
exports.actionCreators = Object.assign({}, sheets.actionCreators);
const REDUX_DEVTOOL = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = REDUX_DEVTOOL
    ? REDUX_DEVTOOL({ actionCreators: exports.actionCreators })
    : redux_1.compose;
const enhancer = composeEnhancers(redux_1.applyMiddleware(...middlewares));
const rootReducer = redux_1.combineReducers({
    sheets: sheets.reducer,
});
const store = redux_1.createStore(connected_react_router_1.connectRouter(exports.history)(rootReducer), initialState_1.default, enhancer);
exports.default = store;
//# sourceMappingURL=index.js.map