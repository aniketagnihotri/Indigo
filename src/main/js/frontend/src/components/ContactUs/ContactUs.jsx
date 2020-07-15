import React, { Component } from 'react';
import "../AboutUs/AboutUs.css"
import PageHeader from "../PageAttributes/PageHeader";
import PageFooter from "../PageAttributes/PageFooter";
import Searchbar from "../PageAttributes/Searchbar";
import SearchFilter from "../PageAttributes/SearchFilter";
import {Jumbotron} from "react-bootstrap";

class ContactUs extends Component {

    render() {
        return (
            <div>
                <Jumbotron className={"jumbotron-about"}>
                    <PageHeader />
                    <br />
                    <br />
                    <br />
                    <Searchbar />
                    <br />
                    <SearchFilter />
                </Jumbotron>
                <h1>contact us!</h1>
                <PageFooter />
            </div>
        );
    }

}

export default ContactUs;