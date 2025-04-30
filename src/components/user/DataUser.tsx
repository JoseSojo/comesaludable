import { Calendar, Edit, Mail, User } from "lucide-react";
import { FC, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { ApiUserAdapter } from "../../infrastructure/adapters/ApiUserAdapter";
import { UpdateResponseInterface } from "../../infrastructure/interface/ApiInterface";
import toast from "react-hot-toast";

interface Props { }

const DataUser: FC<Props> = () => {
    const { user } = useAuth();
    const [data, setData] = useState({ name: user.name, lastname: user.lastname, age: Number(user.age), email: user.email });

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const adapter = new ApiUserAdapter();

        (async () => {
            const response = await adapter.update({ data, id: user.id }) as UpdateResponseInterface;

            console.log(response);

            if (response.error) {
                if (typeof response.message === `string`) return toast.error(response.message);
                return response.message.forEach(msg => toast.error(msg));
            }

            // UPDATE DATA STORAGE
            const customUser = { ...user, name: data.name, lastname: data.lastname, age: data.age, email: data.email };
            window.localStorage.setItem(`comesaludable_data`, JSON.stringify(customUser));

            if (typeof response.message === `string`) return toast.success(response.message);
            return response.message.forEach(msg => toast.success(msg));
        })()

    }

    return (
        <form onSubmit={HandleSubmit} className="card bg-white shadow-xl">
            <div className="card-body">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="card-title">Personal Information</h2>
                    <button className="btn btn-primary btn-sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Profile
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Nombre</span>
                        </label>
                        <div className="flex gap-2">
                            <span className="border border-gray-500 text-gray-500 px-4 py-3 rounded-full">
                                <User className="w-5 h-5" />
                            </span>
                            <input onChange={HandleChange} type="text" value={data.name} name="name" className="input input-bordered w-full focus:outline-none" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Apellido</span>
                        </label>
                        <div className="flex gap-2">
                            <span className="border border-gray-500 text-gray-500 px-4 py-3 rounded-full">
                                <User className="w-5 h-5" />
                            </span>
                            <input onChange={HandleChange} type="text" value={data.lastname} name="lastname" className="input input-bordered w-full focus:outline-none" />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <div className="flex gap-2">
                            <span className="border border-gray-500 text-gray-500 px-4 py-3 rounded-full">
                                <Mail className="w-5 h-5" />
                            </span>
                            <input onChange={HandleChange} type="email" value={data.email} name="email" className="input input-bordered w-full focus:outline-none" />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Edad</span>
                        </label>
                        <div className="flex gap-2">
                            <span className="border border-gray-500 text-gray-500 px-4 py-3 rounded-full">
                                <Calendar className="w-5 h-5" />
                            </span>
                            <input onChange={HandleChange} type="number" value={data.age} name="age" className="input input-bordered w-full focus:outline-none" />
                        </div>
                    </div>


                </div>
            </div>
        </form>
    )
}

export default DataUser;
