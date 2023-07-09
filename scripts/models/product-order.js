class ProductOrder {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    get cost() {
        if (!this.product) {
            return 0;
        }

        return roundToTwoDecimals(this.product.cost * this.quantity);
    }
}