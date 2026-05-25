export type UserRole = "admin" | "employee" | "customer";

export interface UserEntry {
  uid: string;
  email: string;
  role: UserRole;
}
