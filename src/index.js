import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Home from './components/home.js';
// import Root from "./components/root.js";
import Car from "./components/car.js"
import Header from "./components/header.js"
import SwipeView from "./components/swipeview.js"
import MyPlanet from "./components/planetmenu.js"

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Route path="/mypage/home"><Home /></Route>
                <Route path="/mypage/car"><Car /></Route>
                <Route path="/mypage/swipe"><SwipeView /></Route>
                <Route path="/mypage/planet"><MyPlanet /></Route>
                <Route exact path="/mypage">
                    <Redirect to="/mypage/home" />
                </Route>

            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('robin'));
