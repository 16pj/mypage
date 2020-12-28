import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/home.js';
// import Root from "./components/root.js";
import Car from "./components/car.js"
import Header from "./components/header.js"
import SwipeView from "./components/swipeview.js"


class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
             <Header/>
             <Route path="/home"><Home/></Route>
             <Route path="/car"><Car/></Route>
             <Route path="/swipe"><SwipeView/></Route>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('robin'));
