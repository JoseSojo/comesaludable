import { CreateResponseInterface,DeleteResponseInterface,FilterResponseInterface,FindResponseInterface,UpdateResponseInterface } from "../../../infrastructure/interface/ApiInterface";

export interface TypeCrudPort {
  create({data}:{data:any}): Promise<CreateResponseInterface>;
  update({data,id}:{data:any,id:string}): Promise<UpdateResponseInterface>;
  delete({id}:{id: string}): Promise<DeleteResponseInterface>;
  find({id}:{id: string}): Promise<FindResponseInterface>;
  filter({ skip,take,param }:{param?:string,skip:number, take:number}): Promise<FilterResponseInterface>;
}