export class CartOrderContact {
  firstName: string;
  lastName: string;
  street: string;
  zipCode: string;
  city: string;
  phoneNumber: string;

  constructor(
    firstName: string,
    lastName: string,
    street: string,
    zipCode: string,
    city: string,
    phoneNumber: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.street = street;
    this.zipCode = zipCode;
    this.city = city;
    this.phoneNumber = phoneNumber;
  }
}
