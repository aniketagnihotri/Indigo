import React, { Component } from 'react';
import { Box, List } from "@material-ui/core";
import './Listings.css';
import ListingLayout from "./ListingLayout"
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

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
        fetch(`/api/general/searchBusinessListingByTerm/` + params, {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => this.setState( { "businesses": response } ))
    }

    sortBusinessesByNumReviews() {
        this.state.businesses.sort((a, b) => a.numReviews < b.numReviews ? 1:-1).map(
            (business, i) => <div key={i}> {business.rating} </div>
        )
    }

    render() {
        return (
            <div>
                {this.sortBusinessesByNumReviews()}
                <Box style={
                    {
                        position: "absolute", left: 0, width: 350,
                        marginLeft: 40, backgroundColor: "#D3D3D3",
                        paddingBottom: 10, paddingTop: 20, borderRadius: 10
                    } }>
                    <h3>Term Clarification</h3>
                    <p style={
                        {
                            paddingLeft: 20, paddingRight: 30,
                            paddingTop: 5, paddingBottom: 60
                        }
                    }>
                        Please note that the 'Open' or 'Closed' text for each business dictates whether
                        a business is open to customers at this time, especially during COVID-19.
                        <br />
                        <br />
                        <CheckCircleIcon /> dictates a sponsored business.
                    </p>
                    <h3>Notice</h3>
                    <p style={
                        {
                            paddingLeft: 20, paddingRight: 30,
                        }
                    }>
                        Data provided by Yelp's Fusion API.
                        <br />
                        <br />
                        Yelp helps provide the data before you to display the most up-to-date information for each business.
                        <br />
                    </p>
                </Box>
                {this.state.businesses.length === 0 ? (
                    <h2>
                        No results found.
                    </h2>

                ) : (
                    this.state.businesses.map(function (business, index) {
                        return (
                            <Box key={index} style={
                                {
                                    boxShadow: 2, marginLeft: 400,
                                    marginRight: 50, marginBottom: 40,
                                    borderRadius: 5
                                }
                            }>
                                <h1>{business.sponsored}</h1>
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