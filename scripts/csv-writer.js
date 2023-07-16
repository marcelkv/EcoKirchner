class CsvWriter {
    downloadCSV(csvReader, orders) {
        const fileName = this.getDateTimeString() + " - " + encodeURIComponent("Bestellung.csv");
        const csvData = this.generateCSVData(csvReader, orders);
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        link.click();

        URL.revokeObjectURL(url);
    }

    generateCSVData(csvReader, orders) {
        let csvContent = 'data:text/csv;charset=utf-8,';
        const colSeparator = ";";
        const newLine = "\n";

        const originalLines = csvReader.lines;

        for (let i = 4; i < originalLines.length; i++) {
            const columns = originalLines[i].split(';');
            const order = orders.find(order => order.customer.firstName === columns[1] && order.customer.lastName === columns[0]);

            if (order) {
                columns[6] = order.payed ? "x" : "";
                columns[7] = order.delivered ? "x" : "";
                originalLines[i] = columns.join(colSeparator);
            }
        }

        csvContent = originalLines.join(newLine);

        return csvContent;
    }

    getDateTimeString() {
        const now = new Date();

        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        return `${year}.${month}.${day} - ${hours}${minutes}${seconds}`;
    }
}