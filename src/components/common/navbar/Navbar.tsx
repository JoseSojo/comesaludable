import React, { useState } from 'react';
import { Apple, LogIn, LogOut, Salad, Search, User2 } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';

interface Props {
    onLoginClick: () => void;
    onRegisterClick: () => void;
    onRestaurantLoginClick: () => void;
}

const Navbar: React.FC<Props> = ({ onLoginClick, onRegisterClick, onRestaurantLoginClick }) => {
    const { isAuthenticated, user, logout } = useAuth();
    const [loginState, setLoginState] = useState(false);

    return (
        <nav className="hidden md:block bg-white border-b border-neutral/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Salad className="h-8 w-8 text-primary" />
                        <span className="ml-2 text-xl font-semibold text-neutral">HealthySpot</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {
                            !isAuthenticated && <>
                                <button onClick={() => setLoginState(!loginState)} className="relative flex gap-2 nav-link">
                                    <LogIn width={16} />
                                    <span className='hidden lg:block'>Entrar</span>
                                    {
                                        loginState &&
                                        <div className='duration-200 grid absolute w-[200px] z-10 translate-y-7 py-2 rounded-md shadow-md border-t bg-white'>
                                            <button
                                                onClick={() => {
                                                    setLoginState(false);
                                                    onLoginClick();
                                                }}
                                                className='py-2 hover:bg-slate-200'
                                            >
                                                Persona
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setLoginState(false);
                                                    onRegisterClick();
                                                }}
                                                className='py-2 hover:bg-slate-200'
                                            >
                                                Crear Cuenta
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setLoginState(false);
                                                    onRestaurantLoginClick();
                                                }}
                                                className='py-2 hover:bg-slate-200'
                                            >
                                                Restaurante
                                            </button>
                                        </div>
                                    }
                                </button>
                                <a href='/search/restaurant' className="nav-link flex gap-2">
                                    <Apple width={16} />
                                    <span className='hidden lg:block'>Restaurantes</span>
                                </a>
                            </>
                        }

                        {
                            isAuthenticated && !user.access && <>
                                <a href='/profile' className="nav-link flex gap-2">
                                    <User2 width={16} />
                                    <span className='hidden lg:block'>Perfil</span>
                                </a>
                                <a href='/profile' className="nav-link flex gap-2">
                                    <Apple width={16} />
                                    <span className='hidden lg:block'>Restaurantes</span>
                                </a>
                            </>
                        }

                        <a href='/search' className="nav-link btn  btn-primary flex gap-2">
                            <Search width={16} />
                            <span className='hidden lg:block'>Buscar</span>
                        </a>

                        {
                            isAuthenticated && user.access && <>
                                <a href='/restaurant/profile' className="nav-link flex gap-2">
                                    <User2 width={16} />
                                    <span className='hidden lg:block'>Perfil</span>
                                </a>
                            </>
                        }

                        {
                            isAuthenticated && <>
                                <button onClick={logout} className="nav-link flex gap-2">
                                    <LogOut width={16} />
                                    <span className='hidden lg:block'>Salir</span>
                                </button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;