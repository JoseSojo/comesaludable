import { Camera, Info, MapPinned, Share2 } from "lucide-react";
import { FC } from "react";
import { useAuth } from "../../context/AuthContext";

interface Props {
    profileImage: string
}

const HeroRestaurant: FC<Props> = ({ profileImage }) => {

    const { user } = useAuth();

    return (
        <div className="relative -mt-24 mb-8">
            <div className="bg-white rounded-xl shadow-xl p-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative">
                        <img
                            src={profileImage}
                            alt="Restaurant Logo"
                            className="w-32 h-32 rounded-xl object-cover shadow-lg"
                        />
                        <button className="btn btn-circle btn-sm absolute top-0 right-0">
                            <Camera className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-bold">{user.name}</h1>
                                <p className="text-gray-600 flex items-center gap-2 mt-2">
                                    <MapPinned className="w-5 h-5" />
                                    {user.address}
                                </p>
                                <p className="text-gray-600 flex items-center gap-2 mt-2">
                                    <MapPinned className="w-5 h-5" />
                                    {user.horario}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button className="btn btn-primary">
                                    <Share2 className="w-5 h-5" />
                                    Share Profile
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <div className="badge badge-lg">{user.typeReference.name}</div>
                            <div className="badge badge-lg">{user.environmentReference.name}</div>
                        </div>
                        <div className="flex">
                            <p className="text-gray-600 flex items-center gap-5 mt-2">
                                <Info className="w-5 h-5" />
                                {user.about}
                            </p>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">
                                <Share2 className="w-5 h-5 text-primary" />
                                Redes Sociales
                            </h2>
                            <div className='flex gap-3'>
                                <a className='btn btn-outline btn-primary btn-sm'><img src='/fb.svg' className='w-5 h-5' /></a>
                                <a className='btn btn-outline btn-primary btn-sm'><img src='/ig.svg' className='w-5 h-5' /></a>
                                <a className='btn btn-outline btn-primary btn-sm'><img src='/tk.svg' className='w-5 h-5' /></a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default HeroRestaurant;
