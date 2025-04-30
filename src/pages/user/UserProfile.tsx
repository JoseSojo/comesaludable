import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { LogOut, Home, User2, Clock, Settings} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DataUser from '../../components/user/DataUser';
import ActicityUser from '../../components/user/ActivityUser';
import SettingsUser from '../../components/user/SettingsUser';
import PhotoProfile from '../../components/user/PhotoProfile';
import ButtonChangeSection from '../../components/user/ChangeSectionProfile';

const UserProfile: React.FC = () => {
    const { user, logout } = useAuth();
    const [activeTab, setActiveTab] = useState<'profile' | 'activity' | 'settings'>('profile');
    const navigate = useNavigate();


    return (
        <div className="min-h-screen">
            <div className="navbar bg-primary shadow-lg">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Mi Perfíl</a>
                </div>
                <div className="flex-none">
                    <button onClick={() => navigate(`/`)} className="btn btn-ghost gap-2">
                        <Home className="w-5 h-5" />
                        <span className='hidden md:block'>Inicio</span>
                    </button>
                    <button onClick={logout} className="btn btn-ghost gap-2">
                        <LogOut className="w-5 h-5" />
                        <span className='hidden md:block'>Logout</span>
                    </button>
                </div>
            </div>

            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                        <div className="card bg-white shadow-xl">
                            <div className="card-body items-center text-center">
                                <PhotoProfile />
                                <h2 className="card-title mt-4">{user?.name} {user?.lastname}</h2>

                                <div className="divider"></div>
                                <div className="w-full">
                                    <ButtonChangeSection ico={<User2 />} change={() => setActiveTab('profile')} label='Perfil' tab='profile' />
                                    <ButtonChangeSection ico={<Clock />} change={() => setActiveTab('activity')} label='Actividad' tab='activity' />
                                    <ButtonChangeSection ico={<Settings />} change={() => setActiveTab('settings')} label='Configuraciones' tab='settings' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        {activeTab === 'profile' && <DataUser />}
                        {activeTab === 'activity' && <ActicityUser />}
                        {activeTab === 'settings' && <SettingsUser />}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UserProfile;