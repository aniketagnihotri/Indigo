import React, { Component } from 'react';
import { List, ListItem, Divider, ListItemText } from "@material-ui/core/";
import PageHeader from "../PageAttributes/PageHeader";
import PageFooter from "../PageAttributes/PageFooter";
import Searchbar from "../PageAttributes/Searchbar";

class AboutUs extends Component {

    render() {
        return (
            <div>
                <PageHeader />
                <Searchbar />
                <br />
                <h1>about us!</h1>
                <List component="nav" aria-label="mailbox folders">
                    <ListItem button>
                        <ListItemText primary="Inbox" />
                    </ListItem>
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