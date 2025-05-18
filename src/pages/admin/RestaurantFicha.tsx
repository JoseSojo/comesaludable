import React from 'react';
import { useParams } from 'wouter';
import RestaurantFichaInstance from './RestaurantFichaInstance';

const RestaurantFicha: React.FC = () => {
    const { id } = useParams() as { id: string };

    return <RestaurantFichaInstance id={id} update />;
};

export default RestaurantFicha;