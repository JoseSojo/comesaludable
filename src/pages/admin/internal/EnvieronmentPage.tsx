import React, { useEffect, useState } from 'react';
import NavbarAdmin from '../../../components/admin/NavbarAdmin';
import { useAuth } from '../../../context/AuthContext';
import NavbarRestaurant from '../../../components/restaurant/NavbarRestaurant';
import MenuViewToggle from '../../../components/restaurant/menu/MenuViewToggle';
import UiCard from '../../../components/restaurant/card/UiCard';
import { ApiEnvirontmentCrudAdapter } from '../../../infrastructure/adapters/core/ApiEnvironmentCrudAdapter';
import TableEnvieronment from '../../../components/admin/dashboard/core/environment/TableEnvironment';
import CardTableEnvieronment from '../../../components/admin/dashboard/core/environment/CardEnvironment';
import FilterTable from '../../../components/common/table/FilterTable';
import CreateEnvironment from '../../../components/admin/dashboard/core/environment/CreateEnvironment';
import toast from 'react-hot-toast';
import FichaUpdateDeleteEnvironment from '../../../components/admin/dashboard/core/environment/FichaUpdateDeleteEnvieronment';

const EnvironmentPage: React.FC = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const [openFichaModal, setOpenFichaModal] = React.useState(false);
    const adapter = new ApiEnvirontmentCrudAdapter();

    const [environment, setEnvironment] = useState<any[]>([]);
    const { user } = useAuth();
    const [viewType, setViewType] = useState<'table' | 'cards'>('table');
    const [pagination, setPagination] = useState<any>({});
    const [param, setParam] = useState(``);
    const [reload, setReload] = useState(false);
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
            if (response.error) return toast.error(typeof response.message === 'string' ? response.message : response.message[0])
            setEnvironment(response.body.data);
            setPagination(response.body.pagination)
        })()
    }, [param, reload, skip, take])

    return (
        <div className="min-h-screen bg-base-100">
            {openModal && <CreateEnvironment
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                reload={() => setReload(!reload)}
            />}

            {openFichaModal && <FichaUpdateDeleteEnvironment
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
                    <h1 className="text-2xl font-bold text-gray-900">Ambiente</h1>
                    <div className="flex items-center space-x-3">
                        <MenuViewToggle viewType={viewType} onChange={setViewType} />

                        {/* <button className="btn btn-outline">
                            <FileText className="h-4 w-4 mr-2" />
                            Export
                        </button> */}
                    </div>
                </div>

                <UiCard>
                    <FilterTable
                        create
                        openModal={() => setOpenModal(true)}
                        param={param}
                        setParam={setParam}
                        take={take}
                        setTake={setTake}
                        skip={skip}
                        setSkip={setSkip}
                        reload={() => { }}
                        pagination={pagination}
                    />

                    {viewType === 'table' ? (
                        <TableEnvieronment openModalFicha={GetItem} environment={environment} />
                    ) : (
                        <CardTableEnvieronment environment={environment} />
                    )}
                </UiCard>
            </div>

        </div>
    );
};

export default EnvironmentPage;