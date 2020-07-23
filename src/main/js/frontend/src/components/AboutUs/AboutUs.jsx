import React, { Component } from 'react';
import { Jumbotron } from "react-bootstrap";
import "./AboutUs.css"
import PageHeader from "../PageAttributes/PageHeader";
import PageFooter from "../PageAttributes/PageFooter";
import Searchbar from "../PageAttributes/Searchbar";
import SearchFilter from "../PageAttributes/SearchFilter";

/*
 * About Us page with simple text and mission statement information pulled from
 * project abstract.
 */
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

                <div style={ { textAlign: "center", marginBottom: 27 } }>
                    <h1 style={ { marginBottom: 30 } }>About Us</h1>
                    <p style={ {
                        display: "inline-block",
                        maxWidth: "70%",
                        overflowWrap: "break-word",
                        wordWrap: "break-word",
                    } }>
                        <b>Mission Statement</b><br />
                        Intended to incentivize safe tourism and travel to and in Indianapolis, Indigo is your go-to for all things COVID-19.
                        Our goal is to make changes and other information more accessible to the public via crowdsourced business ratings
                        and business-specific data. In a time of uncertainty, we feel that this is the best way to educate our users as
                        Indiana slowly reopens.
                        <br /><br />

                        <b>Why Indigo?</b><br />
                        At the core, Indigo is an application that has taken a Yelp-like approach to crowdsourcing business data via ratings and reviews;
                        Indigo adds various other features to the mix as well to ensure that our users are well-informed and safe in Indianapolis.<br /><br />
                        Indigo allows users to look into different restaurants, hotels, airlines, tours, and other attractions and the safety protocols
                        that they have each implemented to combat COVID-19. Indigo’s reviews system allows users to receive an understanding of others'
                        first-hand experiences at these locations before committing to traveling there.
                        <br /><br />

                        <b>Our Customer Base</b><br />
                        Indigo is best suited for those planning a trip to or within Indianapolis. Even for last minute decisions, Indigo allows users
                        to make quick, safe, and easy decisions for you and your loved ones.
                        <br /><br />
                    </p>
                </div>

                <PageFooter />
            </div>
        );
    }

}

export default AboutUs;