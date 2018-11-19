import * as React from 'react';
import {render} from 'react-dom'
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux'
import store, {history} from './store';
import App from './App';

console.log(store.getState())
const Root = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </Provider>
    );
};

render(<Root/>, document.getElementById('root'));
