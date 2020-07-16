import React, { Component } from 'react';
import "./BusinessPage.css"
import PageHeader from "../PageAttributes/PageHeader";
import Searchbar from "../PageAttributes/Searchbar";
import SearchFilter from "../PageAttributes/SearchFilter";
import PageFooter from "../PageAttributes/PageFooter";
import {Jumbotron} from "react-bootstrap";
import BusinessData from "./components/BusinessData";

class BusinessPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id
        }
    }



    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Jumbotron className={"jumbotron-business"}>
                    <div style={ { marginBottom: 70 }}>
                        <PageHeader />
                    </div>

                    <div style={ { marginBottom: 20 }}>
                        <Searchbar />
                    </div>
                    <div style={ { paddingBottom: 80} }>
                        <SearchFilter />
                    </div>
                </Jumbotron>
                <BusinessData id={this.state.id} />
                <PageFooter />
            </div>
        );
    }

}

export default BusinessPage;