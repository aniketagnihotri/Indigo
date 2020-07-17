import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link}  from "react-router-dom";
import { Box, Divider, ListItem } from "@material-ui/core";
import IndigoRating from "../../PageAttributes/IndigoRating";

class ListingLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            business: this.props.business
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

    render() {
        const business = this.state.business;
        return (
            <Box>
                <ListItem button>
                    <div className='flex'>
                        <div className='logo'>
                            <Image src={business.image_url} style={ { borderRadius: 15, border: "2px solid black" }}
                                   alt={"Image preview here"} width={300} height={250} mode='fit' />
                        </div>
                        <Link to={{
                            pathname: "/GetBusiness/" + business.id
                        }}>
                            <div style={ { textAlign: "left", color: "black" } }>
                                <h2>{business.name}</h2>
                                <div style={ { paddingTop: 50 } }>
                                    <p>
                                        <IndigoRating id={business.id}/>
                                    </p>
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
                                paddingBottom: 60, textAlign: "right" }
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