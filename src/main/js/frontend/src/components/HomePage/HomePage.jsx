import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap"
import PageHeader from "../PageAttributes/PageHeader";

class HomePage extends Component {

    render() {
        return (
            <div>
                <PageHeader />
                <h1>home [age]!</h1>
            </div>
        );
    }

}

export default HomePage;