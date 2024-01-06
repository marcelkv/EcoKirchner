import { UserData } from "@/common/models/user-data";
import { IUserService } from "@/common/services/user-service.interface";

export class UserService implements IUserService {
  user: UserData;

  constructor() {
    this.user = this._loadUserFromStorage();
  }

  get isSignedIn(): boolean {
    return this.user && !!this.user.email && !!this.user.uid;
  }

  get userEmail(): string {
    return this.isSignedIn ? this.user.email : null;
  }

  get uid(): string {
    return this.isSignedIn ? this.user.uid : null;
  }

  saveUser(user: UserData): void {
    this.user = user;
    localStorage.setItem("user", JSON.stringify(this.user));
  }

  clearUser(): void {
    this.user = null;
    localStorage.removeItem("user");
  }

  private _loadUserFromStorage(): UserData {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  }
}
