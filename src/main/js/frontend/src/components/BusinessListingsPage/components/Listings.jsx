import React, { Component } from 'react';
import './Listings.css';
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ListItem, Divider, ListItemText, Box} from "@material-ui/core";

class Listings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: this.props.searchTerm,
            businesses: []
        }
    }

    async componentWillReceiveProps(newProps) {
        await this.setState({ searchTerm : newProps.searchTerm } )
        this.forceUpdate(this.componentDidMount());
        console.log("new props " + newProps.searchTerm)
        console.log("new state " + this.state.searchTerm)
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentDidMount() {
        const params = this.props.searchTerm + "/10";
        fetch(`/api/yelp/searchBusinessListingByTerm/` + params,{
            method: 'GET',
                headers : {
            'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => this.setState({ "businesses" : response }))
        console.log("component mounted")
    }

    render() {
        return (
            <div>
                {this.state.businesses.length === 0 ? (
                    <h2>
                        No results found.
                    </h2>
                ) : (
                    this.state.businesses.map(function (business, index) {
                        return (
                            <Link to={{
                                pathname: "/GetBusiness/" + business.id
                            }}>
                                <ListItem button>
                                    {/*<Box style={ { display: "block"} }>*/}
                                    {/*    <Image src={business.image_url} style={ { border: "2px solid black" }}*/}
                                    {/*           alt={"Image preview here"} width={300} height={250} mode='fit' />*/}
                                    {/*    <ListItemText>{business.name}</ListItemText>*/}
                                    {/*</Box>*/}
                                    <div className='flex'>
                                        <div className='logo'>
                                            <Image src={business.image_url} style={ { border: "2px solid black" }}
                                                   alt={"Image preview here"} width={300} height={250} mode='fit' />
                                        </div>
                                        <div>
                                            <h2>{business.name}</h2>
                                            <h6 >{business.categories[0]} {business.categories[1]}</h6>
                                            {/*<p>*/}
                                            {/*    {job.postedAt} * {job.contract} * {job.location}*/}
                                            {/*</p>*/}
                                            {/*<p>*/}
                                            {/*    {job.languages ? job.languages.map((language) =>*/}
                                            {/*        <span>| {language} | </span>) :  ''}*/}

                                            {/*    {job.tools ? job.tools.map((tool) =>*/}
                                            {/*        <span>| {tool} |</span>) :  ''}*/}
                                            {/*</p>*/}
                                        </div>
                                    </div>
                                </ListItem>
                                <Divider />
                            </Link>

                        );
                    }))}
            </div>
        );
    }

}

export default Listings ;