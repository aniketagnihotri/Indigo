import React, { Component } from "react";
import {Button, Image} from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";
import { ListItem } from "@material-ui/core";
import IndigoRating from "../../PageAttributes/IndigoRating";
import BusinessResponse from "./BusinessResponse";

class BusinessDataLayout extends Component {

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
        const images = [
            { url: business.photos[0] },
            { url: business.photos[1] },
            { url: business.photos[2] },
        ];
        return (
            <ListItem button>
                <div className='flex'>
                    <div style={ { border: "2px solid black" } }>
                        <SimpleImageSlider
                            width={800}
                            height={504}
                            images={images}
                        />
                    </div>

                    <div style={ { textAlign: "left", color: "black", paddingLeft: 20 } }>
                        <h1>{business.name}</h1>
                        {this.getOpen()}
                        <div style={ { paddingTop: 40 } }>
                            <p>
                                <IndigoRating id={business.id}/>
                            </p>
                            <p className="lead" style={
                                { fontSize: 16,
                                    textAlign: "left", lineHeight: -1 }
                            }>
                                <br />Yelp Rating: {business.rating}
                                <br />Price: {business.price}
                                <br />Street Address: {business.displayAddress[0]}
                                <br />Phone: {business.displayPhone}
                            </p>
                            <BusinessResponse id={business.id} />
                        </div>
                    </div>

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
                        <a href={business.url}>
                            <Button type="submit">
                                View Yelp Listing
                            </Button>
                        </a>
                    </div>

                </div>
            </ListItem>
        )
    }

}

export default BusinessDataLayout;