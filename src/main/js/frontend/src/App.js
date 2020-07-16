import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/AboutAndContactUs/AboutUs";
import ContactUs from "./components/AboutAndContactUs/ContactUs";
import Login from "./components/Login/Login";
import BusinessListingsPage from "./components/BusinessListingsPage/BusinessListingsPage";
import BusinessPage from "./components/BusinessPage/BusinessPage"

const App = () => {
    return (
        <div className={"App"}>
            <Router>
                <Switch>
                    <Route path="/AboutUs">
                        <AboutUs />
                    </Route>
                    <Route path="/GetBusinesses/:searchTerm"
                           render={ props => <BusinessListingsPage { ...props } />}
                        />
                    <Route path="/GetBusiness/:id" render={ props => <BusinessPage { ...props } />}
                        />
                    <Route path="/ContactUs" component={ContactUs} />
                    <Route path="/Login" component={Login} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;

