import React, { FormEvent, useRef, useState } from 'react';
import NavbarAdmin from '../../../../components/admin/NavbarAdmin';
import toast from 'react-hot-toast';
import InputSearch from '../../../../components/common/form/InputSearch';
import { config } from '../../../../config';
import { ApiRestaurantCrudAdapter } from '../../../../infrastructure/adapters/crud/ApiRestaurantCrudAdapter';
import { useLocation } from 'wouter';

const CreateRestaurantPage: React.FC = () => {
    const location = useLocation();
    const [data, setData] = useState<any | null>(null);
    const [errors, setErrors] = useState<any>({});
    const [isLoading, setIsLoading] = React.useState(false);
    const [tags, setTags] = useState<string[]>([]);
    const inputTagRef = useRef<HTMLInputElement | null>(null)

    const ChangeValueType = (value: string) => setData({ ...data, typeId: value })
    const ChangeValueEnvirontment = (value: string) => setData({ ...data, environmentId: value })

    const ChangeTagData = (value: string) => {
        setTags(prev => [...prev, value]);
        if(inputTagRef.current) inputTagRef.current.value = ``
    }

    const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        if (!data.name) return setErrors({ name: { message: `Nombre requerido` } });

        (async () => {
            const adapter = new ApiRestaurantCrudAdapter();
            const response = await adapter.create({ data:{ ...data,tag:tags } });
            if (response.error) return toast.error(typeof response.message === `string` ? response.message : response.message[0]);

            location[1](`/admin/restaurants`)
            return toast.success(typeof response.message === `string` ? response.message : response.message[0]);
        })()
    }

    return (
        <div className="min-h-screen bg-base-100">
            <NavbarAdmin />

            <div className="relative p-5 lg:px-10 bg-white mx-5 shadow mt-5">
                <h3 className="font-bold text-lg mb-4">Crear Restaurant</h3>

                <form onSubmit={HandleSubmit} className='grid lg:grid-cols-4 gap-3'>
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Nombre</span>
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            placeholder="Nombre"
                            className={`input input-bordered ${errors.name ? 'input-error' : ''}`}
                        />
                        {errors.name && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.name.message}</span>
                            </label>
                        )}
                    </div>

                    <div className="form-control col-span-1">
                        <label className="label">
                            <span className="label-text">Tipo</span>
                        </label>
                        <InputSearch path={config.api.endpoints.search.type} setValue={ChangeValueType} uniqueId='restaurantType' />
                    </div>

                    <div className="form-control col-span-1">
                        <label className="label">
                            <span className="label-text">Ambiente</span>
                        </label>
                        <InputSearch path={config.api.endpoints.search.environment} setValue={ChangeValueEnvirontment} uniqueId='restaurantEnvironment' />
                    </div>

                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Dirección</span>
                        </label>
                        <textarea
                            onChange={(e) => setData({ ...data, address: e.target.value })}
                            placeholder="Dirección"
                            className={`textarea textarea-bordered max-h-32 ${errors.address ? 'input-error' : ''}`}
                        ></textarea>
                        {errors.address && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.address.message}</span>
                            </label>
                        )}
                    </div>

                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Horario</span>
                        </label>
                        <textarea
                            onChange={(e) => setData({ ...data, horario: e.target.value })}
                            placeholder="Horario"
                            className={`textarea textarea-bordered max-h-32 ${errors.horario ? 'input-error' : ''}`}
                        ></textarea>
                        {errors.horario && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.horario.message}</span>
                            </label>
                        )}
                    </div>

                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Presentación</span>
                        </label>
                        <textarea
                            onChange={(e) => setData({ ...data, about: e.target.value })}
                            placeholder="Presentación"
                            className={`textarea textarea-bordered max-h-32 ${errors.about ? 'input-error' : ''}`}
                        ></textarea>
                        {errors.about && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.about.message}</span>
                            </label>
                        )}
                    </div>

                    <div className="form-control col-span-1">
                        <label className="label">
                            <span className="label-text">Teléfono</span>
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setData({ ...data, phone: e.target.value })}
                            placeholder="Teléfono"
                            className={`input input-bordered ${errors.phone ? 'input-error' : ''}`}
                        />
                        {errors.phone && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.phone.message}</span>
                            </label>
                        )}
                    </div>

                    <div className="form-control col-span-1">
                        <label className="label">
                            <span className="label-text">Website</span>
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setData({ ...data, website: e.target.value })}
                            placeholder="Website"
                            className={`input input-bordered ${errors.website ? 'input-error' : ''}`}
                        />
                        {errors.website && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.website.message}</span>
                            </label>
                        )}
                    </div>

                    <div className="form-control col-span-4">
                        <label className="label">
                            <span className="label-text">Palabras clave</span>
                        </label>
                        <input
                            ref={inputTagRef}
                            type="text"
                            onKeyDown={(e) => {
                                if (inputTagRef.current) {
                                    if (e.key === ` `) {
                                        ChangeTagData(inputTagRef.current.value)
                                    }
                                }
                            }}
                            placeholder="Palabras clave"
                            className={`input input-bordered ${errors.tags ? 'input-error' : ''}`}
                        />
                        {errors.tags && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.tags.message}</span>
                            </label>
                        )}
                        <div className='flex justify-start gap-3 mt-3'>
                            {
                                tags && tags.map((tag) => <button type='button' onClick={() => setTags(tags.filter(tg => tg !== tag))}  className='badge'>{tag}</button>)
                            }
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button
                            type="submit"
                            className={`btn btn-sm btn-primary ${isLoading ? 'loading' : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Creando...' : 'Crear'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateRestaurantPage;