import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import SMap from './style';

export default function Map() {
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
      </MapContainer>
    </SMap>
  );
}
