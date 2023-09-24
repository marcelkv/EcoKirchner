import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "@/firebase/firebaseConfig";
import { IClientService } from "@/common/client-service.interface";
import firebase from "firebase/compat";
import UserInfo = firebase.UserInfo;

export class ClientService implements IClientService {
  private readonly _auth;
  private readonly _googleAuthProvider: GoogleAuthProvider;
  private _user: UserInfo;
  private _token: string;

  constructor() {
    const firebaseApp = initializeApp(firebaseConfig);
    this._auth = getAuth(firebaseApp);
    this._auth.languageCode = "de";
    this._googleAuthProvider = new GoogleAuthProvider();
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

  async signInWithGoogle(): Promise<void> {
    const result = await signInWithPopup(this._auth, new GoogleAuthProvider());

    if (!result) {
      this._user = null;
      this._token = null;
      return;
    }

    const credential = GoogleAuthProvider.credentialFromResult(result);
    this._token = credential.accessToken;
    this._user = result.user;
  }

  async signOut(): Promise<void> {
    await firebaseSignOut(this._auth);
    this._user = null;
    this._token = null;
  }
}
