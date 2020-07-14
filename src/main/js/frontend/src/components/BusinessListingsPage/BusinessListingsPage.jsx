import React, { Component } from 'react';
import PageHeader from "../PageAttributes/PageHeader";
import Searchbar from "../PageAttributes/Searchbar";
import PageFooter from "../PageAttributes/PageFooter";

class BusinessListingsPage extends Component {

    componentDidMount () {
        console.log(this.props)
        console.log(this.props.match.params.searchTerm)
        // const { searchTerm } = this.props.match.params.searchTerm
    }

        render() {
        return (
            <div>
                <PageHeader />
                <br />
                <Searchbar />
                <h6>Search term: {this.props.match.params.searchTerm}</h6>
                <br />
                <PageFooter />
            </div>
        );
    }

}

export default BusinessListingsPage;