export class UserData {
  readonly uid: string;
  readonly email: string;
  readonly isAdmin: boolean;
  readonly isEmployee: boolean;

  constructor(
    uid: string,
    email: string,
    isAdmin: boolean,
    isEmployee: boolean = false,
  ) {
    this.uid = uid;
    this.email = email;
    this.isAdmin = isAdmin;
    this.isEmployee = isEmployee;
  }
}
