import React, { Component } from 'react';
import { Box } from "@material-ui/core";
import BusinessDataLayout from "./BusinessDataLayout";

/*
 * Class that fetches and sends Yelp Business information to child components.
 */
class BusinessData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            business: []
        }
    }

    /*
     * API call for Yelp business data that is made prior to rendering the components.
     */
    componentDidMount() {
        const params = this.state.id + "/2";
        fetch(`/api/yelp/searchBusinessByID/` + params, {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => this.setState({ "business" : response }))
    }

    render() {
        const business = this.state.business;
        return (
            <div>
                {this.state.business.length === 0 ? (
                    <h2>
                        No results found.
                    </h2>
                ) : (
                    <Box style={
                        {
                            boxShadow: 2,
                            marginLeft: 20,
                            marginRight: 30, marginBottom: 40,
                            borderRadius: 5
                        }
                    }>
                        <BusinessDataLayout business={business} />
                    </Box>
                    )
                }
            </div>
        );
    }

}

export default BusinessData;