import React, { Component } from 'react';

import { FaAlignRight } from 'react-icons/fa';

import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";

import logo from '../images/logo.svg';



class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isopen: false
        };
    }


    handleclick = () => {

        this.setState({

            isopen: !this.state.isopen
        })
    }

    render() {
        return ( <React.Fragment >
            <nav className = "navbar">

            <div className = "nav-center">

            <div className = "nav-header">
            <Link to = "/" >
            <img src ={logo}
            alt = "logo" / >
            </Link>
             <button className  = "nav-btn" type = "button"> 
            <FaAlignRight onClick = { this.handleclick }
            className = "nav-icon" / ></button> 
            </div> 

             
            <ul className={this.state.isopen?"nav-links show-nav":"nav-links"}>
            <li ><Link to="/">Home </Link></li>
             <li ><Link to="Rooms">Rooms </Link> </li>

            </ul>
             </div>
             </nav> 
             </React.Fragment>
        );
    }
}



export default Navbar;