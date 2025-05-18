import { divIcon } from "leaflet";
import { Apple } from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";

const createRestaurantIcon = () => {
    const iconMarkup = renderToStaticMarkup(
        <div className="bg-white rounded-lg flex justify-center items-center">
            <Apple className="text-green-500" size={20} />
        </div>
    );

    return divIcon({
        html: iconMarkup,
        className: "custom-icon",
        iconSize: [24, 24],
        iconAnchor: [12, 24],
    });
};

export default createRestaurantIcon;
