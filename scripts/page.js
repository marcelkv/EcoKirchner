class PageManager {
    get startPage() {
        return document.getElementsByClassName('page start')[0];
    }

    get customersPage() {
        return document.getElementsByClassName('page customers')[0];
    }

    get orderPage() {
        return document.getElementsByClassName('page order')[0];
    }

    get productsPage() {
        return document.getElementsByClassName('page products')[0];
    }

    showStartPage() {
        this.hideElement(this.customersPage);
        this.hideElement(this.orderPage);
        this.hideElement(this.productsPage);
        this.showElement(this.startPage);
    }

    showCustomersPage() {
        this.hideElement(this.startPage);
        this.hideElement(this.orderPage);
        this.hideElement(this.productsPage);
        this.showElement(this.customersPage);
    }

    showOrderPage() {
        this.hideElement(this.startPage);
        this.hideElement(this.customersPage);
        this.hideElement(this.productsPage);
        this.showElement(this.orderPage);
    }

    showProductsPage() {
        this.hideElement(this.startPage);
        this.hideElement(this.customersPage);
        this.hideElement(this.orderPage);
        this.showElement(this.productsPage);
    }

    hideElement(element) {
        element.style.display = 'none';
    }

    showElement(element) {
        element.style.display = 'flex';
    }
}