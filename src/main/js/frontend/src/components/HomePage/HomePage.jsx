import React, { Component } from 'react';
import { Jumbotron } from "react-bootstrap";
import "./HomePage.css"
import PageHeaderHome from "../PageAttributes/PageHeaderHome";
import PageFooter from "../PageAttributes/PageFooter";
import Searchbar from "../PageAttributes/Searchbar";
import SearchFilter from "../PageAttributes/SearchFilter";
import RecommendedBusinesses from "./components/RecommendedBusinesses";
import CasesData from "../PageAttributes/CasesData";

class HomePage extends Component {

    componentDidMount() {
        fetch(`bot.whatismyipaddress.com`, {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(results => results.json())
            .then(results => console.log(results))
    }


    render() {
        return (
            <div>
                <Jumbotron className={"jumbotron-home"}>
                        <PageHeaderHome />
                        <br /><br /><br /><br />
                        <br /><br /><br /><br/>
                        <Searchbar />
                        <br />
                        <SearchFilter />
                        <br /><br /><br /><br/>
                        <br />
                        </Jumbotron>
                <CasesData />
                <br />
                <RecommendedBusinesses />
                <br /><br />
                <PageFooter />
            </div>
        );
    }

}

export default HomePage;