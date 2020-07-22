import React, { Component } from 'react';
import { Jumbotron } from "react-bootstrap";
import "./BusinessPage.css"
import PageHeader from "../PageAttributes/PageHeader";
import Searchbar from "../PageAttributes/Searchbar";
import SearchFilter from "../PageAttributes/SearchFilter";
import PageFooter from "../PageAttributes/PageFooter";
import BusinessData from "./components/BusinessData/BusinessData";
import ReviewsData from "./components/Reviews/ReviewsData";
import CasesData from "../PageAttributes/CasesData";

/*
 * BusinessPage manager. Manages structure of components.
 */
class BusinessPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id
        }
    }

    render() {
        return (
            <div>
                <Jumbotron className={"jumbotron-business"}>
                    <div style={ { marginBottom: 70 }}>
                        <PageHeader user={this.props.user} />
                    </div>

                    <div style={ { marginBottom: 20 }}>
                        <Searchbar />
                    </div>
                    <div style={ { paddingBottom: 80} }>
                        <SearchFilter />
                    </div>
                </Jumbotron>
                <CasesData />
                <BusinessData id={this.state.id} />
                <ReviewsData id={this.state.id} user={this.props.user} />

                <div style={
                    {
                        clear: "both"
                    }
                }>
                    <PageFooter />
                </div>
            </div>
        );
    }

}

export default BusinessPage;