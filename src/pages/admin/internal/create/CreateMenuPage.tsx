import React, { FormEvent, useRef, useState } from 'react';
import NavbarAdmin from '../../../../components/admin/NavbarAdmin';
import { useLocation, useParams } from 'wouter';
import toast from 'react-hot-toast';
import InputSearch from '../../../../components/common/form/InputSearch';
import { config } from '../../../../config';
import { ApiMenuCrudAdapter } from '../../../../infrastructure/adapters/crud/ApiMenuCrudAdapter';

const CreateMenuPage: React.FC = () => {
    const { id } = useParams() as {id:string};
    const location = useLocation();
    const [data, setData] = useState<any | null>(null);
    const [errors, setErrors] = useState<any>({});
    const [isLoading, setIsLoading] = React.useState(false);
    
    const [tags, setTags] = useState<string[]>([]);
    const inputTagRef = useRef<HTMLInputElement | null>(null)

    const [allergens, setAllergens] = useState<string[]>([]);
    const inputAllergenRef = useRef<HTMLInputElement | null>(null)

    const [ingredients, setIngredients] = useState<string[]>([]);
    const inputIngredientRef = useRef<HTMLInputElement | null>(null)

    const ChangeValueType = (value: string) => setData({ ...data, typeId: value })
    const ChangeValueCategory = (value: string) => setData({ ...data, categoryId: value })

    const ChangeTagData = (value: string) => {
        setTags(prev => [...prev, value]);
        if(inputTagRef.current) inputTagRef.current.value = ``
    }

    const ChangeAllergenData = (value: string) => {
        setAllergens(prev => [...prev, value]);
        if(inputAllergenRef.current) inputAllergenRef.current.value = ``
    }

    const ChangeIngerefientData = (value: string) => {
        setIngredients(prev => [...prev, value]);
        if(inputIngredientRef.current) inputIngredientRef.current.value = ``
    }

    const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        if (!data.name) return setErrors({ name: { message: `Nombre requerido` } });

        (async () => {
            const adapter = new ApiMenuCrudAdapter();
            const response = await adapter.create({ data:{ 
                ...data,
                price: Number(data.price),
                forPeople: Number(data.forPeople),
                tags,
                ingredients,
                allergens,
                restaurantId:id 
            } });
            if (response.error) return toast.error(typeof response.message === `string` ? response.message : response.message[0]);

            location[1](`/admin/menus`);
            return toast.success(typeof response.message === `string` ? response.message : response.message[0]);
        })()
    }

    return (
        <div className="min-h-screen bg-base-100">
            <NavbarAdmin />
            
            <div className="relative p-5 lg:px-10 bg-white mx-5 shadow mt-5">
                <h3 className="font-bold text-lg mb-4">Crear Menú</h3>

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
                        <InputSearch path={config.api.endpoints.search.type} setValue={ChangeValueType} uniqueId='menuType' />
                    </div>

                    <div className="form-control col-span-1">
                        <label className="label">
                            <span className="label-text">Cateogría</span>
                        </label>
                        <InputSearch path={config.api.endpoints.search.category} setValue={ChangeValueCategory} uniqueId='menuCategory' />
                    </div>

                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Preparación</span>
                        </label>
                        <textarea
                            onChange={(e) => setData({ ...data, preparation: e.target.value })}
                            placeholder="Preparación"
                            className={`textarea textarea-bordered max-h-32 ${errors.preaparation ? 'input-error' : ''}`}
                        ></textarea>
                        {errors.preaparation && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.preaparation.message}</span>
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
                            <span className="label-text">Costo</span>
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setData({ ...data, price: e.target.value })}
                            placeholder="Nombre"
                            className={`input input-bordered ${errors.price ? 'input-error' : ''}`}
                        />
                        {errors.price && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.price.message}</span>
                            </label>
                        )}
                    </div>

                    <div className="form-control col-span-1">
                        <label className="label">
                            <span className="label-text">Cantidad de Personas</span>
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setData({ ...data, forPeople: e.target.value })}
                            placeholder="Nombre"
                            className={`input input-bordered ${errors.forPeople ? 'input-error' : ''}`}
                        />
                        {errors.forPeople && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.forPeople.message}</span>
                            </label>
                        )}
                    </div>

                    <div className="form-control col-span-2">
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

                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Alergenos</span>
                        </label>
                        <input
                            ref={inputAllergenRef}
                            type="text"
                            onKeyDown={(e) => {
                                if (inputAllergenRef.current) {
                                    if (e.key === ` `) {
                                        ChangeAllergenData(inputAllergenRef.current.value)
                                    }
                                }
                            }}
                            placeholder="Palabras clave"
                            className={`input input-bordered ${errors.allergens ? 'input-error' : ''}`}
                        />
                        {errors.allergens && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.allergens.message}</span>
                            </label>
                        )}
                        <div className='flex justify-start gap-3 mt-3'>
                            {
                                allergens && allergens.map((tag) => <button type='button' onClick={() => setAllergens(allergens.filter(tg => tg !== tag))}  className='badge'>{tag}</button>)
                            }
                        </div>
                    </div>

                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Ingredientes</span>
                        </label>
                        <input
                            ref={inputIngredientRef}
                            type="text"
                            onKeyDown={(e) => {
                                if (inputIngredientRef.current) {
                                    if (e.key === ` `) {
                                        ChangeIngerefientData(inputIngredientRef.current.value)
                                    }
                                }
                            }}
                            placeholder="Palabras clave"
                            className={`input input-bordered ${errors.ingredients ? 'input-error' : ''}`}
                        />
                        {errors.ingredients && (
                            <label className="label">
                                <span className="label-text-alt text-error">{errors.ingredients.message}</span>
                            </label>
                        )}
                        <div className='flex justify-start gap-3 mt-3'>
                            {
                                ingredients && ingredients.map((tag) => <button type='button' onClick={() => setIngredients(ingredients.filter(tg => tg !== tag))}  className='badge'>{tag}</button>)
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
                        <button type='submit'>enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateMenuPage;