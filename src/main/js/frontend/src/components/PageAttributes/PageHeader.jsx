import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap"
import "./Navbar.css"

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
            <ReactBootStrap.Navbar className={"color-nav sticky-top"} variant={"dark"}>
                <ReactBootStrap.Navbar.Brand href="/" style={this.styleIcon}>indigo</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Collapse>
                    <ReactBootStrap.Navbar className={"ml-auto"}/>
                </ReactBootStrap.Navbar.Collapse>
                <ReactBootStrap.Nav className="mr-auto" style={this.styleTabs}>
                        <ReactBootStrap.Nav.Link href="/">  Home  </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/AboutUs">  About us  </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/ContactUs">  Contact us  </ReactBootStrap.Nav.Link>
                        <ReactBootStrap.NavDropdown title="User  " >
                            <ReactBootStrap.NavDropdown.Item href="#action/3.3">Your Info</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Divider />
                            <ReactBootStrap.NavDropdown.Item href="/Login">Login or Sign Out</ReactBootStrap.NavDropdown.Item>
                        </ReactBootStrap.NavDropdown>
                        <ReactBootStrap.Nav.Link href="/AboutUs">  GitHub  </ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar>
        );
    }

}

export default PageHeader;