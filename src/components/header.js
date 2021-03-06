import React from 'react';
import './header.css'
import { Link } from "react-router-dom";


export default class Header extends React.Component {
    render() {
        return (
            <div className="topnav">
                <Link to="/mypage/home">Home</Link>
                <Link to="/mypage/car">Car</Link>
                <Link to="/mypage/swipe">About Me</Link>
                <Link to="/mypage/planet">Technologies</Link>
            </div>
        )
    }
}