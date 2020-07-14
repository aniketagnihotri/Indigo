import React, { Component } from 'react';
import PageHeader from "../PageAttributes/PageHeader";
import PageFooter from "../PageAttributes/PageFooter";
import Searchbar from "../PageAttributes/Searchbar";
import SearchFilter from "../PageAttributes/SearchFilter";

class Login extends Component {

    render() {
        return (
            <div>
                <PageHeader />
                <Searchbar />
                <br />
                <SearchFilter />
                <h1>login!</h1>
                <PageFooter />
            </div>
        );
    }

}

export default Login;