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
                    boxShadow: 2, marginLeft: 65,
                    marginRight: 80, marginBottom: 20,
                    width: 500, borderRadius: 5
                }
            }>
                <h3 style={ { textAlign: "left" } }>COVID-19 Business Reviews</h3>

                <Box style={
                    {
                        display: "flex"
                    }
                }>
                    <div style={
                        {
                            flex: 1,
                            marginRight: 100
                        }
                    }>
                        <WriteReviewData  id={this.state.id} user={this.props.user} />
                    </div>

                    <div style={
                        {
                            flex: 1
                        }
                    }>
                        <ReviewLayout id={this.state.id} />
                    </div>
                </Box>
            </Box>
        );
    }

}

export default ReviewsData;