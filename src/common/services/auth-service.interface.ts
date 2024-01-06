export interface IAuthService {
  signInWithGoogle(): Promise<void>;
  signOut(): Promise<void>;
}
