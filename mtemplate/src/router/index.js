import React from 'react';
import {HashRouter,Route, Switch} from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import Detail from '../components/Detail';



function Body(){
    return (
        <div className="body">
            <div className="main-box">
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/detail" component={Detail}/>
                        <Route exact path="/about" component={About}/>
                    </Switch>
                </HashRouter>
            </div>
        </div>
    )
}


export default Body;