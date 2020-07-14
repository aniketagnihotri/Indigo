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
                <br />
                <SearchFilter />
                <br />
                <h6>Showing results for "{this.props.match.params.searchTerm}"</h6>
                <PageFooter />
            </div>
        );
    }

}

export default BusinessListingsPage;