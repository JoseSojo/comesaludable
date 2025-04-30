import { FileText, Filter } from "lucide-react";
import { FC } from "react";

interface Props {
    title: string;
    changeTemplate: () => void;
}

const ItemTemplate: FC<Props> = ({ title, changeTemplate }) => {

    return (
        <button onClick={changeTemplate} className="w-full flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer">
            <div className="flex items-center">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <FileText className="h-4 w-4 text-blue-600" />
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900">{title}</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
                <Filter className="h-4 w-4" />
            </button>
        </button>
    )
}

export default ItemTemplate;
