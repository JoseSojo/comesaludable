import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import createJUserIcon from "./user";

const UserLocationMarker = () => {
    const [position, setPosition] = useState<[number, number] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const map = useMap();

    useEffect(() => {
        map.locate({
            setView: false, // No centrar automáticamente (para no perder el zoom de Venezuela)
            maxZoom: 16,
            watch: true,
        });

        map.on("locationfound", (e) => {
            setPosition([e.latlng.lat, e.latlng.lng]);
        });

        map.on("locationerror", (e) => {
            setError(e.message);
        });
    }, [map]);

    if (error) {
        return <Popup>Error: {error}</Popup>;
    }

    return position ? (
        <Marker position={position} icon={createJUserIcon()}>
            <Popup>¡Estás aquí! 👋</Popup>
        </Marker>
    ) : null;
}

export default UserLocationMarker;