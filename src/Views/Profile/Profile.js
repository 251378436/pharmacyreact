import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import classnames from 'classnames';
import {connect} from "react-redux";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    userLogout() {
        localStorage.removeItem('token');
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="profile">
                <h1>This page is profile</h1>
                <button className="btn btn-primary" onClick={() => this.userLogout()}>退出</button>
            </div>
        );
    }
}

export default withRouter(Profile);