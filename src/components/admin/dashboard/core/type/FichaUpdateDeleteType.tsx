import { X } from 'lucide-react';
import React, { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { ApiTypeCrudAdapter } from '../../../../../infrastructure/adapters/core/ApiTypeCrudAdapter';
import ExtractValue from '../../../../common/utils/ExtractValue';

interface Props {
    reload: () => void;
    onClose: () => void;
    isOpen: boolean;
    customData: any;
}

const FichaUpdateDeleteType: React.FC<Props> = ({ reload, onClose, customData }) => {

    const [data, setData] = useState<{ name: string }>(customData);
    const [errors, setErrors] = useState<any>({});
    const [isLoading, setIsLoading] = React.useState<`delete` | `_delete` | `update` | null>(null);

    const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(`update`);
        if (!data.name) return setErrors({ name: { message: `Nombre requerido` } });

        (async () => {
            const adapter = new ApiTypeCrudAdapter();
            const response = await adapter.update({ data, id: customData.id });
            if (response.error) return toast.error(typeof response.message === `string` ? response.message : response.message[0]);

            onClose();
            reload();
            return toast.success(typeof response.message === `string` ? response.message : response.message[0]);
        })()

    }

    const HandleDelete = () => {
        setIsLoading(`_delete`);
        (async () => {
            const adapter = new ApiTypeCrudAdapter();
            const response = await adapter.delete({ id: customData.id });
            if (response.error) return toast.error(typeof response.message === `string` ? response.message : response.message[0]);

            onClose();
            reload();
            return toast.success(typeof response.message === `string` ? response.message : response.message[0]);
        })()
    }

    return (
        <div className="modal modal-open">
            <div className="modal-box relative">
                <button
                    onClick={onClose}
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                    <X className="w-4 h-4" />
                </button>

                <h3 className="font-bold text-lg mb-4">
                    {
                        isLoading === 'delete' ? `Eliminar "${data.name}"`
                            : isLoading === 'update' ? `Actualizar "${data.name}"`
                                : `Ficha "${data.name}"`
                    }
                </h3>

                {
                    isLoading === 'delete' || isLoading === '_delete'
                        ? <div className='grid place-content-center place-items-center'>
                            <h4 className='text-xl font-bold text-gray-600'>¿Seguro que desea eliminar "{data.name}"?</h4>
                            <h6 className='text-sm font-bold text-gray-500'>luego de eliminarlo no se podrá recuperar</h6>
                            <button
                                onClick={HandleDelete}
                                type="button"
                                className={`mt-3 btn btn-sm btn-outline btn-error ${isLoading === `_delete` ? 'loading' : ''}`}
                            >
                                {isLoading === `_delete` ? 'Eliminando...' : 'Eliminar'}
                            </button>
                        </div>
                        : <form onSubmit={HandleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Nombre</span>
                                </label>
                                <input

                                    type="name"
                                    value={data.name}
                                    onChange={(e) => setData({ name: e.target.value })}
                                    placeholder="Nombre"
                                    className={`input input-bordered ${errors.name ? 'input-error' : ''}`}

                                />
                                {errors.name && (
                                    <label className="label">
                                        <span className="label-text-alt text-error">{errors.name.message}</span>
                                    </label>
                                )}
                            </div>

                            <div className="form-control mt-6 grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => setIsLoading('delete')}
                                    type="button"
                                    className={` btn btn-sm btn-outline btn-error ${isLoading ? 'loading' : ''}`}
                                >
                                    {isLoading ? 'Eliminando...' : 'Eliminar'}
                                </button>
                                <button
                                    type="submit"
                                    className={` btn btn-sm btn-primary ${isLoading ? 'loading' : ''}`}
                                    disabled={isLoading && isLoading === `update` || data.name.length < 2}
                                >
                                    {isLoading ? 'Actualizando...' : 'Actualizar'}
                                </button>

                            </div>
                        </form>
                }
                <ul className='px-5 mt-4'>
                    <li className='list-disc text-gray-600 text-xs'>Creación: {ExtractValue({ extractBy: { stractBy: `createAt`, type: `date` }, item: customData })}</li>
                    <li className='list-disc text-gray-600 text-xs'>Actualización: {ExtractValue({ extractBy: { stractBy: `updateAt`, type: `date` }, item: customData })}</li>
                </ul>
            </div>
        </div>
    );
};

export default FichaUpdateDeleteType;