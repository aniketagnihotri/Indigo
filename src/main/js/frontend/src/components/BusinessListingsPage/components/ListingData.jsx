import React, { Component } from 'react';
import './Listings.css';
import ListingLayout from "./ListingLayout"
import {Box, List} from "@material-ui/core";

class ListingData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: this.props.searchTerm,
            businesses: []
        }
    }

    async componentWillReceiveProps(newProps) {
        await this.setState({ searchTerm : newProps.searchTerm } )
        this.forceUpdate(this.componentDidMount());
    }

    componentDidMount() {
        const params = this.props.searchTerm + "/10";
        fetch(`/api/yelp/searchBusinessListingByTerm/` + params, {
            method: 'GET',
                headers : {
            'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => this.setState({ "businesses" : response }))
    }

    render() {
        return (
            <div>
                <Box style={
                    {
                        position: "absolute", left: 0, marginLeft: 30
                    } }>
                    <h3>Filters</h3>
                    <h6>Coming soon</h6>
                </Box>
                {this.state.businesses.length === 0 ? (
                    <h2>
                        No results found.
                    </h2>

                ) : (
                    this.state.businesses.map(function (business, index) {
                        return (
                            <Box style={
                                {
                                    boxShadow: 2, marginLeft: 400,
                                    marginRight: 50, marginBottom: 40,
                                    borderRadius: 5
                                }
                            }>
                                <List component="nav" aria-label="mailbox folders">
                                    <ListingLayout business={business} />
                                </List>
                            </Box>
                        );
                    }))}
            </div>
        );
    }

}

export default ListingData;