import { ShieldEllipsis } from "lucide-react";
import { FC, useState } from "react";
import { ApiUserAdapter } from "../../infrastructure/adapters/ApiUserAdapter";
import { UpdateResponseInterface } from "../../infrastructure/interface/ApiInterface";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

interface Props { }

const UpdatePassword: FC<Props> = ({ }) => {
    const { user } = useAuth();
    const [data, setData] = useState({ oldPassword: ``, password: `` });
    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        (async () => {
            const adapter = new ApiUserAdapter();
            const response = await adapter.updatePassword({ data, id: user.id }) as UpdateResponseInterface;

            if (response.error) {
                if (typeof response.message === `string`) return toast.error(response.message);
                return response.message.forEach(msg => toast.error(msg));
            }

            if (typeof response.message === `string`) return toast.success(response.message);
            return response.message.forEach(msg => toast.success(msg));
        })()

    }

    return (
        <>
            <h2 className="card-title mb-6">Actualizar Contraseña</h2>
            <form onSubmit={HandleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Contraseña Actual</span>
                    </label>
                    <div className="flex gap-2">
                        <span className="border border-gray-500 text-gray-500 px-4 py-3 rounded-full">
                            <ShieldEllipsis className="w-5 h-5" />
                        </span>
                        <input onChange={HandleChange} name="oldPassword" type="password" className="input input-bordered w-full focus:outline-none" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Contraseña Nueva</span>
                    </label>
                    <div className="flex gap-2">
                        <span className="border border-gray-500 text-gray-500 px-4 py-3 rounded-full">
                            <ShieldEllipsis className="w-5 h-5" />
                        </span>
                        <input onChange={HandleChange} name="password" type="password" className="input input-bordered w-full focus:outline-none" />
                    </div>
                </div>
                <button type="submit" className="btn btn-success btn-sm">Actualizar</button>
            </form>
        </>
    )
}

export default UpdatePassword;
