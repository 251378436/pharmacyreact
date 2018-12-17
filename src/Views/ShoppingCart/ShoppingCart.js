import React, { Component } from 'react';
import {Product} from '@/Models/Product';
import {ShoppingCartItem} from '@/Models/ShoppingCartItem';

const shoppingCartStyles = require('./ShoppingCart.less');

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
			products: [],
			localStorage: [],
			shoppingCartList: [],
		};
		
		this.getProducts();
	}

	componentDidMount() {
		this.updateShoppingCart();
	}

	updateShoppingCart() {
		this.getDataFromLocalStorage();
	}
	
	getDataFromLocalStorage() {
		if(typeof(Storage) !== 'undefined') {
		  if (localStorage.shoppingCart) {
			  var items = JSON.parse(localStorage.getItem("shoppingCart") || '');
			  //console.log(items);
			  this.setState(preState => ({
				  localStorage: items,
			  }), () => {this.getShoppingCartList()});
		  }
		} else {
			alert('Sorry, your browser does not support web storage...');
		}
	}

	getProducts() {
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

	getShoppingCartList() {
		var newShoppingCartList = [];
		console.log(this.state.localStorage);
		console.log(this.state.products);
		this.state.localStorage.forEach(x => {
			let item = this.state.products.find(p => p.id === x.productId);
			item.quantity = x.quantity;
			newShoppingCartList.push(new ShoppingCartItem(item));
		});

		this.setState(preState => ({
			shoppingCartList: newShoppingCartList,
		}));
	}

	updateDataInLocalStorage() {
		if(typeof(Storage) !== 'undefined') {
			localStorage.setItem('shoppingCart', JSON.stringify(this.state.localStorage));
		} else {
			alert('Sorry, your browser does not support web storage...');
		}
	}

	decreaseQuantity(productId) {
		this.setState(prevState => {
			const newLocalStorage = [...prevState.localStorage];
			var item = newLocalStorage.find(x => x.productId === productId);
			if((item.quantity - 1)) {
				item.quantity--;
			} else {
				var index = newLocalStorage.indexOf(item);
				newLocalStorage.splice(index, 1);
			}

			return {
				localStorage: newLocalStorage
			};
		}, () => {
			this.updateDataInLocalStorage();
			this.updateShoppingCart();
		});
	}

	increaseQuantity(productId) {
		this.setState(prevState => {
			const newLocalStorage = [...prevState.localStorage];
			var item = newLocalStorage.find(x => x.productId === productId);
			item.quantity++;

			return {
				localStorage: newLocalStorage
			};
		}, () => {
			this.updateDataInLocalStorage();
			this.updateShoppingCart();
		});
	}

    render() {
        return (
			<div className="shoppingcart">
				<h1>购物车</h1>
				<div className="container">
					<div className="row font-weight-bold py-2">
						<div className="col-6">
							商品名称
						</div>
						<div className="col-2">
							单价
						</div>
						<div className="col-2">
							数量
						</div>
						<div className="col-2">
							小计
						</div>
					</div>
					{this.state.shoppingCartList.map((item) =>
					<div className="row py-2" key={item.id}>
						<div className="col-6">
							{item.description}
						</div>
						<div className="col-2">
							{item.currentPrice}
						</div>
						<div className="col-2">
							<i className="fa fa-minus" onClick={() => this.decreaseQuantity(item.id)} ></i> {item.quantity} <i className="fa fa-plus" onClick={() => this.increaseQuantity(item.id)}></i>
						</div>
						<div className="col-2">
							${item.calculatedAmount} NZD <i className="fa fa-trash-alt" ></i>
						</div>
					</div>
					)}
				</div>
			</div>
		);
    }
}

export default ShoppingCart;
