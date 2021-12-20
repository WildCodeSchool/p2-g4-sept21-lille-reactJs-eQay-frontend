import axios from 'axios';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import SMap from './style';

export default function Map() {
  const [allDataIndoors, setAllDataIndoors] = useState([]);

  useEffect(() => {
    try {
      console.log('coucou');
      axios.get('http://localhost:5050/indoor').then(({ data }) => {
        setAllDataIndoors(data[0]);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(allDataIndoors);

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
        {allDataIndoors.map((e) => {
          return (
            <Marker position={[e.adresses_latitude, e.adresses_longitude]}>
              <Popup>
                Vous êtes ici. <br /> Bienvenue à Lille.
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </SMap>
  );
}
