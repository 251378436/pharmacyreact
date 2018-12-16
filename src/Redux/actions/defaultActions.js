export const addToCart = (productId) => dispatch => {
    if(typeof(Storage) !== 'undefined') {
        if (localStorage.shoppingCart) {
            let items = JSON.parse(localStorage.getItem("shoppingCart") || '');
            let item = items.find(x => x.productId === productId);
            item ? item.quantity++ : items.push({productId: productId, quantity: 1});
            localStorage.setItem('shoppingCart', JSON.stringify(items));
        } else {
            let items = [];
            items[0] = { productId: productId, quantity: 1};
            localStorage.setItem('shoppingCart', JSON.stringify(items));
        }
    } else {
        // this._vm.$dialog.alert('Sorry, your browser does not support web storage...', {okText: '继续'});
        console.log("This is not avalable");
    }
}

export function subtractNumber(number) {
    return {
        type: "SUBTRACT",
        payload: number
    }
}

