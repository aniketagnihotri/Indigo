import React, { Component } from 'react';
import PageHeader from "../PageAttributes/PageHeader";
import Searchbar from "../PageAttributes/Searchbar";
import PageFooter from "../PageAttributes/PageFooter";

class BusinessPage extends Component {

    render() {
        return (
            <div>
                <PageHeader />
                <br />
                <Searchbar />
                <h1>businesspage</h1>
                <PageFooter />
            </div>
        );
    }

}

export default BusinessPage;