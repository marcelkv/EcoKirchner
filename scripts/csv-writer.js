class CsvWriter {
    downloadCSV(csvReader) {
        const fileName = this.getDateTimeString() + " - Bestellung";
        const csvData = this.generateCSVData(csvReader);
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        link.click();

        URL.revokeObjectURL(url);
    }

    generateCSVData(csvReader) {
        let csvContent = 'data:text/csv;charset=utf-8,';
        const colSeparator = ";";
        const newLine = "\r\n";

        const originalLines = csvReader.lines;
        csvContent = originalLines;

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