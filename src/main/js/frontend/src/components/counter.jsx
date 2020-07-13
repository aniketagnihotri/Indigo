import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1
    }

    styles = {
        fontSize: 30,
    };

    render() {
        return (
            <div className={"Container"}>
                <span align={"right"} style = {this.styles} className={"badge badge-primary m-2"}>{this.formatCount()}</span>
                <button style = {this.styles} className={"btn btn-primary btn-sm"}>sample</button>
            </div>
        );
    }

    formatCount() {
        return this.state.count
    };
}

export default Counter;