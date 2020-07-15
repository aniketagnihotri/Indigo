import React, { Component } from 'react';
import { List, ListItem, Divider, ListItemText } from "@material-ui/core/";
import PageHeader from "../PageAttributes/PageHeader";
import PageFooter from "../PageAttributes/PageFooter";
import Searchbar from "../PageAttributes/Searchbar";
import SearchFilter from "../PageAttributes/SearchFilter";
import {Link} from "react-router-dom";

class AboutUs extends Component {

    render() {
        return (
            <div>
                <PageHeader />
                <Searchbar />
                <br />
                <SearchFilter />
                <br />
                <h1 style={ { marginLeft: 20, textAlign: "left"} }>About us!</h1>
                <p style={ { marginLeft: 40, marginRight: 40, textAlign: "left"} }>
                    sample text about ussample text about ussample text about us
                    sample text about ussample text about ussample text about ussample text about us
                    sample text about ussample text about ussample text about ussample text about us
                    sample text about ussample text about ussample text about ussample text about us
                    sample text about ussample text about ussample text about ussample text about us
                </p>
                <List component="nav" aria-label="mailbox folders">
                    <Link to={{
                        pathname: "/Home"
                    }}>
                        <ListItem button>
                            <ListItemText>hello</ListItemText>
                        </ListItem>
                    </Link>
                    <Divider />
                    <ListItem button divider>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Trash" />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <ListItemText primary="Spam" />
                    </ListItem>
                </List>
                <PageFooter />
            </div>
        );
    }

}

export default AboutUs;