import React, { Component } from 'react';

class RecommendedBusinesses extends Component {

    constructor(props) {
        super(props);

        this.state = {
            business_rating: []
        }
    }

    componentDidMount() {
        fetch(`/api/db/getIndigoBusinessStats/` + this.props.id, {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => this.setState({ "business_rating" : response }))
    }

    render() {

        return (
            <div>
                {this.state.business_rating.length === 0 ? (
                    <p className="lead" style={ { marginBottom: 0, fontSize: 18, textAlign: "left", lineHeight: -1 } }>
                        Our Rating: No ratings yet!
                    </p>
                ) : (
                    this.state.business_rating.map(function (business, index) {

                        return (
                            <p className="lead" style={ { marginBottom: 0, fontSize: 18, textAlign: "left", lineHeight: -1 } }>
                                Our Rating: {business[2]} ({business[1]} reviews)
                            </p>
                        );
                    }))}
            </div>
        );
    }

}

export default RecommendedBusinesses;