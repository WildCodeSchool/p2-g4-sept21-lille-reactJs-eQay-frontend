import axios from 'axios';
import { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';
import MarkerIndoorGroup from 'react-leaflet-markercluster';

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
          <Marker position={[e[0].adresses_latitude, e[0].adresses_longitude]}>
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
    </MarkerIndoorGroup>
  );
}
