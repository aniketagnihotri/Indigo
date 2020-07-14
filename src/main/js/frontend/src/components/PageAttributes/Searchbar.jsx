import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import SearchIcon from "@material-ui/icons/Search";
import {
    Link
} from "react-router-dom";

class Searchbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: " asd "
        }
    }

    style = {
        height: 40,
        fontSize: 16,
        width: 600
    };

    changeText(receivedSearchTerm) {
        this.setState({searchTerm:receivedSearchTerm })
    }

    render() {
        const initialState = "Search for businesses in Indianapolis..."
        return (
            <form>
                <div className="flexbox-container">
                    <input ref="termToSearch" style={this.style} type="text" className="custom-control-inline form-control"
                           placeholder= {initialState}
                           onChange={event => this.changeText(event.target.value)}
                    />
                    <Link to={{
                        pathname: "/GetBusinesses/" + this.state.searchTerm,
                    }}>
                        <Button type="submit">
                            <SearchIcon />
                        </Button>
                    </Link>
                </div>
            </form>
        );
    }

}

export default Searchbar;