export type DashboardSortBy = "name" | "umsatz" | "gewinn" | "marge" | "menge";

export class DashboardPreferences {
  fromDate: Date;
  toDate: Date;
  includeStock: boolean;
  sortBy: DashboardSortBy;

  constructor(
    fromDate: Date,
    toDate: Date,
    includeStock = false,
    sortBy: DashboardSortBy = "name",
  ) {
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.includeStock = includeStock;
    this.sortBy = sortBy;
  }
}
