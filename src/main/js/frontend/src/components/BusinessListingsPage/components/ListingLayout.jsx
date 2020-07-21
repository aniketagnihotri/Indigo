import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link }  from "react-router-dom";
import { Box, Divider, ListItem } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./Listings.css"

class ListingLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            business: this.props.business,
            businessInfo: []
        }
    }

    async componentWillReceiveProps(newProps) {
        await this.setState({ business : newProps.business } )
        this.forceUpdate();
    }

    getOpen() {
        if (this.state.business.isClosed === true) {
            return <h3 style={ { color: "red" } }>Closed</h3>;
        }
        return <h3 style={ { color: "green" } }>Open</h3>
    }

    getSponsored(sponsored) {
        if (sponsored === true) {
            return <CheckCircleIcon />
        }
    }

    getRatingAndReviews(business) {
        if (business.numReviews === 0) {
            return (<p className="lead" style={ { marginBottom: 0, fontSize: 18, textAlign: "left", lineHeight: -1 } }>
                No rating yet ({business.numReviews} reviews) {this.getSponsored(business.sponsored)}
            </p>)
        }
        return (
            <p className="lead" style={ { marginBottom: 0, fontSize: 18, textAlign: "left", lineHeight: -1 } }>
                Indigo Rating: {business.indigoRating} ({business.numReviews} reviews) {this.getSponsored(business.sponsored)}
            </p>
        )
    }

    render() {
        const business = this.state.business;
        return (
            <Box style={
                { paddingBottom: "0px !important" }
            }>
                <ListItem button>
                    <div className={"flex"}>
                        <div className='logo'>
                            <Image src={business.image_url} style={ { borderRadius: 15, border: "2px solid black" }}
                                   alt={"Image preview here"} width={300} height={250} mode='fit' />
                        </div>
                        <Link to={{
                            pathname: "/GetBusiness/" + business.id
                        }} className={"link"}>
                            <div style={ { textAlign: "left" } }>
                                <h2>{business.name}</h2>
                                <div style={ { paddingTop: 10, paddingBottom: 30 } }>
                                    {this.getRatingAndReviews(business)}
                                    <p className="lead" style={
                                        { paddingTop: 10, fontSize: 14,
                                            textAlign: "left", lineHeight: -1 }
                                    }>
                                        <br />Yelp Rating: {business.rating}
                                        <br />Price: {business.price}
                                        <br />Street Address: {business.displayAddress[0]}
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <div style={ { position: "absolute", right: 0, paddingRight: 60, textAlign: "right" } }>
                            <p>{business.categories[0]}
                                <br />{business.categories[1]}
                                <br />{business.categories[2]}
                            </p>
                        </div>
                        <div style={
                            { position: "absolute", right: 0,
                                bottom: 0, paddingRight: 60,
                                paddingBottom: 30, textAlign: "right" }
                        }>
                            {this.getOpen()}
                            <a href={business.url}>
                                <Button type="submit">
                                    View Yelp Listing
                                </Button>
                            </a>
                        </div>
                    </div>

                </ListItem>
                <Divider />
            </Box>
        )
    }

}

export default ListingLayout;