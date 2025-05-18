import { ArrowLeftCircle, ArrowRightCircle, RefreshCcwDot, Save } from "lucide-react";
import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { Link } from "wouter";

interface Props {
    take: number,
    setTake: Dispatch<SetStateAction<number>>,
    skip: number,
    setSkip: Dispatch<SetStateAction<number>>,
    param: string,
    setParam: Dispatch<SetStateAction<string>>,
    reload: () => void,
    create: boolean,
    openModal: () => void,
    pagination: any;
    createLink?: string,
    children?: ReactNode,
}

const FilterTable: FC<Props> = ({ children,create, openModal, param, reload, setParam, setTake, take, setSkip, skip, pagination, createLink }) => {

    return (
        <div className="mb-6 flex justify-between gap-4">
            <div className="flex-3 relative gap-3 flex">
                {
                    children
                }
                <input
                    onChange={(e) => setParam(e.target.value)}
                    type="text"
                    value={param}
                    placeholder="Buscar..."
                    className="w-full input input-sm pr-10 focus:outline-none"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

            {
                pagination
                    ? <ul className="flex justify-end gap-2 items-center flex-1">

                        {pagination.hasPreviousPage ? <button onClick={() => setSkip(skip - take)} className="btn btn-sm btn-primary"><ArrowLeftCircle /></button> : <span className="text-gray-800 bg-gray-300 px-3 py-1 rounded"><ArrowLeftCircle /></span>}
                        <span className="text-gray-800 bg-gray-300 px-3 py-1 rounded">{pagination.currentPage}/{pagination.totalPages}</span>
                        {pagination.hasNextPage ? <button onClick={() => setSkip(skip + take)} className="btn btn-sm btn-primary"><ArrowRightCircle /></button> : <span className="text-gray-800 bg-gray-300 px-3 py-1 rounded"><ArrowRightCircle /></span>}

                    </ul>
                    : <></>
            }

            <ul className="hidden lg:flex justify-end gap-2 items-center flex-1">

                {create && <button onClick={openModal} className="btn btn-sm btn-success text-white"><Save /> Crear</button>}
                {createLink && <Link href={createLink} className="btn btn-sm btn-success text-white"><Save /> Crear</Link>}
                <button onClick={reload} className="btn btn-sm btn-ghost text-gray-700"><RefreshCcwDot /></button>

                <select onChange={(e) => setTake(Number(e.target.value))} className="select select-sm focus:outline-none">
                    <option selected>{take}</option>
                    <option>{5}</option>
                    <option>{10}</option>
                    <option>{15}</option>
                    <option>{20}</option>
                </select>
            </ul>
        </div>
    )
}

export default FilterTable
