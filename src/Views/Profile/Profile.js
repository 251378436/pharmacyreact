import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from "react-redux";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="profile">
                <h1>This page is profile</h1>
                <button className="btn btn-primary">退出</button>
            </div>
        );
    }
}

export default Profile;