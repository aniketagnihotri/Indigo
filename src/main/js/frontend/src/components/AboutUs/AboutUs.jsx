import React, { Component } from 'react';
import PageHeader from "../PageAttributes/PageHeader";
import PageFooter from "../PageAttributes/PageFooter";

class AboutUs extends Component {

    render() {
        return (
            <div>
                <PageHeader />
                <h1>about us!</h1>
                <PageFooter />
            </div>
        );
    }

}

export default AboutUs;