import React, { Component } from 'react';
import "./RecommendedBusinesses.css"

class RecommendedBusinesses extends Component {

    constructor(props) {
        super(props);

        this.state = {
            businesses: []
        }
    }

    componentDidMount() {
        fetch(`api/yelp/searchBusinessListingRandom/3`, {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(results => results.json())
            .then(results => this.setState({ "businesses" : results }))
    }

    style = {
        height: 100,
        width: 100,
        border: 2
    }


    render() {
        console.log(this.state.businesses[0])
        return (
            <ul>
                {this.state.businesses.map(function (business, index) {
                    return (
                        <div>
                            <h1 className={"flexbox-container-img"}>{business.name}</h1>
                        </div>
                    )
                })}
            </ul>
        );
    }

}

export default RecommendedBusinesses;