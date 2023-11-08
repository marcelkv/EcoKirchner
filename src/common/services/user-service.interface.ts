export interface IUserService {
  userName: string;
  userEmail: string;
  uid: string;
  isSignedIn: boolean;
  signInWithGoogle(): Promise<void>;
  signOut(): Promise<void>;
}
