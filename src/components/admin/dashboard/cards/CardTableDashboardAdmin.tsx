import { FC } from "react";
import { TablesDataDashboard } from "../../../../infrastructure/interface/DashboardInterface";
import ExtractValue from "../../../common/utils/ExtractValue";

interface Props {
    table: TablesDataDashboard
}

const CardTableDashboardAdmin: FC<Props> = ({ table }) => {

    return (
        <div className="stat bg-white shadow-lg rounded-lg overflow-x-auto">
            <h2 className="font-black text-gray-600 text-xl">{table.label}</h2>

            <table className="table table-sm">
                <thead>
                    <tr>
                        {
                            table.header.map((label) => <th>{label}</th>)
                        }
                    </tr>
                    {
                        table.body.map(item => <tr>
                            {
                                table.extract.map(ext => <td>{ExtractValue({ extractBy:ext, item })}</td>)
                            }
                        </tr>)
                    }
                </thead>
            </table>

        </div>
    )
}

export default CardTableDashboardAdmin;
