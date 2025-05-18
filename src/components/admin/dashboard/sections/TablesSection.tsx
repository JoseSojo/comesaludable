
import { FC, useEffect, useState } from "react";
import { ApiDashboardAdapter } from "../../../../infrastructure/adapters/ApiDashboardAdapter";
import { TablesDataDashboard } from "../../../../infrastructure/interface/DashboardInterface";
import CardTableDashboardAdmin from "../cards/CardTableDashboardAdmin";

interface Props { }

const TableSection: FC<Props> = () => {

    const adapter = new ApiDashboardAdapter();
    const [tables, setTables] = useState<TablesDataDashboard[]>([]);

    useEffect(() => {
        (async () => {
            const response = await adapter.tables();
            console.log(response);
            setTables(response);
        })()
    }, [])

    return (
        <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
            { tables && tables.map(table => <CardTableDashboardAdmin table={table} />) }
        </div>
    )
}

export default TableSection;

