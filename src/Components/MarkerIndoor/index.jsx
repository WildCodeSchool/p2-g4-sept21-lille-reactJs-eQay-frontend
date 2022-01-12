import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import L from 'leaflet';
import greenAir from 'assets/greenAir.png';
import yellowAir from 'assets/yellowAir.png';
import orangeAir from 'assets/orangeAir.png';
import redAir from 'assets/redAir.png';
import greyAir from 'assets/greyAir.png';
import { Marker, Popup } from 'react-leaflet';
import MarkerIndoorGroup from 'react-leaflet-markercluster';
import SPopup from './style';
import './index.css';
import EqaiContext from '../../Context/EqaiContext';

const greenAirIcon = new L.Icon({
  iconUrl: greenAir,
  iconSize: [25, 25],
});

const yellowAirIcon = new L.Icon({
  iconUrl: yellowAir,
  iconSize: [25, 25],
});
const orangeAirIcon = new L.Icon({
  iconUrl: orangeAir,
  iconSize: [25, 25],
});
const redAirIcon = new L.Icon({
  iconUrl: redAir,
  iconSize: [25, 25],
});
const greyAirIcon = new L.Icon({
  iconUrl: greyAir,
  iconSize: [25, 25],
});

export default function MarkerIndoor() {
  const [allDataIndoors, setAllDataIndoors] = useState([]);
  const { filterValue } = useContext(EqaiContext);

  useEffect(() => {
    try {
      axios.get('http://localhost:5050/indoor').then(({ data }) => {
        setAllDataIndoors(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  function switchIcon(value) {
    if (value <= 0) {
      return greyAirIcon;
    }
    if (filterValue === 'aqi' && value > 50) {
      return greenAirIcon;
    }
    if (filterValue === 'aqi' && value < 50) {
      return redAirIcon;
    }
    if (filterValue === 'pm1' && value < 50) {
      return greenAirIcon;
    }
    if (filterValue === 'pm1' && value > 50) {
      return redAirIcon;
    }
    if (filterValue === 'pm10' && value < 50) {
      return greenAirIcon;
    }
    if (filterValue === 'pm10' && value > 50) {
      return redAirIcon;
    }
    if (filterValue === 'pm25' && value < 50) {
      return greenAirIcon;
    }
    if (filterValue === 'pm25' && value > 50) {
      return redAirIcon;
    }
    if (filterValue === 'ppm' && value < 50) {
      return greenAirIcon;
    }
    if (filterValue === 'ppm' && value > 50) {
      return orangeAirIcon;
    }

    return yellowAirIcon;
  }
  return (
    <MarkerIndoorGroup
      spiderfyDistanceMultiplier={1}
      iconCreateFunction={(cluster) => {
        return L.divIcon({
          html: `<span>${cluster.getChildCount()}</span>`,
          className: 'marker-cluster-custom',
          iconSize: L.point(40, 40, true),
        });
      }}
    >
      {allDataIndoors.map((e) => {
        return (
          <Marker
            position={[e[0].adresses_latitude, e[0].adresses_longitude]}
            icon={switchIcon(e[0][filterValue])}
            key={e[0].id}
          >
            <Popup>
              <SPopup>
                <ul>
                  {filterValue === 'aqi' ? (
                    <li>Aqi : {parseInt(e[0].aqi, 10)}</li>
                  ) : null}
                  {filterValue === 'pm1' ? (
                    <li>Pm1 : {parseInt(e[0].pm1, 10)}</li>
                  ) : null}
                  {filterValue === 'pm10' ? (
                    <li>Pm10 : {parseInt(e[0].pm10, 10)}</li>
                  ) : null}
                  {filterValue === 'pm25' ? (
                    <li>Pm25 : {parseInt(e[0].pm25, 10)}</li>
                  ) : null}
                  {filterValue === 'ppm' ? (
                    <li>Ppm : {parseInt(e[0].ppm, 10)}</li>
                  ) : null}
                  {e[0].temperature && (
                    <li>Température : {parseInt(e[0].temperature, 10)}</li>
                  )}
                  <li>Date : {e[0].timestamp}</li>
                  {e[0].humidity && <li>Humidité : {e[0].humidity}</li>}
                </ul>
              </SPopup>
            </Popup>
          </Marker>
        );
      })}
    </MarkerIndoorGroup>
  );
}
