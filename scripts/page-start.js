const pageManager = new PageManager();

function selectFile() {
    const fileSelector = document.getElementsByClassName('file-selector')[0];
    fileSelector.click();
}

function onFileSelected() {
    const fileInput = document.getElementsByClassName('file-selector')[0];
    const file = fileInput.files[0];
    const csvReader = new CsvReader(file);
    csvReader.onLoadCsvComplete = handleLoadCsvComplete.bind(null, csvReader);
    csvReader.readFile();
    pageManager.showCustomersPage();
}

function handleLoadCsvComplete(csvReader) {
    console.log(csvReader.orders);
    this.initCustomersList(csvReader.customers, csvReader.orders);
}

function initCustomersList(customers, orders) {
    const list = document.getElementsByClassName("customers-list")[0];

    customers.forEach(function (customer) {
        const listItem = document.createElement('div');
        listItem.textContent = customer.firstName + " " + customer.lastName;
        listItem.onclick = function () { handleCustomerClick(customer, orders) };
        listItem.onmouseover = function () {
            listItem.classList.add('hovered');
        }
        listItem.onmouseleave = function () {
            listItem.classList.remove('hovered');
        }
        listItem.classList.add('customer-item');
        list.appendChild(listItem);
    });
}

function handleCustomerClick(customer, orders){
    pageManager.showOrderPage();

    const order = orders?.find(order => order.customer.firstName === customer.firstName && order.customer.lastName === customer.lastName);
    if (order) {
        const table = document.getElementById('selectedCustomerProducts');
        const tbody = table.querySelector('tbody');
        tbody.innerHTML = '';

        order.productOrders.forEach(function (productOrder) {
            const row = document.createElement('tr');

            const name = document.createElement('td');
            const cost = document.createElement('td');
            const quantity = document.createElement('td');
            const total = document.createElement('td');
            name.textContent = productOrder.product.name;
            cost.textContent = productOrder.product.cost + " €";
            quantity.textContent = productOrder.quantity;
            total.textContent = productOrder.cost + " €";
            name.classList.add('firstCol');

            row.appendChild(name);
            row.appendChild(cost);
            row.appendChild(quantity);
            row.appendChild(total);

            tbody.appendChild(row);
        });

        const total = document.getElementById('selectedCustomerTotal');
        total.innerHTML = order.cost + " €";
        const selectedCustomerName = document.getElementById('selectedCustomerName');
        selectedCustomerName.innerHTML = customer.firstName + " " + customer.lastName;
    }

    const backButton = document.getElementById('backButton');
    backButton.onclick = function () { onBackClick() }
}

function onBackClick(){
    pageManager.showCustomersPage();
}