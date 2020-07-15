import React, { Component } from 'react';
import {Box} from "@material-ui/core";
import {Link} from "react-router-dom";
import Image from "react-bootstrap/Image";

class RecommendedBusinesses extends Component {

    constructor(props) {
        super(props);

        this.state = {
            businessData: []
        }
    }

    componentDidMount() {
        console.log(this.props.id)
        fetch(`/api/db/getBusinessData/` + this.props.id, {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => this.setState({ "businessData" : response }))
    }

    render() {

        return (
            <div>
                    {this.state.businessData.length === 0 ? (
                        <p className="lead" style={ { marginBottom: 0, marginLeft: 10, fontSize: 14, textAlign: "left", lineHeight: -1 } }>
                            Our Rating: No ratings yet!
                        </p>
                    ) : (
                        this.state.businessData.map(function (business, index) {
                            return (
                                <p className="lead" style={ { marginBottom: 0, marginLeft: 10, fontSize: 14, textAlign: "left", lineHeight: -1 } }>
                                    Our Rating: {business.rating}
                                </p>
                            )
                        }))}
            </div>
        );
    }

}

export default RecommendedBusinesses;