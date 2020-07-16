import React, { Component } from 'react';
import {Box, List} from "@material-ui/core";
import ListingLayout from "../../BusinessListingsPage/components/ListingLayout";
import {Button} from "react-bootstrap";

class BusinessData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            response: []
        }
    }

    componentDidMount() {
        const params = this.state.id;
        fetch(`/api/db/getBusinessData/` + params, {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => this.setState({ "response" : response }))
    }

    render() {
        return (
            <div>
                {this.state.response.length === 0 ? (
                        <h2>
                            Business data unavailable.
                        </h2>
                    ) : (
                        this.state.response.map(function (response, index) {

                            function getClaimed(claimed) {
                                if (claimed === true) {
                                    return "Business was claimed on " + response.dateTime + " by " + response.user
                                }
                                return <Button type="submit">Claim this business</Button>
                            }

                            return (
                                <div>
                                    <p className="lead" style={
                                        { fontSize: 16, paddingTop: 30,
                                            textAlign: "left", lineHeight: -1 }
                                    }>
                                        COVID-19 Business Response:
                                        <br /><h6>{response.businessResponse}</h6>
                                        <br /><br/>{getClaimed(response.claimed)}
                                    </p>
                                </div>
                            );
                    }))}
            </div>
        );
    }

}

export default BusinessData;