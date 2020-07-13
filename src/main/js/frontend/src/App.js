import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Login from "./components/Login/Login";

const PageHeaderRender = () => {
    return (
        <div className={"App"}>
            <Router>
                <Switch>
                    <Route path="/aboutus" component={AboutUs}>
                        <AboutUs />
                    </Route>
                    <Route path="/contactus" component={ContactUs}>
                        <ContactUs />
                    </Route>
                    <Route path="/login" component={Login}>
                        <Login />
                    </Route>
                    <Route path="/" component={HomePage}>
                        <HomePage />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default PageHeaderRender;

