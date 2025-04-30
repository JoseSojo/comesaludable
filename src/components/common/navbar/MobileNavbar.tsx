import React, { useState } from 'react';
import { Home, Search, User, Apple, LogOut, LogIn, BarChart2 } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';

interface Props {
    onLoginClick: () => void;
    onRegisterClick: () => void;
    onRestaurantLoginClick: () => void;
}

const MobileNav: React.FC<Props> = ({ onLoginClick, onRegisterClick, onRestaurantLoginClick }) => {

    const { isAuthenticated, user, logout } = useAuth();
    const [loginState, setLoginState] = useState(false);

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral/10 z-50">
            <div className="flex justify-between h-16">
                <a href="#" className="flex flex-col flex-1 items-center justify-center text-xs text-neutral/60 hover:text-primary transition-colors duration-200 active">
                    <Home className="h-6 w-6" />
                    <span>Home</span>
                </a>
                <a href="#search" className="flex flex-col flex-1 items-center justify-center text-xs text-neutral/60 hover:text-primary transition-colors duration-200">
                    <Search className="h-6 w-6" />
                    <span>Buscar</span>
                </a>
                {
                    isAuthenticated && user.access &&
                    <>
                        <a href="/restaurant" className="flex flex-col flex-1 items-center justify-center text-xs text-neutral/60 hover:text-primary transition-colors duration-200 active">
                            <BarChart2 className="h-6 w-6" />
                            <span>Panel</span>
                        </a>
                        <a href="/restaurant/profile" className="flex flex-col flex-1 items-center justify-center text-xs text-neutral/60 hover:text-primary transition-colors duration-200">
                            <Apple className="h-6 w-6" />
                            <span>Perfil</span>
                        </a>
                    </>
                }
                {
                    user && !user.access &&
                    <a href="#search" className="flex flex-col flex-1 items-center justify-center text-xs text-neutral/60 hover:text-primary transition-colors duration-200">
                        <Apple className="h-6 w-6" />
                        <span>Restaurantes</span>
                    </a>
                }
                {/* {isAuthenticated && !user.access && <a href="/favorites" className="flex flex-col flex-1 items-center justify-center text-xs text-neutral/60 hover:text-primary transition-colors duration-200">
                    <Heart className="h-6 w-6" />
                    <span>Favorites</span>
                </a>} */}
                {isAuthenticated && <button onClick={logout} className="flex flex-col flex-1 items-center justify-center text-xs text-neutral/60 hover:text-primary transition-colors duration-200">
                    <LogOut className="h-6 w-6" />
                    <span>Salir</span>
                </button>}
                {isAuthenticated && !user.access && <a href="/profile" className="flex flex-col flex-1 items-center justify-center text-xs text-neutral/60 hover:text-primary transition-colors duration-200">
                    <User className="h-6 w-6" />
                    <span>Profile</span>
                </a>}
                {!isAuthenticated && <button onClick={() => setLoginState(!loginState)} className="relative flex flex-col flex-1 items-center justify-center text-xs text-neutral/60 hover:text-primary transition-colors duration-200">
                    <LogIn className="h-6 w-6" />
                    <span>Entrar</span>
                    {
                        loginState &&
                        <div className='duration-200 grid absolute w-full z-10 -translate-y-16 py-2 rounded-md shadow-md border-t bg-white'>
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
                </button>}
            </div>
        </div>
    );
};

export default MobileNav;