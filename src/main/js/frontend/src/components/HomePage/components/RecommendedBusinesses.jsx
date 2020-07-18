import React, { Component } from 'react';
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Box, ListItem } from "@material-ui/core";
import "./RecommendedBusinesses.css"
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

class RecommendedBusinesses extends Component {

    constructor(props) {
        super(props);

        this.state = {
            businesses: []
        }
    }

    componentDidMount() {
        fetch(`api/general/searchBusinessListingRandom/12`, {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(results => results.json())
            .then(results => this.setState({ "businesses" : results }))
    }

    sortBusinessesByNumReviews() {
        this.state.businesses.sort((a, b) => a.numReviews < b.numReviews ? 1:-1).map(
            (business, i) => <div key={i}> {business.rating} </div>
        )
    }

    render() {

        return (
            <Box style={ { display: "inline-block"} }>
                {this.sortBusinessesByNumReviews()}
                <ul>
                    <h4 style={ { textAlign: "left", paddingLeft: 40 } }>Featured businesses of the week...</h4>
                    <h6 style={ { textAlign: "left", paddingLeft: 40 } }> <CheckCircleIcon /> dictates a sponsored business.</h6>
                    {this.state.businesses.length === 0 ? (
                            <h6 className={"flexbox-container-img"}>Businesses are being fetched...</h6>
                        ) : (
                        this.state.businesses.map(function (business, index) {

                            function getSponsored(sponsored) {
                                if (sponsored === true) {
                                    return <CheckCircleIcon />
                                }
                            }

                            function getRatingAndReviews(business) {
                                if (business.numReviews === 0) {
                                    return (<p className="lead" style={ { marginBottom: 0, fontSize: 18, textAlign: "left", lineHeight: -1 } }>
                                                No rating yet ({business.numReviews} reviews) {getSponsored(business.sponsored)}
                                            </p>)
                                }
                                return (
                                    <p className="lead" style={ { marginBottom: 0, fontSize: 18, textAlign: "left", lineHeight: -1 } }>
                                        Indigo Rating: {business.indigoRating} ({business.numReviews} reviews) {getSponsored(business.sponsored)}
                                    </p>
                                )
                            }

                            return (
                                <Link to={{
                                    pathname: "/GetBusiness/" + business.id,
                                }} className={"link"}>
                                    <Box style={
                                        {
                                            marginLeft: 20, marginRight: 40,
                                            marginBottom: 30, display: "inline-block"
                                        }
                                    }>
                                        <ListItem button style={
                                            {
                                                marginTop: 10,
                                                display: "inline-block"
                                            }
                                        }>
                                            <Image src={business.image_url} style={ { border: "2px solid black", borderRadius: 10 }}
                                                   alt={"Image preview here"} width={375} height={275} mode='fit' />
                                            <h1 style={ { fontSize: 28, paddingTop: 5, paddingBottom: 10 } }>{business.name}</h1>
                                            <div>
                                                {getRatingAndReviews(business)}
                                            </div>
                                            <p className="lead" style={ { fontSize: 14 } }>
                                                <br />Yelp Rating: {business.rating}
                                                <br/>Yelp Category: {business.categories[0]}
                                                <br/>Price: {business.price}
                                                <br/>Street Address: {business.displayAddress[0]}
                                            </p>
                                        </ListItem>
                                    </Box>
                                </Link>
                            )
                        }))}
                </ul>
            </Box>
        );
    }

}

export default RecommendedBusinesses;