import React, {Component} from 'react';
import { Button } from "react-bootstrap";
import { List, ListItem, Select } from "@material-ui/core";

class ReviewData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            user: "",
            rating: "",
            review: ""
        }
    }

    getDate() {
        let currentDate = new Date();
        return (currentDate.getMonth() + 1) + '/' + currentDate.getDate() + '/' + currentDate.getFullYear();
    }

    changeUser(event) {
        this.setState({ "user": event.target.value })
    }


    changeRating(event) {
        this.setState({ "rating": event.target.value })
    }

    changeReview(event) {
        this.setState({ "review": event.target.value })
    }

    pushReview() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const id = this.state.id;
        const user = this.state.user;
        const rating = this.state.rating;
        const review = this.state.review;
        const dateTime = this.getDate();
        fetch(`/api/db/addBusinessReview`, {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                "id":id,
                "user":user,
                "rating":parseFloat(rating),
                "review":review,
                "dateTime":dateTime
            }
            )
        })
    }

    render() {
        return (
            <div  style={ { textAlign: "left", marginTop: 20, marginLeft: 60 } }>
                <h5 >
                    Write a review using our editor!
                </h5>
                <p style={ { marginTop: 10, marginLeft: 60 } }>
                    Please note that we only allow one review per business to ensure transparency.
                </p>
                <List style={ { marginLeft: 45 } }
                      component="nav" aria-label="mailbox folders">
                    <ListItem button style={
                        {
                            width: 580
                        }
                    }>
                        <div>
                            <h6>Username (email): </h6>
                            <input onChange={this.changeUser.bind(this)}
                                className="custom-control-inline form-control"
                                   style={
                                       {
                                           width: 550,
                                           marginBottom: 30
                                       }
                                   } type="email" name="user"
                                   maxLength={30}
                            />

                            <h6>
                                Rating:
                            </h6>
                            <Select
                                onChange={this.changeRating.bind(this)}
                                defaultValue={"0.0"}
                                id="rating"
                                style={
                                {
                                    height: 35,
                                    width: 70,
                                    marginBottom: 30
                                }
                            } placeholder={"1.0"}>
                                <option value="0.0">0.0</option>
                                <option value="1.0">1.0</option>
                                <option value="1.5">1.5</option>
                                <option value="2.0">2.0</option>
                                <option value="2.5">2.5</option>
                                <option value="3.0">3.0</option>
                                <option value="3.5">3.5</option>
                                <option value="4.0">4.0</option>
                                <option value="4.5">4.5</option>
                                <option value="5.0">5.0</option>
                            </Select>

                            <h6>
                                Review:
                            </h6>
                            <textarea
                                onChange={this.changeReview.bind(this)}
                                style={
                                {
                                    height: 500,
                                    width: 550,
                                    marginBottom: 10
                                }
                            } className="custom-control-inline form-control"
                                   name="review"
                                   maxLength={500}
                            />
                            <br />

                            <Button onClick={this.pushReview.bind(this)}>
                                Submit review
                            </Button>
                            <h6 style={
                                {
                                    marginTop: 10
                                }
                            }
                            > Refresh the page to view your review after clicking submit! </h6>
                        </div>
                    </ListItem>
                </List>
            </div>
        );
    }

}

export default ReviewData;