import React, { Component } from 'react';
import classnames from 'classnames';
import { Category } from '@/Models/Category'

const navigationStyles = require('./Navigation.less');

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // toggle box is closed initially
            categories: [],
        };

        this.state.categories.push(new Category({id : 'hot', displayName : '热门商品'}));
        this.state.categories.push(new Category({id : 'all', displayName : '全部'}));
        this.state.categories.push(new Category({id : 'p1', displayName : '美容养颜'}));
        this.state.categories.push(new Category({id : 'p2', displayName : '瘦身减肥'}));
        this.state.categories.push(new Category({id : 'p3', displayName : '男性保健'}));
        this.state.categories.push(new Category({id : 'p4', displayName : '女性保健'}));
        this.state.categories.push(new Category({id : 'p5', displayName : '儿童专区'}));
        this.state.categories.push(new Category({id : 'p6', displayName : '老人专区'}));
    }

    static defaultProps = { 
        selectedCategoryId: 'hot'
    }

    changeSelectedCategoryId(id) {
        // console.log(id);
        this.props.changeCategory(id);
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                {this.state.categories.map((category) =>
                    <li key={category.id} 
                    className={classnames('list-group-item', {'active': this.props.selectedCategoryId == category.id})}
                    onClick={() => this.changeSelectedCategoryId(category.id)}>
                        {category.displayName}
                    </li>
                )}
                </ul>
            </div>
        );
    }
}

export default Navigation;