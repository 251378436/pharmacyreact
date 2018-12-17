import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from "react-redux";

import Navigation from '@/components/Navigation/Navigation';
import {Product} from '@/Models/Product';
import {addToCart} from '@/Redux/actions/defaultActions';

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

    getFilteredProductsBySearch() {
        if(this.state.searchText) {
            this.setState(prevState => {
                var criterias = this.state.searchText.trim().split(' ');
                var newFilteredProducts = [...prevState.products];
                criterias.forEach(criteria => {
                    newFilteredProducts = newFilteredProducts.filter(p => p.description.toLowerCase().includes(criteria.toLowerCase()));
                });

                return {
                    filteredProducts: newFilteredProducts,
                    selectedCategoryId: '',
                    searchText: prevState.searchText.trim()
                }
            })
        } 
    }

    changeCategory(id) {
        this.setState({ selectedCategoryId: id }, () => {
            this.getFilteredProductsById();
        });
    }

    showProductPhoto(id) {
        this.setState(prevState => {
            const newProducts = [...prevState.products];
            newProducts.filter(x => x.id === id).map(x => {
                x.showPhoto = true;
                return x;
            });
            return {products: newProducts}
        })

    }

    render() {
        return (
            <div id="home">
                <div id="search">
                    <div className="input-group">
                        <input type="text" className="form-control" value={this.state.searchText} onChange={(e) => {this.setState({searchText: e.target.value});}} placeholder="查找你需要购买的物品" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" onClick={() => this.getFilteredProductsBySearch()} >
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
                                <img  className="card-img-top" src={product.showPhoto ? product.photoUrl : ''} alt="点击显示图片" onClick={() => this.showProductPhoto(product.id)} />
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
                                <div className="card-footer">
                                    <button type="button" title="添加到购物车" className="btn btn-cart" onClick={() => this.props.addToCart(product.id)}>
                                        <span>添加到购物车</span>
                                    </button>
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

const mapStateToProps = (state) => {
    return {
        reducer: state.reducer,
    };
  };
  
  const mapDispatchToProps = {
    addToCart,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);