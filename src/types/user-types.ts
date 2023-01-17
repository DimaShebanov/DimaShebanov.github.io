export interface AuthUser {
  isLogged: boolean;
  email: string | null;
  name: string | null;
  photoUrl: string | null;
}
