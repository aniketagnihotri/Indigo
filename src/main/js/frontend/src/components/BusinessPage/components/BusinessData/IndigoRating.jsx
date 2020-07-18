import React, { Component } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

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
                    this.state.business_rating.map(function (rating, index) {

                        function getSponsored(sponsored) {
                            if (sponsored === true) {
                                return <CheckCircleIcon />
                            }
                        }

                        function getRatingAndReviews(rating) {
                            if (rating[1] === 0) {
                                return (<p className="lead" style={ { marginBottom: 0, fontSize: 18, textAlign: "left", lineHeight: -1 } }>
                                    No rating yet ({rating[1]} reviews) {getSponsored(rating[0])}
                                </p>)
                            }
                            return (
                                <p className="lead" style={ { marginBottom: 0, fontSize: 18, textAlign: "left", lineHeight: -1 } }>
                                    Indigo Rating: {rating[2]} ({rating[1]} reviews) {getSponsored(rating[0])}
                                </p>
                            )
                        }

                        return (
                            <div>
                                {getRatingAndReviews(rating)}
                            </div>
                        );
                    }))}
            </div>
        );
    }

}

export default RecommendedBusinesses;