import React, { Component } from 'react';
import { Jumbotron } from "react-bootstrap";
import "./AboutUs.css"
import PageHeader from "../PageAttributes/PageHeader";
import PageFooter from "../PageAttributes/PageFooter";
import Searchbar from "../PageAttributes/Searchbar";
import SearchFilter from "../PageAttributes/SearchFilter";

class ContactUs extends Component {

    render() {
        return (
            <div>
                <Jumbotron className={"jumbotron-about"}>
                    <div style={ { marginBottom: 70 }}>
                        <PageHeader />
                    </div>

                    <div style={ { marginBottom: 20 }}>
                        <Searchbar />
                    </div>

                    <SearchFilter />
                </Jumbotron>
                <h1 style={ { marginLeft: 20, textAlign: "left"} }>Contact us!</h1>
                <p style={ { marginLeft: 40, marginRight: 40, textAlign: "left"} }>
                    sample text about ussample text about ussample text about us
                    sample text about ussample text about ussample text about ussample text about us
                    sample text about ussample text about ussample text about ussample text about us
                    sample text about ussample text about ussample text about ussample text about us
                    sample text about ussample text about ussample text about ussample text about us
                </p>
                <PageFooter />
            </div>
        );
    }

}

export default ContactUs;