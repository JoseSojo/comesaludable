import React, { useEffect, useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import HeroRestaurant from '../../components/restaurant/HeroRestaurant';
import CoverRestaurant from '../../components/restaurant/CoverRestaurant';
import NavbarRestaurant from '../../components/restaurant/NavbarRestaurant';
import { ApiRestaurantCrudAdapter } from '../../infrastructure/adapters/crud/ApiRestaurantCrudAdapter';
import { useLocation } from 'wouter';
import { useAuth } from '../../context/AuthContext';
import NavbarAdmin from '../../components/admin/NavbarAdmin';
import MenuPage from './internal/MenuPage';
import DeleteRestauranta from '../../components/admin/dashboard/restaurant/DeleteRestauranta';

interface Props {
    id: string;
    update?: boolean;
}

const RestaurantFichaInstance: React.FC<Props> = ({ id, update }) => {
    const { user } = useAuth();
    const [restaurant, setRestaurant] = useState<any | null>(null);
    const [coverImage] = useState('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg');
    const [profileImage] = useState('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg');
    const [images] = useState<string[]>(['https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg']);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const location = useLocation();

    useEffect(() => {
        (async () => {
            const adapter = new ApiRestaurantCrudAdapter();
            const response = await adapter.find({ id });
            setRestaurant(response.body);
        })()
    }, [])

    return (
        <div className="min-h-screen bg-base-100">

            {
                id && openModalDelete && <DeleteRestauranta
                    id={id}
                    isOpen={openModalDelete}
                    onClose={() => setOpenModalDelete(false)}
                    reload={() => location[1](`/admin/restaurants`)}
                />
            }

            {
                user.access ? <NavbarRestaurant /> : <NavbarAdmin />
            }
            {
                restaurant
                    ? <>
                        <CoverRestaurant update={update} coverImage={coverImage} />

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <HeroRestaurant 
                                openModalDelete={() => setOpenModalDelete(true)} 
                                restaurant={restaurant} 
                                profileImage={profileImage} 
                                />

                            <div className="card bg-white shadow-xl mb-3">
                                <div className="card-body">
                                    <MenuPage restaurant />
                                </div>
                            </div>

                            <div className="card bg-white shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">
                                        <ImageIcon className="w-5 h-5 text-primary" />
                                        Galería
                                    </h2>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {images.map((image, index) => (
                                            <div key={index} className="relative aspect-square">
                                                <img
                                                    src={image}
                                                    alt={`Gallery ${index + 1}`}
                                                    className="w-full h-full object-cover rounded-xl"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : <>
                        No exite tal restaurante
                    </>
            }
        </div>
    );
};

export default RestaurantFichaInstance;