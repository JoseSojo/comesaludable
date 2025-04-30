import { CreateResponseInterface, DeleteResponseInterface, FilterResponseInterface, FindResponseInterface, UpdateResponseInterface } from "../../infrastructure/interface/ApiInterface";

export interface UserPort {
  create({}:{data:any}): Promise<CreateResponseInterface>;
  update({data,id}:{data:any, id: string}): Promise<UpdateResponseInterface>;
  updatePassword({data,id}:{data:any, id: string}): Promise<UpdateResponseInterface>;
  delete(id: string): Promise<DeleteResponseInterface>;
  find(id: string): Promise<FindResponseInterface>;
  filter({skip,take,param}:{skip:number, take:number, param?:string}): Promise<FilterResponseInterface>;
}