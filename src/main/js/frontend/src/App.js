import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import fire from "./config/Fire";
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import ClaimBusiness from "./components/BusinessPage/components/BusinessResponse/ClaimBusiness"
import Login from "./components/Login/Login";
import BusinessListingsPage from "./components/BusinessListingsPage/BusinessListingsPage";
import BusinessPage from "./components/BusinessPage/BusinessPage"
import YourInfo from "./components/YourInfoPage/YourInfo";

/*
 * Main front-end class. Routes paths and renders based on user input.
 */
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
        }
    }

    componentDidMount() {
        this.authListener();
    }

    /*
     * Listens for user login/logout changes and applies them site-wide.
     */
    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ "user": user } );
            } else {
                this.setState( { "user": null } );
            }
        });
    }

    render() {
        return (
            <div className={"App"}>
                <Router onUpdate={() => window.scrollTo(0, 0)}>
                    <Switch>
                        <Route path="/AboutUs" render={() => <AboutUs user={this.state.user} />} />
                        <Route path="/ClaimBusiness" render={() => <ClaimBusiness user={this.state.user} />} />
                        <Route path="/GetBusinesses/:searchTerm" render={props => <BusinessListingsPage user={this.state.user} {...props} />} />
                        <Route path="/GetBusiness/:id" render={props => <BusinessPage user={this.state.user} {...props} />} />
                        <Route path="/Login" render={() => <Login user={this.state.user} />} />
                        <Route path="/UserInfo" render={() => <YourInfo user={this.state.user} />} />
                        <Route path="/" render={() => <HomePage user={this.state.user} />} />
                    </Switch>
                </Router>
            </div>
        )
    }

}

export default App;

