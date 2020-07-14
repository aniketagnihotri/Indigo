import React, { Component } from 'react';
import PageHeader from "../PageAttributes/PageHeader";
import PageFooter from "../PageAttributes/PageFooter";
import Searchbar from "../PageAttributes/Searchbar";
import SearchFilter from "../PageAttributes/SearchFilter";

class ContactUs extends Component {

    render() {
        return (
            <div>
                <PageHeader />
                <Searchbar />
                <br />
                <SearchFilter />
                <h1>contact us!</h1>
                <PageFooter />
            </div>
        );
    }

}

export default ContactUs;