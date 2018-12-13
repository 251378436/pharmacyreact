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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 text-center">
                        <i className="fa fa-home"></i>
                    </div>
                    <div className="col-4 text-center" >
                        <i className="fa fa-cart-arrow-down"></i>
                    </div>
                    <div className="col-4 text-center">
                        <i className="fa fa-user-circle"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuBar;