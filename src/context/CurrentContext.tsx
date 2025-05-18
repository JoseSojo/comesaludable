import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { AddFavorite, CurrentContextType, UpdateListMenu, UpdateListRestaurant } from '../infrastructure/interface/context/current';
import { Menus, Restaurants } from '../infrastructure/interface/AppInterface';
import { ApiRestaurantCrudAdapter } from '../infrastructure/adapters/crud/ApiRestaurantCrudAdapter';
import { ApiMenuCrudAdapter } from '../infrastructure/adapters/crud/ApiMenuCrudAdapter';

const defaultContext: CurrentContextType = {
    menus: [],
    restaurants: [],

    menusFilter: {},
    restaurantsFilter: {},

    setAddFavoriteFilter: () => {},
    setMenusFilter: () => {},
    setRestaurantsFilter: () => {},
}

const CurrentContext = createContext<CurrentContextType>(defaultContext);

export const CurrentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [menus, setMenus] = useState<Menus[]>([]);
    const [restaurants, setRestaurants] = useState<Restaurants[]>([]);

    const [menusFilter, setMenusFilter] = useState<UpdateListMenu>({ maxPrice: 100000, minPrice: 0, param: ``, restaurantListId: [] })
    const [restaurantsFilter, setRestaurantsFilter] = useState<UpdateListRestaurant>({ param: `` })
    const [addFavoriteFilter, setAddFavoriteFilter] = useState<AddFavorite>({ id: `` })

    const ReloadMenus = async () => {
        const adapter = new ApiMenuCrudAdapter();
        const response = await adapter.filter({ skip:0, take:3, param:menusFilter.param });
        if(!response.error) setMenus(response.body.data);
        return response;
    }

    const ReloadRestaurants = async () => {
        const adapter = new ApiRestaurantCrudAdapter();
        const response = await adapter.filter({ skip:0, take:3, param:restaurantsFilter.param });
        if(!response.error) setRestaurants(response.body.data);
        return response;
    }

    const AddFavorite = async () => {}

    // UPDATE MENUS
    useEffect(() => {
        const timer = setTimeout(ReloadMenus, 300);

        return () => clearTimeout(timer);
    }, [menusFilter])

    // UPDATE RESTAURANTS
    useEffect(() => {
        const timer = setTimeout(ReloadRestaurants, 300);
        return () => clearTimeout(timer);
    }, [menusFilter])

    // ADD FAVORITE
    useEffect(() => {
        const timer = setTimeout(AddFavorite, 300);
        return () => clearTimeout(timer);
    }, [menusFilter])

    return (
        <CurrentContext.Provider value={{
            menus,
            restaurants,

            menusFilter,
            restaurantsFilter,

            setAddFavoriteFilter,
            setRestaurantsFilter,
            setMenusFilter: setMenusFilter
        }}>
            {children}
        </CurrentContext.Provider>
    );
};

export const useCurrent = () => useContext(CurrentContext);
