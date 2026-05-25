import { UserData } from "@/common/models/user-data";

export interface IUserService {
  isAdmin: boolean;
  isEmployee: boolean;
  isSignedIn: boolean;
  userEmail: string;
  uid: string;
  saveUser(user: UserData): void;
  clearUser(): void;
}
