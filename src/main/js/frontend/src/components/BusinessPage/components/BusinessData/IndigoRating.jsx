import React, { Component } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

/*
 * Gets the rating, numReviews, and isSponsored fields from the business_data table
 * from the Indigo database.
 */
class IndigoRating extends Component {

    constructor(props) {
        super(props);

        this.state = {
            business_rating: []
        }
    }

    /*
     * API call to the database that is made before the component itself is rendered.
     */
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
                            <div key={index}>
                                {getRatingAndReviews(rating)}
                            </div>
                        );
                    }))}
            </div>
        );
    }

}

export default IndigoRating;