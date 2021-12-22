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
        {allDataIndoors && (
          <MarkerClusterGroup>
            {allDataIndoors.map((e) => {
              console.log(e);
              return (
                <Marker position={[e.adresses_latitude, e.adresses_longitude]}>
                  <Popup>
                    <ul>
                      <li>Aqi : {e.aqi}</li>
                      <li>Pm1 : {e.pm1}</li>
                      <li>Pm10 : {e.pm10}</li>
                      <li>Pm25 : {e.pm25}</li>
                      <li>Ppm : {e.ppm}</li>
                      <li>Temperature : {e.temperature}</li>
                      <li>Timestamp : {e.timestamp}</li>
                      <li>Humidity : {e.humidity}</li>
                      <li>lat : {e.adresses_latitude}</li>
                      <li>long : {e.adresses_longitude}</li>
                    </ul>
                  </Popup>
                </Marker>
              );
            })}
          </MarkerClusterGroup>
        )}
      </MapContainer>
    </SMap>
  );
}
