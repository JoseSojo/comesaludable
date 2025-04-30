import { Dispatch, FC, SetStateAction } from "react";
import UiCard from "../card/UiCard";

interface Props {
    setReportBy: Dispatch<SetStateAction<`RESTAURANT` | `MENU` | `MENUS` | null>>
}

const ReportBy: FC<Props> = ({ setReportBy }) => {

    return (
        <UiCard title="Tipo de reporte" className="mb-3">
            <div className="flex justify-between items-center gap-3">
                <button className="btn btn-outline flex-1 btn-sm btn-primary" onClick={()=>setReportBy(`MENU`)}>Único Menú</button>
                <button className="btn btn-outline flex-1 btn-sm btn-primary" onClick={()=>setReportBy(`MENUS`)}>Todos Menús</button>
                <button className="btn btn-outline flex-1 btn-sm btn-primary" onClick={()=>setReportBy(`RESTAURANT`)}>Restaurante</button>
            </div>
        </UiCard>
    )
}

export default ReportBy;
