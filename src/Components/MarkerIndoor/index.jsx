import axios from 'axios';
import { useState, useEffect } from 'react';
import L from 'leaflet';
import iconeAir from 'assets/greenAir.png';
import { Marker, Popup } from 'react-leaflet';
import MarkerIndoorGroup from 'react-leaflet-markercluster';
import SPopup from './style';

const iconeair = new L.Icon({
  iconUrl: iconeAir,
  iconSize: [25, 25],
});

export default function MarkerIndoor() {
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
    <MarkerIndoorGroup>
      {allDataIndoors.map((e) => {
        return (
          <Marker
            position={[e[0].adresses_latitude, e[0].adresses_longitude]}
            icon={iconeair}
          >
            <Popup>
              <SPopup>
                <ul>
                  <li>Aqi : {e[0].aqi}</li>
                  <li>Pm1 : {e[0].pm1}</li>
                  <li>Pm10 : {e[0].pm10}</li>
                  <li>Pm25 : {e[0].pm25}</li>
                  <li>Ppm : {e[0].ppm}</li>
                  <li>Température : {e[0].temperature}</li>
                  <li>Date : {e[0].timestamp}</li>
                  <li>Humidité : {e[0].humidity}</li>
                </ul>
              </SPopup>
            </Popup>
          </Marker>
        );
      })}
    </MarkerIndoorGroup>
  );
}
