import {Product} from '@/Models/Product';

export class ShoppingCartItem extends Product {
    constructor(output) {
        super(output); 
        this.quantity = output.quantity || '';
    }

    get calculatedAmount() {
        return this.quantity * this.currentPrice;
    }
}