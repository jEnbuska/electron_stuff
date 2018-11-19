import * as React from 'react';
import Excel from './Excel'
import {Redirect, Route, Switch} from "react-router";

export default function App() {
    return (
        <Switch>
            <Route path="/sheets" component={Excel}/>
            <Redirect to="/sheets"/>
        </Switch>
    );
}
