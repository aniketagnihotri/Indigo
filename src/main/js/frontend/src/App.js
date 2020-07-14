import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Login from "./components/Login/Login";
import BusinessListingsPage from "./components/BusinessListingsPage/BusinessListingsPage";
import BusinessPage from "./components/BusinessPage/BusinessPage"

const App = () => {
    return (
        <div className={"App"}>
            <Router>
                <Switch>
                    <Route path="/AboutUs" component={AboutUs} />
                    <Route path="/GetBusinesses/:searchTerm"
                           render={ props => <BusinessListingsPage { ...props } />}
                        />
                    <Route path="/GetBusiness" component={BusinessPage} />
                    <Route path="/ContactUs" component={ContactUs} />
                    <Route path="/Login" component={Login} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;

