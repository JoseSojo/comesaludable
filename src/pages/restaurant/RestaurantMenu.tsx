import React, { useEffect, useState } from 'react';
import NavbarRestaurant from '../../components/restaurant/NavbarRestaurant';
import UiCard from '../../components/restaurant/card/UiCard';
import MenuTable from '../../components/restaurant/menu/MenuTable';
import MenuCards from '../../components/restaurant/menu/MenuCards';
import MenuViewToggle from '../../components/restaurant/menu/MenuViewToggle';
import { FileText, Plus } from 'lucide-react';
import ShowMenu from '../../components/admin/dashboard/menu/ShowMenu';
import { ApiMenuCrudAdapter } from '../../infrastructure/adapters/crud/ApiMenuCrudAdapter';
import toast from 'react-hot-toast';
import FilterTable from '../../components/common/table/FilterTable';
import InputSearch from '../../components/common/form/InputSearch';
import { config } from '../../config';

const RestaurantMenu: React.FC = () => {
  const [viewType, setViewType] = useState<'table' | 'cards'>('table');

  const [menus, setMenus] = useState<any[]>([]);
  const [pagination, setPagination] = useState<any>({});

  const [category, setCategory] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [param, setParam] = useState(``);
  const [reload, setReload] = useState(false);
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(10);
  const [id, setId] = useState<string | null>(null);
  const [modalFicha, setModalFicha] = useState(false);

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
    <div className="min-h-screen bg-base-100">
      {
        id && modalFicha && <ShowMenu
          id={id}
          isOpen={modalFicha}
          onClose={() => setModalFicha(false)}
          reload={() => setReload(!reload)}
        />
      }
      <NavbarRestaurant />

      <div className="space-y-6 animate-fade-in w-[90%] m-auto mt-11">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <h1 className="text-2xl font-bold text-gray-900">Menus</h1>
          <div className="flex items-center space-x-3">
            <MenuViewToggle viewType={viewType} onChange={setViewType} />

            <button className="btn btn-outline">
              <FileText className="h-4 w-4 mr-2" />
              Export
            </button>

            <button className="btn btn-primary">
              <Plus className="h-4 w-4 mr-2" />
              Add Menu
            </button>
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
            <MenuTable reload={() => setReload(!reload)} HandleFicha={HandleFicha} menus={menus} />
          ) : (
            <MenuCards menus={menus} />
          )}
        </UiCard>
      </div>

    </div>
  );
};

export default RestaurantMenu;