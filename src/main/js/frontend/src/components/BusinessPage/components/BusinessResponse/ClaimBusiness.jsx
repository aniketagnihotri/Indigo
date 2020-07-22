import React, { Component } from 'react';
import { Jumbotron } from "react-bootstrap";
import "../../BusinessPage.css"
import PageHeader from "../../../PageAttributes/PageHeader";
import Searchbar from "../../../PageAttributes/Searchbar";
import SearchFilter from "../../../PageAttributes/SearchFilter";
import PageFooter from "../../../PageAttributes/PageFooter";

/*
 * Class that displays the ClaimBusiness page for business owners that are interested
 * in claiming a business listing on Indigo.
 */
class ClaimBusiness extends Component {

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
                <h1 style={ { marginLeft: 20, textAlign: "left"} }>Claim a business</h1>
                <p style={ { textSize: 18, marginLeft: 40, marginRight: 40, paddingBottom: 365, textAlign: "left"} }>
                    Thank you you for your interest in claiming this business! We are currently
                    implementing this feature. Please check back soon!
                </p>
                <PageFooter />
            </div>
        );
    }

}

export default ClaimBusiness;