import React, { Component } from 'react';
import { Divider, List, ListItem } from "@material-ui/core";

class ReviewData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            reviews: []
        }
    }

    componentDidMount() {
        console.log(this.state.id)
        const params = this.state.id;
        fetch(`/api/db/getBusinessReviews/` + params, {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => this.setState({ "reviews" : response }))
    }

    render() {
        return (
            <List component="nav" aria-label="mailbox folders">
                <h5 style={ { textAlign: "left", marginTop: 10, marginLeft: 50 } }>
                    Other reviews for this business
                </h5>
                {this.state.reviews.length === 0 ? (
                    <h6 style={ { marginTop: 30 } }>
                        No reviews yet. Be the first to comment!
                    </h6>

                ) : (
                    this.state.reviews.map(function (review, index) {
                        return (
                            <div>
                                <ListItem style={ { marginTop: 30, marginLeft: 100 } }
                                          button>
                                    <div style={
                                        {
                                            width: 200,
                                            float: "left",
                                            height: 200
                                        }
                                    }>
                                        <h6 style={ { textAlign: "left" } }>Written by {review.user}</h6>
                                        <p>on {review.dateTime}</p>
                                    </div>
                                    <div style={
                                        {
                                            width: 1000,
                                            float: "left",
                                            height: 200
                                        }
                                    }>
                                        <h6>Rating: {review.rating}</h6>
                                        <p style={ { textAlign: "left", wordWrap: "break-word", height: 170} }>{review.review}</p>
                                    </div>
                                </ListItem>
                                <Divider />
                            </div>
                        );
                    }))}
            </List>
        );
    }

}

export default ReviewData;