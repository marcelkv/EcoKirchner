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
    const orders = csvReader.orders;
    this.initSaveButton(csvReader, orders);
    this.initCustomersFilters(csvReader.options, csvReader.customers, orders, csvReader.bank);
    this.initCustomersList(csvReader.customers, orders, csvReader.bank);
}

function initSaveButton(csvReader, orders) {
    const saveButton = document.getElementsByClassName('button save')[0];
    saveButton.onclick = handleSave.bind(null, csvReader, orders);
}

function initCustomersFilters(options, customers, orders, bank) {
    const filters = document.getElementsByClassName('customers-filter')[0];

    options.forEach(function (option, index) {
        const filterItem = document.createElement('div');
        filterItem.className = 'filter-item';

        const checkBox = document.createElement('div');
        checkBox.className = 'filter-checkbox';
        checkBox.onclick = function () { onCheckboxChanged(index, customers, orders, bank); };

        const filterText = document.createElement('div');
        filterText.className = 'filter-text';
        filterText.textContent = option;

        filterItem.appendChild(checkBox);
        filterItem.appendChild(filterText);
        filters.appendChild(filterItem);
    });

    setTimeout(() => this.onCheckboxChanged(0, customers, orders, bank), 100);
}

function initCustomersList(customers, orders, bank) {
    const list = document.getElementsByClassName("customers-list")[0];
    list.textContent = null;

    customers.forEach(function (customer) {
        const listItem = document.createElement('div');
        listItem.textContent = customer.firstName + " " + customer.lastName;
        listItem.onclick = function () { handleCustomerClick(customers, customer, orders, bank) };
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

function handleSave(csvReader, orders) {
    const csvWriter = new CsvWriter();
    csvWriter.downloadCSV(csvReader, orders);
}

function handleCustomerClick(customers, customer, orders, bank) {
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
    backButton.onclick = function () { onBackClick(customers, orders, bank) };

    const checkBoxSelectedClass = "checkbox-selected";
    const payedButton = document.getElementsByClassName('checkbox')[0];
    const deliveredButton = document.getElementsByClassName('checkbox')[1];

    if (order.payed) {
        payedButton.classList.add(checkBoxSelectedClass);
    }
    else {
        payedButton.classList.remove(checkBoxSelectedClass);
    }

    if (order.delivered) {
        deliveredButton.classList.add(checkBoxSelectedClass);
    }
    else {
        deliveredButton.classList.remove(checkBoxSelectedClass);
    }

    payedButton.onclick = function () { onPayedClicked(order) };
    deliveredButton.onclick = function () { onDeliveredClicked(order) };
}

function onCheckboxChanged(index, customers, orders, bank) {
    const checkBoxes = document.getElementsByClassName('filter-checkbox');

    if (checkBoxes.length > 0) {
        const checkBoxSelectedClass = 'checkbox-selected';

        if (index >= 0) {
            if (checkBoxes[index].classList.contains(checkBoxSelectedClass)) {
                checkBoxes[index].classList.remove(checkBoxSelectedClass);
            }
            else {
                checkBoxes[index].classList.add(checkBoxSelectedClass);
            }
        }

        const ordered = checkBoxes[0].classList.contains(checkBoxSelectedClass);
        const payed = checkBoxes[1].classList.contains(checkBoxSelectedClass);
        const delivered = checkBoxes[2].classList.contains(checkBoxSelectedClass);

        if (ordered) {
            const ordersFiltered = orders.filter(order => order.payed === payed && order.delivered === delivered);
            const customersFiltered = this.getCustomersFromOrders(ordersFiltered);
            this.initCustomersList(customersFiltered, ordersFiltered, bank);
        }
        else {
            const ordersFiltered = [];
            const customersFiltered = (payed || delivered) ? [] : this.getCustomersWithoutOrders(customers, orders);
            this.initCustomersList(customersFiltered, ordersFiltered, bank);
        }
    }
}

function getCustomersFromOrders(orders) {
    return orders.map(order => order.customer)
}

function getCustomersWithoutOrders(customers, orders) {
    return customers.filter(function (customer) {
        return !orders.some(function (order) {
            return (order.customer.firstName === customer.firstName) && (order.customer.lastName === customer.lastName);
        });
    });
}

function onBackClick(customers, orders, bank) {
    this.onCheckboxChanged(-1, customers, orders, bank);
    pageManager.showCustomersPage();
}

function onPayedClicked(order) {
    const checkBoxSelectedClass = "checkbox-selected";
    const payedButton = document.getElementsByClassName('checkbox')[0];

    if (payedButton.classList.contains(checkBoxSelectedClass)) {
        payedButton.classList.remove(checkBoxSelectedClass);
    }
    else {
        payedButton.classList.add(checkBoxSelectedClass);
    }

    order.payed = payedButton.classList.contains(checkBoxSelectedClass);
}

function onDeliveredClicked(order) {
    const checkBoxSelectedClass = "checkbox-selected";
    const deliveredButton = document.getElementsByClassName('checkbox')[1];

    if (deliveredButton.classList.contains(checkBoxSelectedClass)) {
        deliveredButton.classList.remove(checkBoxSelectedClass);
    }
    else {
        deliveredButton.classList.add(checkBoxSelectedClass);
    }

    order.delivered = deliveredButton.classList.contains(checkBoxSelectedClass);
}