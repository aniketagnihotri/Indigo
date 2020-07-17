import React, { Component } from 'react';
import { Box } from "@material-ui/core";
import ReviewLayout from "./ReviewsLayout";
import WriteReviewData from "../WriteReview/WriteReviewData";

class ReviewsData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
        }
    }
    render() {
        return (
            <Box style={
                {
                    boxShadow: 2,
                    marginLeft: 65,
                    marginRight: 80, marginBottom: 20,
                    borderRadius: 5
                }
            }>
                <h3 style={ { textAlign: "left" } }>COVID-19 Business Reviews</h3>
                <WriteReviewData  id={this.state.id} />
                <ReviewLayout id={this.state.id} />
            </Box>
        );
    }

}

export default ReviewsData;