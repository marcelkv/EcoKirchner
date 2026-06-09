export class DashboardPreferences {
  fromDate: Date;
  toDate: Date;
  includeStock: boolean;

  constructor(fromDate: Date, toDate: Date, includeStock = false) {
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.includeStock = includeStock;
  }
}
