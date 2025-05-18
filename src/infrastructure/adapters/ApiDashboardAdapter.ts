import { DashboardPort } from '../../domain/ports/DashboardPort';
import { config } from '../../config';
import { TablesDataDashboard } from '../interface/DashboardInterface';

export class ApiDashboardAdapter implements DashboardPort {
  private async fetchWith(endpoint: string, options: RequestInit = {}): Promise<any> {
    const url = `${config.api.baseUrl}/dashboard/${endpoint}`;
    let requestOptions = { 
      ...options, 
      headers: {
        token: `${window.localStorage.getItem(`comesaludable_token`)}`,
        ...options.headers,
      }
    }

    if(options.body) {
      requestOptions.body = options.body;
    }

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'An error occurred');
    }

    return response;
  }

  async card() {
    const response = await this.fetchWith(`card`, { method:`GET` });
    const data = await response.json();
    return data;
  }

  async tables() {
    const response = await this.fetchWith(`tables`, { method:`GET` });
    const data = await response.json();
    return data as TablesDataDashboard[];
  }

  async graphic() {
    
  }

  async staticthics() {
      return [{label: ``,path: ``}]
  }
}