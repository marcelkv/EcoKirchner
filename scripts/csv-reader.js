class CsvReader {
    constructor(file, startIndex) {
        this.startIndex = startIndex || 8;
        const reader = new FileReader();
        reader.onload = this.onLoadCsv.bind(this);
        reader.readAsText(file);
    }

    get products() {
        if (!this.lines || this.lines.length === 0) {
            return;
        }

        const names = this.lines[0].split(';');
        const costs = this.lines[1].split(';');
        const products = [];

        for (let i = this.startIndex; i < names.length; i++) {
            const costString = costs[i].split(' ')[0];
            const cost = roundToTwoDecimals(Number(costString.replace(',', '.')));
            const product = new Product(names[i], cost);
            products.push(product);
        }
        return products;
    }

    get customers() {
        if (!this.lines || this.lines.length === 0) {
            return;
        }

        const customers = [];

        for (let i = 2; i < this.lines.length; i++) {
            const firstName = this.lines[i].split(';')[1];
            const lastName = this.lines[i].split(';')[0];
            const customer = new Customer(firstName, lastName);
            customers.push(customer);
        }

        return customers;
    }

    get orders() {
        if (!this.lines || this.lines.length === 0) {
            return;
        }

        const orders = [];

        for (let i = 2; i < this.lines.length; i++) {
            const columns = this.lines[i].split(';');
            const customer = this.customers.find(customer => customer.firstName === columns[1] && customer.lastName === columns[0]);
            const productOrders = [];
            for (let j = 8; j < columns.length; j++) {
                const productIndex = j - 8;
                const quantity = Number(columns[j]);
                if (!isNaN(quantity) && quantity > 0) {
                    const product = this.products[productIndex];
                    const productOrder = new ProductOrder(product, quantity);
                    productOrders.push(productOrder);
                }
            }
            const order = new Order(customer, productOrders);
            orders.push(order);
        }

        return orders;
    }

    onLoadCsv(e) {
        const contents = e.target.result;
        this.lines = contents.split('\n');
    }
}