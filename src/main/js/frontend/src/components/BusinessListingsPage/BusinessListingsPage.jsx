import React, { Component } from 'react';
import PageHeader from "../PageAttributes/PageHeader";
import Searchbar from "../PageAttributes/Searchbar";
import SearchFilter from "../PageAttributes/SearchFilter";
import PageFooter from "../PageAttributes/PageFooter";

class BusinessListingsPage extends Component {

    componentDidMount () {
    }

        render() {
        return (
            <div>
                <PageHeader />
                <br />
                <Searchbar />
                <SearchFilter />
                <h6>Search term: {this.props.match.params.searchTerm}</h6>
                <br />
                <PageFooter />
            </div>
        );
    }

}

export default BusinessListingsPage;