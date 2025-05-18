import { config } from '../../../config';
import { EnvironmentCrudPort } from '../../../domain/ports/core/EnvironmentCrudPort copy';
import { 
  CreateResponseInterface, 
  DeleteResponseInterface, 
  FilterResponseInterface, 
  FindResponseInterface, 
  UpdateResponseInterface
} from '../../interface/ApiInterface';

export class ApiEnvirontmentCrudAdapter implements EnvironmentCrudPort {
  private async fetchWith(endpoint: string, options: RequestInit = {}, body?: any): Promise<Response> {
    const url = `${config.api.baseUrl}${endpoint}`;
    console.log(url, body);
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

  async create({ data }: { data: any }): Promise<CreateResponseInterface> {
    try {
      const response = await this.fetchWith(config.api.endpoints.core.environment.create, { method: `POST` }, JSON.stringify(data));
      return await response.json()
    } catch (error) {
      return {
        body: {},
        message: `Error al crear Categoría`,
        error: true
      }
    }
  }

  async delete({id}:{id: string}): Promise<DeleteResponseInterface> {
    try {
      const response = await this.fetchWith(config.api.endpoints.core.environment.delete(id), { method: `DELETE` });
      return await response.json()
    } catch (error) {
      return {
        body: {},
        message: `Error al eliminar Categoría`,
        error: true
      }
    }
  }

  async filter({ skip, take, param }: { skip: number; take: number; param?: string; }): Promise<FilterResponseInterface> {
    try {
      const response = await this.fetchWith(`${config.api.endpoints.core.environment.paginate}/?skip=${skip}&take=${take}&param=${param}`, { method: `GET` });
      return await response.json()
    } catch (error) {
      return {
        body: {},
        message: `Error al filtrar Categoría`,
        error: true
      }
    }
  }

  async find({id}:{id: string}): Promise<FindResponseInterface> {
    try {
      const response = await this.fetchWith(config.api.endpoints.core.environment.find(id), { method: `GET` });

      return await response.json()
    } catch (error) {
      return {
        body: {},
        message: `Error al buscar Categoría`,
        error: true,
      }
    }
  }

  async update({ data, id }: { data: any; id: string; }): Promise<UpdateResponseInterface> {
    try {
      const response = await this.fetchWith(config.api.endpoints.core.environment.update(id), { method: `PUT` }, JSON.stringify(data));

      return await response.json()
    } catch (error) {
      console.log(error);
      return {
        body: {},
        message: `Error al actualizar Categoría`,
        error: false
      }
    }
  }
}