import React, { Component } from 'react';
import "./RecommendedBusinesses.css"

class RecommendedBusinesses extends Component {

    constructor(props) {
        super(props);

        this.state = {
            businesses: []
        }
    }

    async componentDidMount() {
        fetch(`api/yelp/searchBusinessListingRandom/3`, {
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => this.setState({ businesses : data }))
    }

    style = {
        height: 100,
        width: 100,
        border: 2
    }


    render() {
        console.log(this.state.businesses[0])
        return (
            <div className={"flex-container-img"}>

                {/*<img style={this.style} className={"left"} src={"https://s3-media3.fl.yelpcdn.com/bphoto/2L6PjJzmbdSNCL79rvog6w/o.jpg"} alt="No picture available" />*/}
                {/*<p>Name</p>*/}

                {/*<img style={this.style} src={"https://s3-media3.fl.yelpcdn.com/bphoto/2L6PjJzmbdSNCL79rvog6w/o.jpg"} alt="No picture available" />*/}
                {/*<p>Name</p>*/}

                {/*<img style={this.style} src={"https://s3-media3.fl.yelpcdn.com/bphoto/2L6PjJzmbdSNCL79rvog6w/o.jpg"} alt="No picture available" />*/}
                {/*<p>Name</p>*/}

            </div>

        );
    }

}

export default RecommendedBusinesses;