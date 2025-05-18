import React, { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { X } from 'lucide-react';
import { ApiEnvirontmentCrudAdapter } from '../../../../../infrastructure/adapters/core/ApiEnvironmentCrudAdapter';


interface Props {
    reload: () => void;
    onClose: () => void;
    isOpen: boolean;
}

const CreateEnvironment: React.FC<Props> = ({ onClose,reload }) => {

    const [data, setData] = useState<{ name: string }>({ name: `` });
    const [errors, setErrors] = useState<any>({});
    const [isLoading, setIsLoading] = React.useState(false);

    const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        if (!data.name) return setErrors({ name: { message: `Nombre requerido` } });

        (async () => {
            const adapter = new ApiEnvirontmentCrudAdapter();
            const response = await adapter.create({ data });
            if(response.error) return toast.error(typeof response.message === `string` ? response.message : response.message[0] );

            onClose();
            reload();
            return toast.success(typeof response.message === `string` ? response.message : response.message[0] );
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

                <h3 className="font-bold text-lg mb-4">Crear Categoría</h3>

                <form onSubmit={HandleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Nombre</span>
                        </label>
                        <input

                            type="name"
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

                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className={`btn btn-sm btn-primary ${isLoading ? 'loading' : ''}`}
                            disabled={isLoading || data.name.length < 2}
                        >
                            {isLoading ? 'Creando...' : 'Crear'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateEnvironment;