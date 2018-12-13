import React, { Component } from 'react';

const loaderStyles = require('./Loader.less');

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // toggle box is closed initially
            isOpened: false,
        };
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Loader;
