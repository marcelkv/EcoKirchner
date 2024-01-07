export class UserData {
  readonly uid: string;
  readonly email: string;
  readonly isAdmin: boolean;

  constructor(uid: string, email: string, isAdmin: boolean) {
    this.uid = uid;
    this.email = email;
    this.isAdmin = isAdmin;
  }
}
