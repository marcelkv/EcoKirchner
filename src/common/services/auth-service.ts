import { IAuthService } from "@/common/services/auth-service.interface";
import { initializeApp } from "firebase/app";
import firebaseConfig from "@/firebase/firebaseConfig";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { UserData } from "@/common/models/user-data";

export class AuthService implements IAuthService {
  private readonly _auth;
  private readonly _authStateChangedCallback: (user: UserData) => void;

  constructor(onAuthStateChangedCallback: (user: UserData) => void) {
    const firebaseApp = initializeApp(firebaseConfig);
    this._auth = getAuth(firebaseApp);
    this._auth.languageCode = "de";
    this._authStateChangedCallback = onAuthStateChangedCallback;
    this._auth.onAuthStateChanged((user) => this._authStateChanged(user));
  }

  async signInWithGoogle(): Promise<void> {
    await signInWithPopup(this._auth, new GoogleAuthProvider());
  }

  async signOut(): Promise<void> {
    await firebaseSignOut(this._auth);
  }

  private _authStateChanged(user: User = null): void {
    const userData = user ? new UserData(user.uid, user.email) : null;
    this._authStateChangedCallback(userData);
    this._broadcastAuthState(userData);
  }

  private _broadcastAuthState(userData: UserData) {
    const channel = new BroadcastChannel("authChannel");
    channel.postMessage({ type: "authState", user: userData });
  }
}
