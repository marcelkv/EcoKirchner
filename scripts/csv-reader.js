class CsvReader {
    constructor(file, startIndex) {
        this.file = file;
        this.startIndex = startIndex || 8;
        this.onLoadCsvComplete = null;
        this.reader = new FileReader();
        this.reader.onload = this.onLoadCsv.bind(this);
        this.reader.onloadend = this.dispatchLoadCsvEvent.bind(this);
    }

    get bank() {
        if (!this.lines || this.lines.length === 0) {
            return;
        }
        const columns = this.lines[0].split(';');
        return new Bank(columns[0], columns[1], columns[2], columns[3])
    }

    get products() {
        if (!this.lines || this.lines.length === 0) {
            return;
        }

        const names = this.lines[1].split(';');
        const costs = this.lines[2].split(';');
        const totalItems = this.lines[3].split(";");
        const products = [];

        for (let i = this.startIndex; i < names.length; i++) {
            const costString = costs[i].split(' ')[0];
            const cost = roundToTwoDecimals(Number(costString.replace(',', '.')));
            const total = roundToTwoDecimals(Number(totalItems[i]));
            const product = new Product(names[i], cost, total);
            products.push(product);
        }
        return products;
    }

    get customers() {
        if (!this.lines || this.lines.length === 0) {
            return;
        }

        const customers = [];

        for (let i = 4; i < this.lines.length; i++) {
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

        for (let i = 4; i < this.lines.length; i++) {
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

            let payed = false;
            let delivered = false;

            if (columns.length > 5 && columns[6]) {
                payed = columns[6].trim().length > 0;
            }
            if (columns.length > 6 && columns[7]) {
                delivered = columns[7].trim().length > 0;
            }

            if (productOrders.length > 0) {
                const order = new Order(customer, productOrders, delivered, payed);
                orders.push(order);
            }
        }

        return orders;
    }

    get options() {
        if (!this.lines || this.lines.length === 0) {
            return;
        }

        const options = [];
        const columns = this.lines[1].split(';');

        options.push(columns[5].trim());
        options.push(columns[6].trim());
        options.push(columns[7].trim());

        return options
    }

    readFile() {
        this.reader.readAsText(this.file);
    }

    onLoadCsv(e) {
        const contents = e.target.result;
        this.lines = contents.split('\n');
    }

    dispatchLoadCsvEvent() {
        if (typeof this.onLoadCsvComplete === 'function') {
            this.onLoadCsvComplete();
        }
    }
}