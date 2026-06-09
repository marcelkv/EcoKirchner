export class DashboardPreferences {
  fromDate: Date;
  toDate: Date;

  constructor(fromDate: Date, toDate: Date) {
    this.fromDate = fromDate;
    this.toDate = toDate;
  }
}
