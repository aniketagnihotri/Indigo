import React, { Component } from 'react';
import PageHeader from "../PageAttributes/PageHeader";
import PageFooter from "../PageAttributes/PageFooter";

class Login extends Component {

    render() {
        return (
            <div>
                <PageHeader />
                <h1>login!</h1>
                <PageFooter />
            </div>
        );
    }

}

export default Login;