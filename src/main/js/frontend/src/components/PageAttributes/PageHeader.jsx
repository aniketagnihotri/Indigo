import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap"
import "./Navbar.css"
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class PageHeader extends Component {
    state = {
    };

    styleTabs = {
        margin: 1,
        padding: 5,
        fontSize: 18,
    };

    styleIcon = {

        padding: 10,
        fontSize: 50,
    };

    render() {
        return (
            <ReactBootStrap.Navbar className={"color-nav"} variant={"dark"}>
                <Link to={"/home"}>
                    <ReactBootStrap.Navbar.Brand href="#home" style={this.styleIcon}>indigo</ReactBootStrap.Navbar.Brand>
                </Link>
                <ReactBootStrap.Navbar.Collapse>
                    <ReactBootStrap.Navbar className={"ml-auto"}/>
                </ReactBootStrap.Navbar.Collapse>
                <ReactBootStrap.Nav className="mr-auto" style={this.styleTabs}>
                    <Link to={"/aboutus"}>
                        <ReactBootStrap.Nav.Link href="#aboutus">About us</ReactBootStrap.Nav.Link>
                    </Link>
                    <Link to={"/contactus"}>
                        <ReactBootStrap.Nav.Link href="#contactus">Contact us</ReactBootStrap.Nav.Link>
                    </Link>
                    <Link to={"/login"}>
                        <ReactBootStrap.Nav.Link href="#login">Login</ReactBootStrap.Nav.Link>
                    </Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar>
        );
    }

}

export default PageHeader;