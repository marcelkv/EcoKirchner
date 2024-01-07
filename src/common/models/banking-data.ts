export class BankingData {
  readonly iban: string;
  readonly bic: string;
  readonly email: string;
  readonly phone: string;

  constructor(iban: string, bic: string, email: string, phone: string) {
    this.iban = iban;
    this.bic = bic;
    this.email = email;
    this.phone = phone;
  }
}
