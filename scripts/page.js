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

    showStartPage() {
        this.hideElement(this.customersPage);
        this.hideElement(this.orderPage);
        this.showElement(this.startPage);
    }

    showCustomersPage(){
        this.hideElement(this.startPage);
        this.hideElement(this.orderPage);
        this.showElement(this.customersPage);
    }

    showOrderPage() {
        console.log(this.startPage);
        this.hideElement(this.startPage);
        this.hideElement(this.customersPage);
        this.showElement(this.orderPage);
    }

    hideElement(element) {
        element.style.display = 'none';
    }

    showElement(element) {
        element.style.display = 'flex';
    }
}