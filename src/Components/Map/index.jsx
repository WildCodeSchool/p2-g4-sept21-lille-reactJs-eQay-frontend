import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import { useState } from 'react';

import SMap from './style';

export default function Map() {
  const [position, setPosition] = useState(null);
  function LocationMarker() {
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <SMap>
      <MapContainer
        center={[50.629, 3.057]}
        zoom={13}
        scrollWheelZoom
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[50.629, 3.057]}>
          <Popup>
            Vous êtes ici. <br /> Bienvenue à Lille.
          </Popup>
        </Marker>
        <LocationMarker />
      </MapContainer>
    </SMap>
  );
}
