import React, { Component } from 'react';
import { Jumbotron } from "react-bootstrap";
import "../BusinessPage/BusinessPage.css"
import PageHeader from "../PageAttributes/PageHeader";
import Searchbar from "../PageAttributes/Searchbar";
import SearchFilter from "../PageAttributes/SearchFilter";
import PageFooter from "../PageAttributes/PageFooter";

class YourInfo extends Component {

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
                <h1 style={ { marginBottom: 100, textAlign: "center"} }>Your Information</h1>
                <p style={ { marginBottom: 261, textAlign: "center"} }>
                    Hello {this.props.user.email}!<br />
                    We are currently working on this page. Please check back soon!
                </p>
                <PageFooter />
            </div>
        );
    }

}

export default YourInfo;