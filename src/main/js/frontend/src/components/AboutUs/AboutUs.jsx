import React, { Component } from 'react';
import { Jumbotron } from "react-bootstrap";
import "./AboutUs.css"
import PageHeader from "../PageAttributes/PageHeader";
import PageFooter from "../PageAttributes/PageFooter";
import Searchbar from "../PageAttributes/Searchbar";
import SearchFilter from "../PageAttributes/SearchFilter";

class AboutUs extends Component {

    render() {
        return (
            <div>
                <Jumbotron className={"jumbotron-about"}>
                    <div style={ { marginBottom: 70 }}>
                        <PageHeader user={this.props.user} />
                    </div>

                    <div style={ { marginBottom: 20 }}>
                        <Searchbar />
                    </div>

                    <SearchFilter />
                </Jumbotron>

                <div style={ { textAlign: "center", marginBottom: 30 } }>
                    <h1 style={ { marginBottom: 30 } }>About Us</h1>
                    <p style={ {
                        display: "inline-block",
                        maxWidth: "50%",
                        overflowWrap: "break-word",
                        wordWrap: "break-word",
                    } }>
                        <b>Mission Statement</b><br />
                        Intended to incentivize safe tourism and travel to and in Indianapolis, Indigo is your go-to for all things COVID-19.
                        Our goal is to make changes and other information more accessible to the public via crowdsourced business ratings
                        and business-specific data. In a time of uncertainty, we feel that this is the best way to educate our users as
                        Indiana slowly reopens.<br />
                    </p>
                </div>

                <PageFooter />
            </div>
        );
    }

}

export default AboutUs;