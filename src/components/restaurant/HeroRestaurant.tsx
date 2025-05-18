import { Apple, Camera, Delete, Info, MapPinned, Pen, Share2 } from "lucide-react";
import { FC } from "react";
import { Link } from "wouter";

interface Props {
    profileImage: string,
    restaurant: any;
    update?: boolean;
    openModalDelete: () => void
}

const HeroRestaurant: FC<Props> = ({ profileImage, restaurant, update, openModalDelete }) => {

    return (
        <div className="relative -mt-24 mb-8">
            <div className="bg-white rounded-xl shadow-xl p-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative">
                        <img
                            src={profileImage}
                            alt="Restaurant Logo"
                            className="w-32 h-32 rounded-xl object-cover shadow-lg"
                        />
                        {
                            update && <button className="btn btn-circle btn-sm absolute top-0 right-0">
                                <Camera className="w-4 h-4" />
                            </button>
                        }
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-bold">{restaurant.name}</h1>
                                <p className="text-gray-600 flex items-center gap-2 mt-2">
                                    <MapPinned className="w-5 h-5" />
                                    {restaurant.address}
                                </p>
                                <p className="text-gray-600 flex items-center gap-2 mt-2">
                                    <MapPinned className="w-5 h-5" />
                                    {restaurant.horario}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button className="btn-sm btn btn-primary">
                                    <Share2 className="w-5 h-5" />
                                    Share Profile
                                </button>
                                {
                                    update && <>
                                        <Link href={`/admin/restaurant/${restaurant.id}/menu/create`} className="btn-sm btn btn-success">
                                            <Apple className="w-5 h-5" />
                                            Crear Menú
                                        </Link>
                                        <Link href={`/admin/restaurant/update/${restaurant.id}`} className="btn-sm btn btn-info">
                                            <Pen className="w-5 h-5" />
                                            Actualizar
                                        </Link>
                                        <button onClick={openModalDelete} className="btn-sm btn btn-error">
                                            <Delete className="w-5 h-5" />
                                            Eliminar
                                        </button>
                                    </>
                                }
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-4">
                            {restaurant.typeReference && <div className="badge badge-lg">{restaurant.typeReference.name}</div>}
                            {restaurant.environmentReference && <div className="badge badge-lg">{restaurant.environmentReference.name}</div>}
                        </div>
                        <div className="flex">
                            <p className="text-gray-600 flex items-center gap-5 mt-2">
                                <Info className="w-5 h-5" />
                                {restaurant.about}
                            </p>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">
                                <Share2 className="w-5 h-5 text-primary" />
                                Redes Sociales
                            </h2>
                            <div className='flex gap-3'>
                                <a className='btn btn-outline btn-primary btn-sm'><img src='/fb.svg' className='w-5 h-5' /></a>
                                <a className='btn btn-outline btn-primary btn-sm'><img src='/ig.svg' className='w-5 h-5' /></a>
                                <a className='btn btn-outline btn-primary btn-sm'><img src='/tk.svg' className='w-5 h-5' /></a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default HeroRestaurant;
