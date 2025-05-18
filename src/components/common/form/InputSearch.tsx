import { FC, useEffect, useState } from "react"
import { SearchInterface } from "../../../infrastructure/interface/SearchInterface";
import { ApiSearchAdapter } from "../../../infrastructure/adapters/ApiSearchAdapter";
import toast from "react-hot-toast";

interface Props {
    path: string;
    setValue: (value: string, name?: string) => void;
    uniqueId: string;
    toastShow?: boolean;
    text?: string
}

const InputSearch: FC<Props> = ({ path, setValue, uniqueId,toastShow,text }) => {

    const [param, setParam] = useState(``);
    const [message, setMessage] = useState(``);
    const [list, setList] = useState<SearchInterface[] | null>(null);
    const [loadgin, setLoading] = useState(true);
    const [selected, setSelected] = useState(false);
    const [selectItem, setSelectItem] = useState<SearchInterface>();

    useEffect(() => {
        const ExecuteRequets = async () => {
            setLoading(true);
            const adapter = new ApiSearchAdapter();

            const response = await adapter.filter({ param, enpoint:path });
            if (response.error) {
                setMessage(`no hay resultados para ${param}`);
                setLoading(false);
                return toastShow ? toast.error(`No se obtuvieron resultados`) : null;
            }
            setList(response.body);
            setLoading(false)
        }
        (async () => {
            setTimeout(async() => await ExecuteRequets(), 400)
        })()
    }, [param])

    return (
        <label htmlFor={uniqueId} className="relative border rounded-lg h-full" >
            <input onChange={()=>setSelected(true)} id={uniqueId} type="checkbox" className="hidden h-0 w-0" />
            <input placeholder={text} onClick={()=>setSelected(true)} onChange={(e)=>setParam(e.target.value)} type="text" value={selectItem && selectItem.label} className={`input input-sm w-full h-full`} />
            <button type="button" onClick={()=>setSelected(false)} className="absolute p-2 text-red-500 z-10 top-0 right-0">{selected && `X`}</button>
            {
                selected && <div className="w-full absolute top-10 bg-white rounded-b-lg border overflow-y-auto h- max-h-40">
                    {   
                        loadgin 
                        ? <div className="w-full flex justify-center"><span className="loading loading-spinner"></span></div>
                        : message && !list 
                        ? <p className="text-xs font-semibold text-gray-600">{message}</p>
                        : list && <div className="grid grid-cols-1 gapy-1">
                            {
                                list.map(item => (<label className="py-2 hover:bg-blue-100 duration-200 px-4">
                                    <input 
                                        onChange={()=>{
                                            setValue(item.value.toString());
                                            setSelectItem(item);
                                            setSelected(false);
                                        }} 
                                        value={item.value} 
                                        type="checkbox" 
                                        className="hidden" 
                                    />
                                    <span className="text-sm font-semibold">{item.label}</span>
                                </label>))
                            }
                        </div>
                    }
                </div>
            }
        </label>
    )
}

export default InputSearch;
