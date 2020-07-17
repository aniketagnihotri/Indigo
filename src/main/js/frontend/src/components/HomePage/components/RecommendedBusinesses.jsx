import React, { Component } from 'react';
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Box, ListItem } from "@material-ui/core";
import "./RecommendedBusinesses.css"
import IndigoRating from "../../PageAttributes/IndigoRating";

class RecommendedBusinesses extends Component {

    constructor(props) {
        super(props);

        this.state = {
            businesses: []
        }
    }

    componentDidMount() {
        fetch(`api/yelp/searchBusinessListingRandom/12`, {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(results => results.json())
            .then(results => this.setState({ "businesses" : results }))
    }

    render() {

        return (
            <Box style={ { display: "inline-block"} }>
                <ul>
                    <h4 style={ { textAlign: "left", paddingLeft: 40 } }>Featured businesses of the week...</h4>
                    {this.state.businesses.length === 0 ? (
                            <h6 className={"flexbox-container-img"}>Businesses are being fetched...</h6>
                        ) : (
                        this.state.businesses.map(function (business, index) {

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
                                            <h6 style={ { fontSize: 20, paddingTop: 5 } }>{business.name}</h6>
                                            <div>
                                                <IndigoRating id={business.id}/>
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