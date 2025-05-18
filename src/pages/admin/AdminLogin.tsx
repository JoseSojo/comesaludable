import { ChangeEvent, FC, FormEvent, useState } from "react";
import Logo from "../../components/common/Logo";
import toast from "react-hot-toast";
import { ApiAuthAdapter } from "../../infrastructure/adapters/ApiAuthAdapter";
import { useLocation } from "wouter";

interface Props { }

const AdminLogin: FC<Props> = ({ }) => {

    const [data, setData] = useState({ username: ``, password: `` });
    const location = useLocation();

    const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData(prev => { return {...prev, [e.target.name]:e.target.value}  });
    }

    const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!data.username) return toast.error(`Campo usuario requerido`);
        if(!data.password) return toast.error(`Campo contraseña requerido`);
        
        (async () => {
            const adapter = new ApiAuthAdapter();


            const response = await adapter.adminLogin(data.username, data.password );
            if (response && response.error) return toast.error(`Error al iniciar como admin`);
            if (response && response.type === `error`) return toast.error(response.message  );
            if (response && response.code === 401) return toast.error(response.message  );

            window.localStorage.setItem(`comesaludable_token`, response.token);
            window.localStorage.setItem(`comesaludable_data`, JSON.stringify(response.data));

            // location[1](`/admin`)
            toast.success(response.message);
            setTimeout(() => location[1](`/admin`), 300);
            
        })()

    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <Logo />
                    <h1 className="mt-4 text-3xl font-bold text-primary-800">Admin Dashboard</h1>
                    <p className="mt-2 text-secondary-600">Sign in to access the admin panel</p>
                </div>

                <div className="card bg-white shadow-xl rounded-xl animate-fade-in">
                    <form onSubmit={HandleSubmit} className="card-body p-6 sm:p-8">
                        <label>
                            <span className="text-sm text-gray-600 font-semibold">Correo/Usuario</span>
                            <input name="username" onChange={HandleChange} type="text" value={data.username} className="w-full border focus:outline-none px-3 py-1 rounded" />
                        </label>
                        <label>
                            <span className="text-sm text-gray-600 font-semibold">Contraseña</span>
                            <input name="password" onChange={HandleChange} type="password" value={data.password} className="w-full border focus:outline-none px-3 py-1 rounded" />
                        </label>
                        <button type="submit" className="btn btn-sm btn-primary">Entrar</button>
                    </form>
                </div>

                <div className="mt-8 text-center text-sm text-secondary-500">
                    <p>Protected dashboard. Authorized personnel only.</p>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
