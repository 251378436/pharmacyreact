import React, { Component } from 'react';
import classnames from 'classnames';

const menuBarStyles = require('./MenuBar.less');

class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // toggle box is closed initially
            selectedPage: 'home',
        };

        //this.changePage = this.changePage.bind(this);
    }

    changePage(item) {
        this.setState({
            selectedPage: item,
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div onClick={() => this.changePage('home')} className={classnames('col-4 text-center', {'active': this.state.selectedPage === 'home'})} >
                        <i className="fa fa-home"></i>
                    </div>
                    <div onClick={() => this.changePage('shoppingcart')} className={classnames('col-4 text-center', {'active': this.state.selectedPage === 'shoppingcart'})} >
                        <i className="fa fa-cart-arrow-down"></i>
                    </div>
                    <div onClick={() => this.changePage('profile')} className={classnames('col-4 text-center', {'active': this.state.selectedPage === 'profile'})} >
                        <i className="fa fa-user-circle"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuBar;