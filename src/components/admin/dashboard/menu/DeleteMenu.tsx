import toast from "react-hot-toast";
import { ApiMenuCrudAdapter } from "../../../../infrastructure/adapters/crud/ApiMenuCrudAdapter";
import UiCard from "../../../restaurant/card/UiCard"

interface Props {
    isOpen: boolean;
    onClose: () => void;
    reload: () => void;
    id: string;
}

export default function DeleteMenu({ id, onClose, reload }: Props) {

    const HandleDelete = async () => {
        const adapter = new ApiMenuCrudAdapter();
        const response = await adapter.delete({ id });
        if(response.error) {
            onClose();
            return toast.error(`${response.message}`);
        }
        reload();
        onClose();
    }

    return (
        <div className="modal modal-open">
            <UiCard title="Confimación">
                <h2>¿Seguro que desea eliminar el menú?</h2>
                <div className="flex">
                    <button onClick={onClose} className="btn btn-sm btn-ghost">Cancelar</button>
                    <button onClick={HandleDelete} className="btn btn-sm btn-error">Eliminar</button>
                </div>
            </UiCard>
        </div>
    )
}
