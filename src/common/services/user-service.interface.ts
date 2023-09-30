export interface IUserService {
  userName: string;
  userEmail: string;
  isSignedIn: boolean;
  signInWithGoogle(): Promise<void>;
  signOut(): Promise<void>;
}
