import React, { Component } from 'react';

import Navigation from '@/components/Navigation/Navigation';

const homwStyles = require('./Home.less');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategoryId: 'hot',
        };
    }

    changeCategory(id) {
        this.setState({ selectedCategoryId: id });
    }

    render() {
        return (
            <div id="home">
                <div id="search">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="查找你需要购买的物品" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" >
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="content" className="row">
                    <div id="navigation" className="col-3">
                        <Navigation selectedCategoryId={this.state.selectedCategoryId} changeCategory={(id) => this.changeCategory(id)}></Navigation>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;