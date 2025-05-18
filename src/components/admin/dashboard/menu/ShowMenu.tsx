import toast from "react-hot-toast";
import { ApiMenuCrudAdapter } from "../../../../infrastructure/adapters/crud/ApiMenuCrudAdapter";
import UiCard from "../../../restaurant/card/UiCard"
import { useEffect, useState } from "react";
import { Menu } from "../../../../infrastructure/interface/DataType";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    reload: () => void;
    id: string;
    openModalDelete?: () => void;
    redirectUpdate?: () => void;

}

export default function ShowMenu({ id, onClose, openModalDelete, redirectUpdate }: Props) {

    const [menu, setMenu] = useState<Menu | null>(null)

    const GetMenu = async () => {
        const adapter = new ApiMenuCrudAdapter();
        const response = await adapter.find({ id });
        if (response.error) {
            onClose();
            return toast.error(`${response.message}`);
        }

        setMenu(response.body);
    }

    useEffect(() => {
        GetMenu()
    }, [])

    return (
        <div className="modal modal-open">
            <UiCard className="max-w-xl" title={menu ? menu.name : `Cargando`}>

                {
                    menu && <div key={menu.id} className="card overflow-hidden">
                        <div className="relative skeleton">
                            {/* <img 
                              src={menu.image} 
                              alt={menu.name} 
                              className="w-full h-48 object-cover"
                            /> */}
                        </div>

                        <div className="">
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className='text-xs'>(para {menu.forPeople} personas)</span>
                                    <p className="text-sm text-gray-500 mt-1">{menu.categoryReference.name}</p>
                                </div>
                                <div className="bg-primary-50 text-primary-700 px-2 py-1 rounded font-medium">
                                    ${menu.price}
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm line-clamp-2">{menu.about}</p>

                            <div className="mt-3 pt-3 border-t grid grid-cols-3 gap-2 text-center text-xs">
                                <div>
                                    <p className="text-gray-500">Alergenos <span className='font-black text-xs'>({menu.allergens.length})</span></p>
                                    <div className='flex flex-wrap gap-1 mt-2'>
                                        {
                                            menu && menu.allergens.map(allergen => <span className='badge badge-xs'>{allergen}</span>)
                                        }
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-500">Ingredientes <span className='font-black text-xs'>({menu.ingredients.length})</span></p>
                                    <div className='flex flex-wrap gap-1 mt-2'>
                                        {
                                            menu && menu.ingredients.map(ingredient => <span className='badge badge-xs'>{ingredient}</span>)
                                        }
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-500">Etiquetas <span className='font-black text-xs'>({menu.tags.length})</span></p>
                                    <div className='flex flex-wrap gap-1 mt-2'>
                                        {
                                            menu && menu.tags.map(tag => <span className='badge badge-xs'>{tag}</span>)
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end items-center gap-3 mt-3">
                                {openModalDelete && <button onClick={openModalDelete} className="btn btn-sm btn-error">
                                    Eliminar
                                </button>}
                                {redirectUpdate && <button onClick={redirectUpdate} className="btn btn-sm btn-info">
                                    Actualizar
                                </button>}
                                <button onClick={onClose} className="btn btn-sm btn-ghost">
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                }

            </UiCard>
        </div>
    )
}
