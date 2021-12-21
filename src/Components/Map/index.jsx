import axios from 'axios';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import SMap from './style';

export default function Map() {
  const [allDataIndoors, setAllDataIndoors] = useState([]);

  useEffect(() => {
    try {
      axios.get('http://localhost:5050/indoor').then(({ data }) => {
        setAllDataIndoors(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

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
        <MarkerClusterGroup>
          {allDataIndoors.map((e) => {
            return (
              <Marker
                position={[e[0].adresses_latitude, e[0].adresses_longitude]}
              >
                <Popup>
                  <ul>
                    <li>Aqi : {e[0].aqi}</li>
                    <li>Pm1 : {e[0].pm1}</li>
                    <li>Pm10 : {e[0].pm10}</li>
                    <li>Pm25 : {e[0].pm25}</li>
                    <li>Ppm : {e[0].ppm}</li>
                    <li>Temperature : {e[0].temperature}</li>
                    <li>Timestamp : {e[0].timestamp}</li>
                    <li>Humidity : {e[0].humidity}</li>
                    <li>lat : {e[0].adresses_latitude}</li>
                    <li>long : {e[0].adresses_longitude}</li>
                  </ul>
                </Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </SMap>
  );
}
