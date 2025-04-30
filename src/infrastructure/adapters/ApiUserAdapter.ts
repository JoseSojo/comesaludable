import { UserPort } from '../../domain/ports/UserPort';
import { config } from '../../config';
import { CreateResponseInterface, DeleteResponseInterface, FilterResponseInterface, FindResponseInterface, UpdateResponseInterface } from '../interface/ApiInterface';

export class ApiUserAdapter implements UserPort {
  private async fetchWith(endpoint: string, options: RequestInit = {}, body?: any): Promise<Response> {
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
      },
      body: body
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'An error occurred');
    }

    return response;
  }

  async create({ }: { data: any; }): Promise<CreateResponseInterface> {
    try {
      const response = await this.fetchWith(config.api.endpoints.user.create, { method: `POST` });
      return await response.json()
    } catch (error) {
      return {
        body: {},
        message: `Error al crear usuario`,
        error: true
      }
    }
  }

  async delete(id: string): Promise<DeleteResponseInterface> {
    try {
      const response = await this.fetchWith(config.api.endpoints.user.delete(id), { method: `DELETE` });
      return await response.json()
    } catch (error) {
      return {
        body: {},
        message: `Error al eliminar usuario`,
        error: true
      }
    }
  }

  async filter({ skip, take, param }: { skip: number; take: number; param?: string; }): Promise<FilterResponseInterface> {
    try {
      const response = await this.fetchWith(`${config.api.endpoints.user.paginate}/?skip=${skip}&take=${take}&param=${param}`, { method: `GET` });
      return await response.json()
    } catch (error) {
      return {
        body: {},
        message: `Error al filtrar usuario`,
        error: true
      }
    }
  }

  async find(id: string): Promise<FindResponseInterface> {
    try {
      const response = await this.fetchWith(config.api.endpoints.user.find(id), { method: `GET` });

      return await response.json()
    } catch (error) {
      return {
        body: {},
        message: `Error al buscar usuario`,
        error: true,
      }
    }
  }

  async update({ data, id }: { data: any; id: string; }): Promise<UpdateResponseInterface> {
    try {
      const response = await this.fetchWith(config.api.endpoints.user.update(id), { method: `PUT` }, JSON.stringify(data));

      return await response.json()
    } catch (error) {
      console.log(error);
      return {
        body: {},
        message: `Error al actualizar usuario`,
        error: false
      }
    }
  }

  async updatePassword({ data, id }: { data: any; id: string; }): Promise<UpdateResponseInterface> {
    try {
      const response = await this.fetchWith(config.api.endpoints.user.updatePassword(id), { method: `PUT` }, JSON.stringify(data));
      return await response.json()
    } catch (error) {
      return {
        body: {},
        message: `Error al actualizar contraseña.`,
        error: true
      }
    }
  }
}