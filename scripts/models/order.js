class Order {
    constructor(customer, productOrders, delivered, payed) {
        this.customer = customer;
        this.productOrders = productOrders;
        this.delivered = delivered;
        this.payed = payed;
    }

    get cost() {
        if (!this.productOrders) {
            return 0;
        }

        let cost = 0;
        for (let i = 0; i < this.productOrders.length; i++) {
            cost += this.productOrders[i].cost;
        }
        return roundToTwoDecimals(cost);
    }
}