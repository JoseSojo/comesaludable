import { AuthenticationPort } from '../../domain/ports/AuthenticationPort';
import { config } from '../../config';

export class ApiAuthAdapter implements AuthenticationPort {
  private async fetchWithAuth(endpoint: string, options: RequestInit = {}): Promise<Response> {
    const url = `${config.api.baseUrl}${endpoint}`;
    let requestOptions = { 
      ...options, 
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      }
    }

    if(options.body) {
      requestOptions.body = options.body;
    }

    console.log(requestOptions);


    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'An error occurred');
    }

    return response;
  }

  async login(email: string, password: string) {
    const response = await this.fetchWithAuth(config.api.endpoints.auth.login, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data;
  }

  async register(email: string, password: string, name: string): Promise<void> {
    await this.fetchWithAuth(config.api.endpoints.auth.register, {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    });
  }

  async restaurantLogin(code: string) {
    const response = await this.fetchWithAuth(config.api.endpoints.auth.restaurantLogin, {
      method: 'POST',
      body: JSON.stringify({ code }),
    });
    const data = await response.json();
    return data;
  }

  async adminLogin(username: string, password: string) {
    const response = await this.fetchWithAuth(config.api.endpoints.auth.adminLogin, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    return data;
  }

  async logout(): Promise<void> {
    await this.fetchWithAuth(config.api.endpoints.auth.logout, {
      method: 'POST',
    });
  }
}