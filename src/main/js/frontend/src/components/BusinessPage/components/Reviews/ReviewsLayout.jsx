import React, { Component } from 'react';
import { Divider, List, ListItem } from "@material-ui/core";

/*
 * ReviewLayout displays already written reviews for a particular business.
 */
class ReviewsLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            reviews: []
        }
    }

    /*
     * API call to the Indigo database for all of the reviews for a particular business.
     * This call is made before the component itself renders.
     */
    componentDidMount() {
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
            <List component="nav" aria-label="mailbox folders"
                style={
                    {
                    backgroundColor: "lightgray", marginTop: 20,
                        padding: 10, borderRadius: 10
                    }
                }
            >
                <h5 style={ { textAlign: "left" } }>
                    Reviews for this business ({this.state.reviews.length} total)
                </h5>
                {this.state.reviews.length === 0 ? (
                    <h6 style={ { marginTop: 30, marginLeft: 30, width: 700 } }>
                        No reviews yet. Be the first to comment!
                    </h6>

                ) : (
                    this.state.reviews.map(function (review, index) {
                        return (
                            <div key={index} style={
                                {
                                    width: 830, height: 270,
                                    marginTop: 15, marginLeft: 50,
                                }
                            }>
                                <ListItem button>
                                    <div style={
                                        {
                                            paddingRight: 50,
                                            height: 250,

                                        }
                                    }>
                                        <h6 style={ { textAlign: "left",  wordWrap: "break-word", width: 260 } }>Written by {review.user}</h6>
                                        <p>on {review.dateTime}</p>
                                    </div>
                                    <div style={
                                        {
                                            width: 500,
                                            height: 250,
                                            overflow: "auto",
                                        }
                                    }>
                                        <h5>Rating: {review.rating}</h5>
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

export default ReviewsLayout;