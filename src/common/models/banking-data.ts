export class BankingData {
  readonly recipientName: string;
  readonly iban: string;
  readonly bic: string;
  readonly email: string;
  readonly phone: string;

  constructor(
    recipientName: string,
    iban: string,
    bic: string,
    email: string,
    phone: string,
  ) {
    this.recipientName = recipientName;
    this.iban = iban;
    this.bic = bic;
    this.email = email;
    this.phone = phone;
  }
}
