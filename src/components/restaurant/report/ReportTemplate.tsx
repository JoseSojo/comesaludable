import { FC } from "react";
import UiCard from "../card/UiCard";
import { FileText, Filter } from "lucide-react";
import ItemTemplate from "./ItemTemplate";

interface Props { }

const ReportTemplate: FC<Props> = () => {

    return (
        <UiCard title="Plantillas" className="mt-6">
            <div className="space-y-3 w-full">
                <ItemTemplate title="Análisis Diario" changeTemplate={() => {}} />
                <ItemTemplate title="Análisis Mensual" changeTemplate={() => {}} />
                <ItemTemplate title="Menús Populares" changeTemplate={() => {}} />
                <ItemTemplate title="Comentarios Positivos" changeTemplate={() => {}} />
                <ItemTemplate title="Comentarios Negativos" changeTemplate={() => {}} />
            </div>
        </UiCard>
    )
}

export default ReportTemplate;
