import React, { Component } from 'react';
import { Jumbotron } from "react-bootstrap";
import PageHeader from "../PageAttributes/PageHeader";
import Searchbar from "../PageAttributes/Searchbar";
import SearchFilter from "../PageAttributes/SearchFilter";
import PageFooter from "../PageAttributes/PageFooter";
import ListingData from "./components/ListingData";
import CasesData from "../PageAttributes/CasesData";

class BusinessListingsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: this.props.match.params.searchTerm
        }
    }

    render() {
        return (
            <div>
                <Jumbotron className={"jumbotron-business"}>
                    <div style={ { marginBottom: 70 }}>
                        <PageHeader user={this.props.user} />
                    </div>

                    <div style={ { marginBottom: 20 }}>
                        <Searchbar />
                    </div>

                    <SearchFilter />
                </Jumbotron>
                <CasesData />
                <h4 style={ {  marginLeft: 445, textAlign: "left", lineHeight: -1 } }>
                    Showing results for "{this.props.match.params.searchTerm}"
                </h4>
                <p style={ {  marginLeft: 445, textAlign: "left", lineHeight: -1 } }>
                    Results are ordered by highest Indigo rating and number of reviews.
                </p>
                <ListingData searchTerm={this.props.match.params.searchTerm} />
                <PageFooter />
            </div>
        );
    }

}

export default BusinessListingsPage;