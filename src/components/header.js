import React from 'react';
import './header.css'
import { Link } from "react-router-dom";


export default class Header extends React.Component{
    render() {
       return(
        <div className="topnav">
          <Link to="/home">Home</Link>
          <Link to="/car">Car</Link>
          <Link to="/swipe">Swipe</Link>
      </div> 
       )
    }
}