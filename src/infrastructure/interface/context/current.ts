import { Dispatch, SetStateAction } from "react";
import { Menus, Restaurants } from "../AppInterface";

export interface CurrentContextType {
    menus: Menus[],
    restaurants: Restaurants[],

    menusFilter: UpdateListMenu;
    restaurantsFilter: UpdateListRestaurant;

    setMenusFilter: Dispatch<SetStateAction<UpdateListMenu>>;
    setRestaurantsFilter: Dispatch<SetStateAction<UpdateListRestaurant>>;
    setAddFavoriteFilter: Dispatch<SetStateAction<AddFavorite>>;

}

export interface UpdateListMenu {
    param?: string;
    minPrice?: number;
    maxPrice?: number;
    restaurantListId?: string[];
    skip?: number;
    take?: number; 
}

export interface UpdateListRestaurant {
    param?: string;
    skip?: number;
    take?: number;
}

export interface AddFavorite {
    id?: string
}
