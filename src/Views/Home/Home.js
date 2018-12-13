import React, { Component } from 'react';

const homwStyles = require('./Home.less');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // toggle box is closed initially
            isOpened: false,
        };
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>This is home page</h1>
            </div>
        );
    }
}

export default Home;