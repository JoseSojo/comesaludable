import React from 'react';
import RestaurantFichaInstance from '../../admin/RestaurantFichaInstance';
import { useAuth } from '../../../context/AuthContext';

const RestaurantProfile: React.FC = () => {
    
    const { user } = useAuth();

    console.log(user);

    return (
        <div className="min-h-screen bg-base-100">
            {/* <NavbarRestaurant /> */}
            
            <RestaurantFichaInstance id={user.id} />
        </div>
    );
};

export default RestaurantProfile;