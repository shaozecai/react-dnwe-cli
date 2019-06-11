import React from 'react';
import {HashRouter,Route, Switch} from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'

import Home from '../components/Home';
import About from '../components/About';
import Detail from '../components/Detail';
import More from '../components/More';


function Body(){
    return (
        <div className="body">
            <Header/>
            <div className="main-box">
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/detail" component={Detail}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/more" component={More}/>
                    </Switch>
                </HashRouter>
            </div>
            <Footer/>
        </div>
    )
}


export default Body;