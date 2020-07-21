import React, { Component } from 'react';
import { Jumbotron, Button } from "react-bootstrap";
import { ListItem } from "@material-ui/core";
import fire from '../../config/Fire'
import PageHeader from "../PageAttributes/PageHeader";
import Searchbar from "../PageAttributes/Searchbar";
import SearchFilter from "../PageAttributes/SearchFilter";
import PageFooter from "../PageAttributes/PageFooter";
import CasesData from "../PageAttributes/CasesData";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }


    changeField(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    login(event) {
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then((u)=> {
        }).catch((error) => {
            return (
                <h1>Incorrect credentials!</h1>
            )
        });
    }

    signup(event) {
        event.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
            .catch((error) => {
                console.log(error)
        });
    }

    render() {
        return (
            <div>
                <Jumbotron className={"jumbotron-business"}>
                    <PageHeader user={this.props.user} />
                    <br />
                    <Searchbar />
                    <br />
                    <SearchFilter />
                </Jumbotron>
                <CasesData />
                <br />
                <h1>Login or Sign Up below</h1>
                <h5>Please note that both functions are performed from this form.</h5>
                <ListItem button style={
                    {
                        width: 600,
                        display: "inline-block",
                        marginTop: 50,
                        marginBottom: 60
                    }
                }>
                    <div>
                        <h6>Username (email): </h6>
                        <input onChange={this.changeField.bind(this)}
                               className="custom-control-inline form-control"
                               style={
                                   {
                                       width: 550,
                                       marginBottom: 30
                                   }
                               } type="email" name="username"
                               maxLength={30} placeholder={"Username"}
                        />

                        <h6>Password (six digits): </h6>
                        <input onChange={this.changeField.bind(this)}
                               className="custom-control-inline form-control"
                               style={
                                   {
                                       width: 550,
                                       marginBottom: 30
                                   }
                               } type="password" name="password"
                               placeholder={"Password"}
                        />

                        <Button type="submit" onClick={this.login.bind(this)}>
                            Login
                        </Button>

                        <Button type="submit" onClick={this.signup.bind(this)}
                            style={
                                {
                                    marginLeft: 20
                                }
                            }>

                            Sign Up
                        </Button>

                    </div>
                </ListItem>
                <PageFooter />
            </div>
        );
    }

}

export default Login;