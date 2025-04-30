export interface AuthenticationPort {
  login(email: string, password: string): Promise<string>;
  register(email: string, password: string, name: string): Promise<void>;
  restaurantLogin(code: string): Promise<string>;
  adminLogin(username: string, password: string, secretKey: string): Promise<string>;
  logout(): Promise<void>;
}