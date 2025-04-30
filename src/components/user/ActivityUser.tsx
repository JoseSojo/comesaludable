import { Heart, MapPin, Star } from "lucide-react";
import { FC } from "react";

interface Props { }

const ActicityUser: FC<Props> = () => {

    return (
        <div className="space-y-6">
            <div className="card bg-white shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-2 rounded-lg">
                                <Star className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium">Reviewed Green Garden Restaurant</p>
                                <p className="text-sm text-gray-600">Great healthy options and excellent service!</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="rating rating-sm">
                                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                                        <input type="radio" className="mask mask-star-2 bg-orange-400" checked readOnly />
                                    </div>
                                    <span className="text-sm text-gray-500">2 days ago</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-accent/10 p-2 rounded-lg">
                                <Heart className="w-6 h-6 text-accent" />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium">Added to Favorites</p>
                                <p className="text-sm text-gray-600">Mediterranean Bowl from Vital Kitchen</p>
                                <p className="text-sm text-gray-500 mt-1">1 week ago</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-secondary/10 p-2 rounded-lg">
                                <MapPin className="w-6 h-6 text-secondary" />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium">Visited Restaurant</p>
                                <p className="text-sm text-gray-600">Pure & Fresh</p>
                                <p className="text-sm text-gray-500 mt-1">2 weeks ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card bg-white shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mb-4">Favorite Restaurants</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-base-100 rounded-lg">
                                <div className="avatar">
                                    <div className="w-16 h-16 rounded-lg">
                                        <img src={`https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=150`} alt="Restaurant" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium">Green Garden</h3>
                                    <p className="text-sm text-gray-600">Organic • Vegan Options</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="text-sm">4.8</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActicityUser;
