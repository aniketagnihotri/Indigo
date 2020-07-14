import React, { Component } from 'react';
import "./Navbar.css"
import {
    Link
} from "react-router-dom";

class PageHeader extends Component {

    styleText = {
        margin: 1,
        padding: 5,
        fontSize: 30,
    };

    styleIcon = {
        fontSize: 30,
        color: "#FFFFFF"
    };

    render() {
        return (
            <div className={"flexbox-container-footer footer-container"} >
                <Link to={"/"}>
                    <p href="#home" style={this.styleIcon}>indigo</p>
                </Link>
            </div>
        );
    }

}

export default PageHeader;