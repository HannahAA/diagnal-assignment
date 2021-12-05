import React, { Component } from 'react';
import BackBtn from "../images/Back.png";
import "./header.css";
import SearchBtn from "../images/search.png";

class Header extends React.Component {
    render() { 
        return (
        <div className="head1">
            <div className="main-header">
            <div><img src={BackBtn} /></div>
            <div><h2>Romantic Comedy</h2></div>
            </div>
            <div className="searchBar"><img src={SearchBtn} /></div>
        </div>
        );
    }
}
 
export default Header;