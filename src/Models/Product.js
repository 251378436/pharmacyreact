export class Product {
    constructor(product) {
        this.id = product.id || '';
        this.description = product.description || '';
        this.regularPrice = product.regularPrice || '';
        this.specialPrice = product.specialPrice || '';
        this.isHotProduct = product.isHotProduct || false;
        this.categoryId = product.categoryId || '';
        this.photo= product.photo;
        this.showPhoto = false;    
    }

    get photoUrl() {
        return require('@/assets/' + this.photo + '.png');
    }

    get currentPrice() {
        return this.specialPrice ? this.specialPrice : this.regularPrice;
    }
}