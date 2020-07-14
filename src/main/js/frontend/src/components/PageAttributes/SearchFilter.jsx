import React, { Component } from 'react';
import  { Button } from "react-bootstrap";
import './PageAttributes.css'
import {Link} from "react-router-dom";

class Searchbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialState: "Search for businesses in Indianapolis...",
            currentText: " "
        }
    }


    render() {
        return (
            <div>
                <Link to="/getBusinesses/restaurants">
                    <Button className={"btn-primary mx-2"}> Restaurants </Button>
                </Link>
                <Link to="/getBusinesses/hotels">
                    <Button className={"btn-primary mx-2"}> Hotels </Button>
                </Link>
                <Link to="/getBusinesses/tourist attractions">
                    <Button className={"btn-primary mx-2"}> Tourist Attractions </Button>
                </Link>
            </div>
        );
    }

}

export default Searchbar;