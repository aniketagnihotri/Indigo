import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

/*
 *  Class that retrieves a business's data within the Indigo database.
 */
class BusinessResponse extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            response: []
        }
    }

    /*
     * API call that is made for a business's data prior to rendering the component
     * itself.
     */
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
                                return (
                                    <Link to={{
                                        pathname: "/ClaimBusiness/",
                                    }}>
                                        <Button type="submit">Claim this business</Button>
                                    </Link>
                                )
                            }

                            return (
                                <div key={index}>
                                    <p className="lead" style={
                                        { fontSize: 16, paddingTop: 30,
                                            textAlign: "left", lineHeight: -1 }
                                    }>
                                        COVID-19 Business Response:
                                        <br /><b>{response.businessResponse}</b>
                                        <br /><br/><br /><br />
                                        {getClaimed(response.claimed)}
                                    </p>
                                </div>
                            );
                    }))}
            </div>
        );
    }

}

export default BusinessResponse;