import { config } from '../../config';
import { SearchResponseInterface } from '../interface/SearchInterface';

export class ApiSearchAdapter {

  private async fetchWith(endpoint: string, options: RequestInit = {}): Promise<Response> {
    const url = `${config.api.baseUrl}${endpoint}`;
    if (!options || options.method?.toUpperCase() == `GET`) {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        }
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'An error occurred');
      }

      return response;
    }
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      }
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'An error occurred');
    }

    return response;
  }

  async filter({ param, enpoint}: { param?: string, enpoint:string }): Promise<SearchResponseInterface> {
    try {
      const response = await this.fetchWith(`${enpoint}/?param=${param}`, { method: `GET` });
      return await response.json() as SearchResponseInterface
    } catch (error) {
      return {
        body: null,
        message: `Error al buscar`,
        error: true
      }
    }
  }
}