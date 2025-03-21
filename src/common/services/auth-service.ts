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
import {
  collection,
  Firestore,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export class AuthService implements IAuthService {
  private readonly _auth;
  private readonly _authStateChangedCallback: (user: UserData) => void;
  private _firestore: Firestore;

  constructor(onAuthStateChangedCallback: (user: UserData) => void) {
    const firebaseApp = initializeApp(firebaseConfig);
    this._firestore = getFirestore(firebaseApp);
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

  private async _authStateChanged(user: User = null): Promise<void> {
    let userData: UserData = null;
    if (user) {
      let isAdmin = false;
      try {
        const userRolesCol = collection(this._firestore, "userRoles");
        const userRolesQuery = query(
          userRolesCol,
          where("uid", "==", user.uid),
        );
        const userRolesSnapshot = await getDocs(userRolesQuery);
        if (!userRolesSnapshot.empty) {
          const doc = userRolesSnapshot.docs[0];
          isAdmin = doc.data().role === "admin";
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        isAdmin = false;
      }
      userData = new UserData(user.uid, user.email, isAdmin);
    }
    this._authStateChangedCallback(userData);
    this._broadcastAuthState(userData);
  }

  private _broadcastAuthState(userData: UserData) {
    const channel = new BroadcastChannel("authChannel");
    channel.postMessage({ type: "authState", user: userData });
  }
}
