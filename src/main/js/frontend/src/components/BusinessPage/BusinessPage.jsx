import React, { Component } from 'react';
import PageHeader from "../PageAttributes/PageHeader";
import Searchbar from "../PageAttributes/Searchbar";
import SearchFilter from "../PageAttributes/SearchFilter";
import PageFooter from "../PageAttributes/PageFooter";

class BusinessPage extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <PageHeader />
                <br />
                <Searchbar />
                <br />
                <SearchFilter />
                <h6>Business id: {this.props.match.params.id}</h6>
                <br />
                <PageFooter />
            </div>
        );
    }

}

export default BusinessPage;