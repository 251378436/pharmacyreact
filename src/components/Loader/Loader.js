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
                {/* <div v-show="isShowLoader" class="loaderPanel flex-column-h-center-v-center">
                    <div class="loader"></div>
                </div> */}
            </div>
        );
    }
}

export default Loader;
