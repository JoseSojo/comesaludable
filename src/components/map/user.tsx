import { divIcon } from "leaflet";
import { User2 } from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";

const createJUserIcon = () => {
    const iconMarkup = renderToStaticMarkup(
        <div className="bg-white rounded-lg flex justify-center items-center">
            <User2 className="text-red-500" size={20} />
        </div>
    );

    return divIcon({
        html: iconMarkup,
        className: "custom-icon",
        iconSize: [24, 24],
        iconAnchor: [12, 24],
    });
};

export default createJUserIcon;
