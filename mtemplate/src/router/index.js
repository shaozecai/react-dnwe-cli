import React from 'react';
import {HashRouter,Route, Switch} from 'react-router-dom';

import Home from '../components/Home';


function Body(){
    return (
        <div className="body">
            <div className="main-box">
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </HashRouter>
            </div>
        </div>
    )
}


export default Body;