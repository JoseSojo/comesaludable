import { FC, useState } from "react";
import { Calendar, FileText, Send } from "lucide-react";
import { ReportParams } from "../../../../infrastructure/interface/DataType";
import UiCard from "../../card/UiCard";

const today = new Date();
const oneMonthAgo = new Date();
oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

interface Props {}

const ReportByAllMenu: FC<Props> = ({  }) => {
    const [reportParams, setReportParams] = useState<ReportParams>({
        startDate: oneMonthAgo.toISOString().split('T')[0],
        endDate: today.toISOString().split('T')[0],
        includeViews: true,
        includeSales: true,
        includeComments: true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as HTMLInputElement;

        setReportParams({
            ...reportParams,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Generating report with params:', reportParams);
        // Here you would trigger the report generation
    };

    return (
        <UiCard title="Reporte de todos los menús">
            <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                                Fecha Inicio
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    id="startDate"
                                    name="startDate"
                                    value={reportParams.startDate}
                                    onChange={handleChange}
                                    className="input pl-10"
                                    required
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Calendar className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                                Fecha Fin
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    id="endDate"
                                    name="endDate"
                                    value={reportParams.endDate}
                                    onChange={handleChange}
                                    className="input pl-10"
                                    required
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Calendar className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Contenido del Reporte</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="includeViews"
                                    name="includeViews"
                                    checked={reportParams.includeViews}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                                />
                                <label htmlFor="includeViews" className="ml-2 text-sm text-gray-700">
                                    Datos de vistas
                                </label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="includeComments"
                                    name="includeComments"
                                    checked={reportParams.includeComments}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                                />
                                <label htmlFor="includeComments" className="ml-2 text-sm text-gray-700">
                                    Datos de comentarios
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button type="submit" className="btn btn-primary flex items-center">
                            <FileText className="h-4 w-4 mr-2" />
                            Generate Report
                        </button>

                        <button type="button" className="btn btn-outline flex items-center">
                            <Send className="h-4 w-4 mr-2" />
                            Schedule Report
                        </button>
                    </div>
                </div>
            </form>
        </UiCard>
    )
}

export default ReportByAllMenu;
