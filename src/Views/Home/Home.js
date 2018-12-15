import React, { Component } from 'react';
import classnames from 'classnames';

import Navigation from '@/components/Navigation/Navigation';
import {Product} from '@/Models/Product';

const homwStyles = require('./Home.less');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategoryId: 'hot',
            searchText: '',
            products: [],
            filteredProducts: []
        };

        this.getProducts();
    }

    componentDidMount() {
        this.getFilteredProductsById();
    }

    getProducts() {
        console.log(this);
        this.state.products.push(new Product({
            id: '2549069',
            description: 'Goose Kiwi Go @ease Capsules 5 (Single Pack of 5 doses) p1',
            regularPrice: 9.99,
            specialPrice: 5.66,
            isHotProduct: true,
            categoryId: 'p1',
            photo: 'pic1'
        }))
        this.state.products.push(new Product({
          id: '2549070',
          description: 'Goose Kiwi Go @ease Capsules 5 (Single Pack of 5 doses) p2',
          regularPrice: 14.99,
          isHotProduct: true,
          categoryId: 'p2',
          photo: 'pic1'
      }))
      this.state.products.push(new Product({
        id: '2549071',
        description: 'Goose Kiwi Go @ease Capsules 5 (Single Pack of 5 doses) p3',
        regularPrice: 9.99,
        specialPrice: 5.66,
        categoryId: 'p3',
        photo: 'pic1'
      }))
      this.state.products.push(new Product({
        id: '2549072',
        description: 'Goose Kiwi Go @ease Capsules 5 (Single Pack of 5 doses) p4',
        regularPrice: 9.99,
        specialPrice: 5.66,
        categoryId: 'p4',
        photo: 'pic1'
      }))
      this.state.products.push(new Product({
        id: '2549073',
        description: 'Goose Kiwi Go @ease Capsules 5 (Single Pack of 5 doses) p5',
        regularPrice: 9.99,
        isHotProduct: true,
        categoryId: 'p5',
        photo: 'pic1'
      }))
    }

    getFilteredProductsById() {
        if(this.state.selectedCategoryId == 'hot') {
            this.setState({
                filteredProducts: this.state.products.filter(p => p.isHotProduct)
            });
        } else if (this.state.selectedCategoryId == 'all') {
            this.setState({
                filteredProducts: this.state.products
            });
        } else {
            this.setState({
                filteredProducts: this.state.products.filter(p => p.categoryId == this.state.selectedCategoryId)
            });
        }
    }

    changeCategory(id) {
        this.setState({ selectedCategoryId: id }, () => {
            this.getFilteredProductsById();
        });
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
                    <div id="list" className="col-9">
                        <div className="row">
                        {this.state.filteredProducts.map((product) =>
                            <div className="card card-special" key={product.id}>
                                <img  className="card-img-top" src={product.showPhoto ? product.photoUrl : ''} alt="点击显示图片" />
                                <div className="card-body">
                                    <div className="product-name">
                                        <span>{ product.description }</span>  
                                    </div>  
                                    <div className="price-box">
                                        <p className={classnames({'regular-deleted-price': product.specialPrice, 'regular-price' : !product.specialPrice })}>
                                            <span>NZ${product.regularPrice}</span>
                                        </p>
                                        {product.specialPrice ? 
                                            <p className={classnames('special-price')} >
                                                <span>NZ${product.specialPrice}</span>
                                            </p>
                                            : null
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;