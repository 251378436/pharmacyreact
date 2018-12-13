import React, { Component } from 'react';

const menuBarStyles = require('./MenuBar.less');

class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // toggle box is closed initially
            isOpened: false,
        };
    }

    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4 text-center">
                        <i class="fas fa-home"></i>
                    </div>
                    <div class="col-4 text-center" >
                        <i class="fas fa-cart-arrow-down"></i>
                    </div>
                    <div class="col-4 text-center">
                        <i class="fas fa-user-circle"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuBar;