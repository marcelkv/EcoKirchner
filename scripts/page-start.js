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
    this.initCustomersFilters(csvReader.options, csvReader.customers, csvReader.orders, csvReader.bank);
    this.initCustomersList(csvReader.customers, csvReader.orders, csvReader.bank);
}

function initCustomersFilters(options, customers, orders, bank) {
    const filters = document.getElementsByClassName('customers-filter')[0];

    options.forEach(function (option, index) {
        const filterItem = document.createElement('div');
        filterItem.className = 'filter-item';

        const checkBox = document.createElement('input');
        checkBox.checked = (index === 0);
        checkBox.className = 'filter-checkbox';
        checkBox.type = 'checkbox';
        checkBox.value = false;
        checkBox.onchange = function () { onCheckboxChanged(customers, orders, bank); };

        const filterText = document.createElement('div');
        filterText.className = 'filter-text';
        filterText.textContent = option;

        filterItem.appendChild(checkBox);
        filterItem.appendChild(filterText);
        filters.appendChild(filterItem);
    });
}

function initCustomersList(customers, orders, bank) {
    const list = document.getElementsByClassName("customers-list")[0];
    list.textContent = null;

    customers.forEach(function (customer) {
        const listItem = document.createElement('div');
        listItem.textContent = customer.firstName + " " + customer.lastName;
        listItem.onclick = function () { handleCustomerClick(customer, orders, bank) };
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

function handleCustomerClick(customer, orders, bank) {
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

        const iban = document.getElementsByClassName('iban')[0];
        iban.innerHTML = bank.iban;
        const bic = document.getElementsByClassName('bic')[0];
        bic.innerHTML = bank.bic;
        const email = document.getElementsByClassName('email')[0];
        email.innerHTML = bank.email;
        const phone = document.getElementsByClassName('phone')[0];
        phone.innerHTML = bank.phone;
    }

    const backButton = document.getElementById('backButton');
    backButton.onclick = function () { onBackClick() }
}

function onCheckboxChanged(customers, orders, bank) {
    const checkBoxes = document.getElementsByClassName('filter-checkbox');

    if (checkBoxes.length > 0) {
        const ordered = checkBoxes[0].checked;
        const payed = checkBoxes[1].checked;
        const delivered = checkBoxes[2].checked;

        const ordersFiltered = orders.filter(order => order.payed === payed &&
            order.delivered === delivered);

        const customersFiltered = ordered ? ordersFiltered.map(order => order.customer) : customers;

        this.initCustomersList(customersFiltered, ordersFiltered, bank);
    }
}

function onBackClick() {
    pageManager.showCustomersPage();
}