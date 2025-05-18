import React, { useEffect, useState } from 'react';
import NavbarAdmin from '../../../components/admin/NavbarAdmin';
import { ApiRestaurantCrudAdapter } from '../../../infrastructure/adapters/crud/ApiRestaurantCrudAdapter';
import { useAuth } from '../../../context/AuthContext';
import NavbarRestaurant from '../../../components/restaurant/NavbarRestaurant';
import MenuViewToggle from '../../../components/restaurant/menu/MenuViewToggle';
import UiCard from '../../../components/restaurant/card/UiCard';
import FilterTable from '../../../components/common/table/FilterTable';
import TableRestaurant from '../../../components/admin/dashboard/restaurant/TableRestaurant';
import CardRestaurant from '../../../components/admin/dashboard/restaurant/CardRestaurant';
import { useLocation } from 'wouter';

const RestaurantPage: React.FC = () => {

    const adapter = new ApiRestaurantCrudAdapter();
    const [restaurant, setRestaurant] = useState<any[]>([]);
    const { user } = useAuth();
    const [viewType, setViewType] = useState<'table' | 'cards'>('table');
    const [param, setParam] = useState(``);
    const [pagination, setPagination] = useState<any>({});
    const [reload, setReload] = useState(false);
    // const [selected, setSelected] = useState<any | null>(null);
    const location = useLocation();

    const [skip, setSkip] = useState(0);
    const [take, setTake] = useState(10);

    const GetItem = (item: any) => {
        // setSelected(item);
        // setOpenFichaModal(true);
        location[1](`/admin/restaurants/${item.id}`);
    }

    useEffect(() => {
        (async () => {
            const response = await adapter.filter({ skip, take, param });
            setRestaurant(response.body.data);
            setPagination(response.body.pagination)
        })()
    }, [param, reload, skip, take])

    return (
        <div className="min-h-screen bg-base-100">
            {/* {openModal && <CreateCategory
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                reload={() => setReload(!reload)}
            />}

            {openFichaModal && <FichaUpdateDeleteCategory
                isOpen={openModal}
                customData={selected}
                onClose={() => setOpenFichaModal(false)}
                reload={() => setReload(!reload)}
            />} */}

            {
                user.access ? <NavbarRestaurant /> : <NavbarAdmin />
            }

            <div className="space-y-6 animate-fade-in w-[90%] m-auto mt-11">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                    <h1 className="text-2xl font-bold text-gray-900">Restaurantes</h1>
                    <div className="flex items-center space-x-3">
                        <MenuViewToggle viewType={viewType} onChange={setViewType} />
                    </div>
                </div>

                <UiCard>
                    <FilterTable
                        create={false}
                        openModal={() => {}}
                        param={param}
                        setParam={setParam}
                        take={take}
                        setTake={setTake}
                        skip={skip}
                        setSkip={setSkip}
                        reload={() => setReload(!reload)}
                        pagination={pagination}
                        createLink='/admin/restaurant/create'
                    />

                    {viewType === 'table' ? (
                        <TableRestaurant openModalFicha={GetItem} restaurant={restaurant} />
                    ) : (
                        <CardRestaurant restaurant={restaurant} />
                    )}
                </UiCard>
            </div>

        </div>
    );
};

export default RestaurantPage;