import React, { Component } from 'react';
import { Jumbotron }from "react-bootstrap";
import "./HomePage.css"
import PageHeader from "../PageAttributes/PageHeader";
import PageFooter from "../PageAttributes/PageFooter";
import Searchbar from "../PageAttributes/Searchbar";
import SearchFilter from "../PageAttributes/SearchFilter";
import RecommendedBusinesses from "./components/RecommendedBusinesses";

class HomePage extends Component {

    render() {
        return (
            <div>
                <PageHeader />
                <Jumbotron className={"jumbotron"}>
                    <br /><br /><br /><br />
                    <Searchbar />
                    <br />
                    <SearchFilter />
                    <br /><br /><br /><br/>
                    <RecommendedBusinesses />
                    <br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br />

                    <br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br />
                </Jumbotron>
                <PageFooter />
            </div>
        );
    }

}

export default HomePage;