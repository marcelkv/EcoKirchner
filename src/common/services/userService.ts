import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "@/firebase/firebaseConfig";
import { IUserService } from "@/common/services/user-service.interface";

class UserData {
  readonly uid: string;
  readonly displayName: string;
  readonly email: string;

  constructor(uid: string, displayName: string, email: string) {
    this.uid = uid;
    this.displayName = displayName;
    this.email = email;
  }
}

export class UserService implements IUserService {
  private readonly _auth;
  private _user: UserData;
  private _token: string;
  private readonly _broadcastChannel: BroadcastChannel;

  constructor() {
    const firebaseApp = initializeApp(firebaseConfig);
    this._auth = getAuth(firebaseApp);
    this._auth.languageCode = "de";
    this.loadUserFromLocalStorage();
    this._broadcastChannel = new BroadcastChannel("ecoKirchnerChannel");
    this._broadcastChannel.addEventListener(
      "message",
      this._onMessageReceived.bind(this)
    );
  }

  destroy(): void {
    this._broadcastChannel.close();
  }

  get isSignedIn(): boolean {
    return !!this._user && !!this._token;
  }

  get userName(): string {
    if (!this.isSignedIn) {
      return null;
    }

    return this._user.displayName;
  }

  get userEmail(): string {
    if (!this.isSignedIn) {
      return null;
    }

    return this._user.email;
  }

  get uid(): string {
    if (!this.isSignedIn) {
      return null;
    }

    return this._user.uid;
  }

  async signInWithGoogle(): Promise<void> {
    const result = await signInWithPopup(this._auth, new GoogleAuthProvider());

    if (!result) {
      this._user = null;
      this._token = null;
      return;
    }

    const credential = GoogleAuthProvider.credentialFromResult(result);
    this._token = credential.accessToken;
    const userData = new UserData(
      result.user.uid,
      result.user.displayName,
      result.user.email
    );
    this._user = userData;
    this.saveUserToLocalStorage(userData);
    this._broadcastChannel.postMessage("login");
  }

  async signOut(): Promise<void> {
    await firebaseSignOut(this._auth);
    this._user = null;
    this._token = null;
    this.clearUserFromLocalStorage();
    this._broadcastChannel.postMessage("logout");
  }

  private loadUserFromLocalStorage(): void {
    const storedUser = localStorage.getItem("userEcoKirchner");
    const storedToken = localStorage.getItem("tokenEcoKirchner");

    if (storedUser && storedToken) {
      try {
        const userData = JSON.parse(storedUser);
        if (this.isValidUserData(userData)) {
          this._user = new UserData(
            userData.uid,
            userData.displayName,
            userData.email
          );
          this._token = storedToken;
        } else {
          this.clearUserFromLocalStorage();
        }
      } catch (error) {
        this.clearUserFromLocalStorage();
      }
    }
  }

  private isValidUserData(userData: any): userData is UserData {
    return (
      userData &&
      typeof userData.uid === "string" &&
      typeof userData.displayName === "string" &&
      typeof userData.email === "string"
    );
  }

  private saveUserToLocalStorage(userData: UserData): void {
    localStorage.setItem("userEcoKirchner", JSON.stringify(userData));
    localStorage.setItem("tokenEcoKirchner", this._token);
  }

  private clearUserFromLocalStorage(): void {
    localStorage.removeItem("userEcoKirchner");
    localStorage.removeItem("tokenEcoKirchner");
  }

  private async _onMessageReceived(event: MessageEvent): Promise<void> {
    if (event.data === "logout" || event.data === "login") {
      location.reload();
    }
  }
}
