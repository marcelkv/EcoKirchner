const pageManager = new PageManager();

function selectFile() {
    const fileSelector = document.getElementsByClassName('file-selector')[0];
    fileSelector.click();
}

function onFileSelected() {

    const fileInput = document.getElementsByClassName('file-selector')[0];
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const contents = e.target.result;
            console.log(contents);
        };

        reader.readAsText(file);
        pageManager.showCustomersPage();
    }
}