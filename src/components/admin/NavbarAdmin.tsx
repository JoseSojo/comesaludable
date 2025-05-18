import { FC } from "react";
import {
    Apple,
    BarChart3,
    Home,
    LogOut,
    FileArchive,
    Heart,
    Box,
    BoxSelect,
    Flame
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLocation } from "wouter";
interface Props { }

const NavbarAdmin: FC<Props> = () => {
    const { user, logout } = useAuth();
    const location = useLocation();
    
    return (
        <div className="navbar bg-primary shadow-lg">
            <div className="flex-1">
                <a href='/admin' className="btn btn-ghost text-xl">Panel</a>
            </div>
            <div className="flex-none gap-4">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost gap-2">
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-8">
                                <span>{user.name.toUpperCase()}</span>
                            </div>
                        </div>
                        <span>{user?.username}</span>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-neutral">
                        <li>
                            <button onClick={() => location[1](`/admin/environment`)} className="text-">
                                <Flame size={16} />
                                Ambientes
                            </button>
                        </li>
                        <li>
                            <button onClick={() => location[1](`/admin/category`)} className="text-">
                                <Box size={16} />
                                Categorías
                            </button>
                        </li>
                        <li>
                            <button onClick={() => location[1](`/admin/type`)} className="text-">
                                <BoxSelect size={16} />
                                Tipos
                            </button>
                        </li>
                        <li>
                            <button onClick={() => location[1](`/admin/restaurants`)} className="text-">
                                <Apple size={16} />
                                Restaurantes
                            </button>
                        </li>
                        <li>
                            <button onClick={() => location[1](`/admin/menus`)} className="text-">
                                <Heart size={16} />
                                Menús
                            </button>
                        </li>
                        <li>
                            <button onClick={() => location[1](`/admin/analytic`)} className="text-">
                                <BarChart3 size={16} />
                                Análisis
                            </button>
                        </li>
                        <li>
                            <button onClick={() => location[1](`/admin/report`)} className="text-">
                                <FileArchive size={16} />
                                Reporte
                            </button>
                        </li>
                        <li>
                            <button onClick={() => location[1](`/`)} className="text-">
                                <Home size={16} />
                                Inicio
                            </button>
                        </li>
                        <li>
                            <button onClick={logout} className="text-error">
                                <LogOut size={16} />
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavbarAdmin;
