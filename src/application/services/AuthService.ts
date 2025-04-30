import { AuthenticationPort } from '../../domain/ports/AuthenticationPort';

export class AuthService {
  constructor(private readonly authPort: AuthenticationPort) {}

  async login(email: string, password: string): Promise<string> {
    return this.authPort.login(email, password);
  }

  async register(email: string, password: string, name: string): Promise<void> {
    return this.authPort.register(email, password, name);
  }

  async restaurantLogin(code: string): Promise<string> {
    return this.authPort.restaurantLogin(code);
  }

  async adminLogin(username: string, password: string, secretKey: string): Promise<string> {
    return this.authPort.adminLogin(username, password, secretKey);
  }

  async logout(): Promise<void> {
    return this.authPort.logout();
  }
}