import React, { useEffect, useState } from 'react';
import NavbarRestaurant from '../../../components/restaurant/NavbarRestaurant';
import { useAuth } from '../../../context/AuthContext';
import NavbarAdmin from '../../../components/admin/NavbarAdmin';
import MenuViewToggle from '../../../components/restaurant/menu/MenuViewToggle';
import UiCard from '../../../components/restaurant/card/UiCard';
import MenuTable from '../../../components/restaurant/menu/MenuTable';
import MenuCards from '../../../components/restaurant/menu/MenuCards';
import { ApiMenuCrudAdapter } from '../../../infrastructure/adapters/crud/ApiMenuCrudAdapter';
import toast from 'react-hot-toast';
import FilterTable from '../../../components/common/table/FilterTable';
import { useLocation } from 'wouter';
import InputSearch from '../../../components/common/form/InputSearch';
import { config } from '../../../config';
import DeleteMenu from '../../../components/admin/dashboard/menu/DeleteMenu';
import ShowMenu from '../../../components/admin/dashboard/menu/ShowMenu';

interface Props {
    restaurant?: boolean
}

const MenuPage: React.FC<Props> = ({ restaurant }) => {
    const [menus, setMenus] = useState<any[]>([]);
    const [pagination, setPagination] = useState<any>({});

    // MODAL
    const [modalDelete, setModalDelete] = useState(false);
    const [modalFicha, setModalFicha] = useState(false);

    const { user } = useAuth();
    const [viewType, setViewType] = useState<'table' | 'cards'>('table');

    const [category, setCategory] = useState<string | null>(null);
    const [type, setType] = useState<string | null>(null);
    const [param, setParam] = useState(``);
    const [id, setId] = useState<string | null>(null);
    const location = useLocation();

    const [reload, setReload] = useState(false);
    const [skip, setSkip] = useState(0);
    const [take, setTake] = useState(10);

    const HandleDelete = async (id: string) => {
        setId(id);
        setModalDelete(true);
    }

    const HandleUpdate = async (id: string) => {
        return location[1](`/admin/menus/${id}`)
    }

    const HandleFicha = async (id: string) => {
        setId(id);
        setModalFicha(true);
    }

    useEffect(() => {
        (async () => {
            const adaptaer = new ApiMenuCrudAdapter();
            const response = await adaptaer.filter({ skip, take, param, categoryId: category ? category : ``, typeId: type ? type : `` });
            if (response.error) {
                return toast.error(`No se obtuvieron resultados`);
            }
            console.log(response);
            setMenus(response.body.data);
            setPagination(response.body.pagination)
        })()
    }, [param, type, category, reload])

    return (
        <div className={`${restaurant ? `bg-white` : `bg-base-100 min-h-screen`}`}>
            {
                id && modalFicha && <ShowMenu
                    openModalDelete={() => setModalDelete(true)}
                    redirectUpdate={() => location[1](`/admin/menus/${id}`)}
                    id={id}
                    isOpen={modalFicha}
                    onClose={() => setModalFicha(false)}
                    reload={() => setReload(!reload)}
                />
            }
            {
                id && modalDelete && <DeleteMenu
                    id={id}
                    isOpen={modalDelete}
                    onClose={() => setModalDelete(false)}
                    reload={() => setReload(!reload)}
                />
            }


            {
                !restaurant && <>
                    {
                        user.access ? <NavbarRestaurant /> : <NavbarAdmin />
                    }
                </>
            }

            <div className="space-y-6 animate-fade-in w-[90%] m-auto mt-11">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                    <h1 className="text-2xl font-bold text-gray-900">Menus</h1>
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
                        create={false}
                        openModal={() => { }}
                        param={param}
                        setParam={setParam}
                        take={take}
                        setTake={setTake}
                        skip={skip}
                        setSkip={setSkip}
                        reload={() => setReload(!reload)}
                        pagination={pagination}
                    >
                        <InputSearch text='Tipo' path={config.api.endpoints.search.type} setValue={(value: string) => setType(value)} uniqueId='filterTypeMenuPage' />
                        <InputSearch text='Categoría' path={config.api.endpoints.search.category} setValue={(value: string) => setCategory(value)} uniqueId='filterCategoryMenuPage' />
                    </FilterTable>

                    {viewType === 'table' ? (
                        <MenuTable
                            HandleDelete={HandleDelete}
                            HandleFicha={HandleFicha}
                            HandleUpdate={HandleUpdate}
                            reload={() => { }}
                            menus={menus}
                        />
                    ) : (
                        <MenuCards menus={menus} />
                    )}
                </UiCard>
            </div>

        </div>
    );
};

export default MenuPage;