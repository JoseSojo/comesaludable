import React, { useState } from 'react';
import {
    Building2, Phone,
    Facebook, Instagram, Twitter, Clock,
    Image as ImageIcon, Trash2, Plus, Camera,
    MapPinned, Share2, Award,
    Home,
    LogOut,
    User
} from 'lucide-react';
import HeroRestaurant from '../../../components/restaurant/HeroRestaurant';
import CoverRestaurant from '../../../components/restaurant/CoverRestaurant';
import NavbarRestaurant from '../../../components/restaurant/NavbarRestaurant';

const RestaurantProfile: React.FC = () => {
    
    const [coverImage, setCoverImage] = useState('https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg');
    const [profileImage, setProfileImage] = useState('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg');
    const [images, setImages] = useState<string[]>([
        'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
        'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
        'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
    ]);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImages(prev => [...prev, e.target?.result as string]);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = (index: number) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="min-h-screen bg-base-100">
            <NavbarRestaurant />
            <CoverRestaurant coverImage={coverImage} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <HeroRestaurant profileImage={profileImage} />

                <div className="card bg-white shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">
                            <ImageIcon className="w-5 h-5 text-primary" />
                            Galería
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {images.map((image, index) => (
                                <div key={index} className="relative group aspect-square">
                                    <img
                                        src={image}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                                        <button
                                            type="button"
                                            onClick={() => removeImage(index)}
                                            className="btn btn-error btn-sm"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <label className="flex flex-col items-center justify-center aspect-square border-2 border-dashed rounded-xl cursor-pointer hover:bg-base-200">
                                <Plus className="w-8 h-8 mb-2" />
                                <span className="text-sm">Add Photo</span>
                                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantProfile;