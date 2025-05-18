import { RestaurantCrudPort } from '../../../domain/ports/crud/RestaurantCrudPort';
import { config } from '../../../config';
import {
  CreateResponseInterface, 
  DeleteResponseInterface, 
  FilterResponseInterface, 
  FindResponseInterface, 
  UpdateResponseInterface 
} from '../../interface/ApiInterface';

export class ApiRestaurantCrudAdapter implements RestaurantCrudPort {
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

  async create({ data }: { data: any; }): Promise<CreateResponseInterface> {
    try {
      const response = await this.fetchWith(config.api.endpoints.restaurant.create, { method: `POST` }, JSON.stringify(data));
      return await response.json()
    } catch (error) {
      return {
        body: {},
        message: `Error al crear restaurante`,
        error: true
      }
    }
  }

  async delete({id}:{id: string}): Promise<DeleteResponseInterface> {
    try {
      const response = await this.fetchWith(config.api.endpoints.restaurant.delete(id), { method: `DELETE` });
      return await response.json()
    } catch (error) {
      return {
        body: {},
        message: `Error al eliminar restaurante`,
        error: true
      }
    }
  }

  async filter({ skip, take, param }: { skip: number; take: number; param?: string; }): Promise<FilterResponseInterface> {
    try {
      const response = await this.fetchWith(`${config.api.endpoints.restaurant.paginate}/?skip=${skip}&take=${take}&param=${param}`, { method: `GET` });
      return await response.json()
    } catch (error) {
      return {
        body: {},
        message: `Error al filtrar restaurante`,
        error: true
      }
    }
  }

  async find({id}:{id: string}): Promise<FindResponseInterface> {
    try {
      const response = await this.fetchWith(config.api.endpoints.restaurant.find(id), { method: `GET` });

      return await response.json()
    } catch (error) {
      return {
        body: {},
        message: `Error al buscar restaurante`,
        error: true,
      }
    }
  }

  async update({ data, id }: { data: any; id: string; }): Promise<UpdateResponseInterface> {
    try {
      const response = await this.fetchWith(config.api.endpoints.restaurant.update(id), { method: `PUT` }, JSON.stringify(data));

      return await response.json()
    } catch (error) {
      console.log(error);
      return {
        body: {},
        message: `Error al actualizar restaurante`,
        error: false
      }
    }
  }
}