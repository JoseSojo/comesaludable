import { useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Icon, Style } from 'ol/style';
import 'ol/ol.css';

const MapWithMarkers = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  const cities = [
    { name: "Caracas", lonLat: [-66.9036, 10.4806] },
    { name: "Maracay", lonLat: [-67.5918, 10.2469] },
    { name: "Valencia", lonLat: [-67.9982, 10.1626] },
    { name: "Guárico", lonLat: [-66.6167, 8.6667] },
    { name: "Barinas", lonLat: [-70.2075, 8.6226] },
  ];

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({ source: new OSM() }),
      ],
      view: new View({
        center: fromLonLat([-66.9036, 9.4806]),
        zoom: 6,
      }),
    });

    // Capa de marcadores
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({ source: vectorSource });
    map.addLayer(vectorLayer);

    // Estilo del marcador (¡IMPORTANTE!)
    const iconStyle = new Style({
      image: new Icon({
        src: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        scale: 1,
      }),
    });

    // Agregar marcadores
    cities.forEach(city => {
      const marker = new Feature({
        geometry: new Point(fromLonLat(city.lonLat)),
        name: city.name,
      });
      marker.setStyle(iconStyle); // Aplicar estilo
      vectorSource.addFeature(marker);
    });

    return () => map.setTarget(undefined);
  }, []);

  return (
    <div 
      ref={mapRef} 
      style={{ 
        width: '100%', 
        height: '500px', 
        border: '1px solid #ccc' 
      }} 
    />
  );
};

export default MapWithMarkers;