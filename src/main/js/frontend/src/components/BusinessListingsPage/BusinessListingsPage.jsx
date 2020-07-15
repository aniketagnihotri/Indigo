import React, { Component } from 'react';
import {Jumbotron} from "react-bootstrap";
import  { Box, List } from "@material-ui/core";
import PageHeader from "../PageAttributes/PageHeader";
import Searchbar from "../PageAttributes/Searchbar";
import SearchFilter from "../PageAttributes/SearchFilter";
import PageFooter from "../PageAttributes/PageFooter";
import Listings from "./components/Listings";

class BusinessListingsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
                searchTerm: this.props.match.params.searchTerm
        }
    }

    componentWillReceiveProps({someProp}) {
        this.setState({...this.state,someProp})
    }

    render() {
        return (
            <div>
                <Jumbotron className={"jumbotron-about"}>
                    <div style={ { marginBottom: 70 }}>
                        <PageHeader />
                    </div>

                    <div style={ { marginBottom: 20 }}>
                        <Searchbar />
                    </div>

                    <SearchFilter />
                </Jumbotron>
                <h4 style={ { marginBottom: 0, marginLeft: 105, textAlign: "left", lineHeight: -1 } }>
                    Showing results for "{this.props.match.params.searchTerm}"
                </h4>
                <Box style={
                    {
                        boxShadow: 2,
                        marginTop: 10, marginLeft: 250,
                        marginRight: 50, marginBottom: 40,
                        borderRadius: 5
                    }
                }>
                    <List component="nav" aria-label="mailbox folders">
                        <Listings searchTerm={this.props.match.params.searchTerm} />
                    </List>
                </Box>
                <PageFooter />
            </div>
        );
    }

}

export default BusinessListingsPage;