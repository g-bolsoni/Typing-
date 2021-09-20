import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PageWords from './pages/PageWords';
import Home from './pages/Home';
import NotFound from './pages/NotFound'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/typing_speed' component={PageWords}/>
                <Route  path='*' component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}