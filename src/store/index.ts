import {combineReducers, createStore, compose, applyMiddleware, Store } from 'redux';
import {createBrowserHistory} from 'history';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import initialState from './initialState';
import * as router from './router'
import * as sheets from './sheets';

export type StoreState = {
    sheets: sheets.State;
    router: RouterState;
}

export type ReducerAction = sheets.Actions | router.Actions

export const history = createBrowserHistory();

const middlewares = [
    routerMiddleware(history),
    function(store: any){
        return function(next: any) {
            return function(action: any) {
                next(action);
                localStorage.setItem('state', JSON.stringify(store.getState()))
                console.log(localStorage.getItem('state'))
            }
        }
    }
];

export const actionCreators = {
    ...sheets.actionCreators,
};
const REDUX_DEVTOOL = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = REDUX_DEVTOOL
    ? REDUX_DEVTOOL({actionCreators})
    : compose;

export type ActionCreators = typeof actionCreators;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const rootReducer = combineReducers({
    sheets: sheets.reducer,
});

const store: Store<StoreState, ReducerAction> = createStore(connectRouter(history)(rootReducer), initialState, enhancer);
export type SheetsActionCreators =  sheets.ActionCreators;
export type SheetsState =  sheets.State;
export default store;
