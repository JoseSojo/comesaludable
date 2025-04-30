import React, { useState } from 'react';
import NavbarRestaurant from '../../components/restaurant/NavbarRestaurant';
import { Calendar, Filter, FileText, Send } from 'lucide-react';
import { ReportParams } from '../../infrastructure/interface/DataType';
import UiCard from '../../components/restaurant/card/UiCard';
import ReportTemplate from '../../components/restaurant/report/ReportTemplate';
import ReportBy from '../../components/restaurant/report/ReportBy';
import ReportByMenu from '../../components/restaurant/report/by/ReportMenu';
import ReportByAllMenu from '../../components/restaurant/report/by/ReportAllMenus';
import ReportByRestaurant from '../../components/restaurant/report/by/ReportRestaurant';


const RestaurantReport: React.FC = () => {

  const [reportBy, setReportBy] = useState<`RESTAURANT` | `MENU` | `MENUS` | null>(null);

  

  return (
    <div className="min-h-screen bg-base-100">
      <NavbarRestaurant />

      <div className="space-y-6 animate-fade-in w-[90%] m-auto mt-11">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <div>
            <button className="btn btn-primary">
              <FileText className="h-4 w-4 mr-2" />
              Saved Reports
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">

            <ReportBy setReportBy={setReportBy} />

            {
              reportBy === 'MENU' ? <ReportByMenu />
              : reportBy === `MENUS` ? <ReportByAllMenu />
              : reportBy === 'RESTAURANT' ? <ReportByRestaurant />
              : <></>
            }
          </div>

          <ReportTemplate />
        </div>
      </div>

    </div>
  );
};

export default RestaurantReport;