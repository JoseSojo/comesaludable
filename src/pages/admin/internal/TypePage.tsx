import React, { useEffect, useState } from 'react';
import NavbarAdmin from '../../../components/admin/NavbarAdmin';
import { useAuth } from '../../../context/AuthContext';
import NavbarRestaurant from '../../../components/restaurant/NavbarRestaurant';
import MenuViewToggle from '../../../components/restaurant/menu/MenuViewToggle';
import UiCard from '../../../components/restaurant/card/UiCard';
import TableType from '../../../components/admin/dashboard/core/type/TableType';
import CardType from '../../../components/admin/dashboard/core/type/CardType';
import FilterTable from '../../../components/common/table/FilterTable';
import CreateType from '../../../components/admin/dashboard/core/type/CreateType';
import FichaUpdateDeleteType from '../../../components/admin/dashboard/core/type/FichaUpdateDeleteType';
import { ApiTypeCrudAdapter } from '../../../infrastructure/adapters/core/ApiTypeCrudAdapter';

const TypePage: React.FC = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const [openFichaModal, setOpenFichaModal] = React.useState(false);
    const adapter = new ApiTypeCrudAdapter();

    const [type, setType] = useState<any[]>([]);
    const { user } = useAuth();
    const [viewType, setViewType] = useState<'table' | 'cards'>('table');
    const [pagination, setPagination] = useState<any>({});
    const [reload, setReload] = useState(false);
    const [param, setParam] = useState(``);
    const [selected, setSelected] = useState<any | null>(null); 

    const [skip, setSkip] = useState(0);
    const [take, setTake] = useState(10);

    const GetItem = (item: any) => {
        setSelected(item);
        setOpenFichaModal(true);
    }

    useEffect(() => {
        (async () => {
            const response = await adapter.filter({ skip, take, param });
            setType(response.body.data);
            setPagination(response.body.pagination)
        })()
    }, [param, reload, skip, take])

    return (
        <div className="min-h-screen bg-base-100">
            {openModal && <CreateType
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                reload={() => setReload(!reload)}
            />}

            {openFichaModal && <FichaUpdateDeleteType
                isOpen={openModal}
                customData={selected}
                onClose={() => setOpenFichaModal(false)}
                reload={() => setReload(!reload)}
            />}

            {
                user.access ? <NavbarRestaurant /> : <NavbarAdmin />
            }

            <div className="space-y-6 animate-fade-in w-[90%] m-auto mt-11">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                    <h1 className="text-2xl font-bold text-gray-900">Tipos</h1>
                    <div className="flex items-center space-x-3">
                        <MenuViewToggle viewType={viewType} onChange={setViewType} />
                    </div>
                </div>

                <UiCard>
                    <FilterTable
                        openModal={() => setOpenModal(true)}
                        create
                        param={param}
                        setParam={setParam}
                        take={take}
                        setTake={setTake}
                        skip={skip}
                        setSkip={setSkip}
                        reload={() => { }}
                        pagination={pagination}
                    />

                    {viewType === 'table' ? <TableType openModalFicha={GetItem} type={type} /> : <CardType type={type} />}
                </UiCard>
            </div>

        </div>
    );
};

export default TypePage;