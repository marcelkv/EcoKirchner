class PageManager {
    get startPage() {
        return document.getElementsByClassName('page start')[0];
    }

    get customersPage() {
        return document.getElementsByClassName('page customers')[0];
    }

    showStartPage() {
        this.hideElement(this.customersPage);
        this.showElement(this.startPage);
    }

    showCustomersPage(){
        this.hideElement(this.startPage);
        this.showElement(this.customersPage);
    }

    hideElement(element) {
        element.style.display = 'none';
    }

    showElement(element) {
        element.style.display = 'flex';
    }
}