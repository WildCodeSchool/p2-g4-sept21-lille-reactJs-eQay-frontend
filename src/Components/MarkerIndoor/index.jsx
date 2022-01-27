import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import L from 'leaflet';
import dotenv from 'dotenv';
import greenAir from 'assets/greenAir.png';
import yellowAir from 'assets/yellowAir.png';
import orangeAir from 'assets/orangeAir.png';
import redAir from 'assets/redAir.png';
import greyAir from 'assets/greyAir.png';
import { Marker, Popup } from 'react-leaflet';
import MarkerIndoorGroup from 'react-leaflet-markercluster';
import Share from 'Components/ShareButton';
import SPopup from './style';
import './index.css';
import EqaiContext from '../../Context/EqaiContext';

dotenv.config();

const greenAirIcon = new L.Icon({
  iconUrl: greenAir,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
const yellowAirIcon = new L.Icon({
  iconUrl: yellowAir,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
const orangeAirIcon = new L.Icon({
  iconUrl: orangeAir,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
const redAirIcon = new L.Icon({
  iconUrl: redAir,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
const greyAirIcon = new L.Icon({
  iconUrl: greyAir,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});
export default function MarkerIndoor() {
  const [allDataIndoors, setAllDataIndoors] = useState([]);
  const { filterValue } = useContext(EqaiContext);
  function changeToLocalDate(date) {
    const parseDate = Date.parse(date);
    const newdate = new Date(parseDate);
    const localDate = newdate.toLocaleString(navigator.language, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
    return localDate.replace(',', ' ');
  }
  useEffect(() => {
    try {
      axios.get(`${process.env.REACT_APP_API_URL}/indoor`).then(({ data }) => {
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
    if (filterValue === 'pm1' && value < 10) {
      return greenAirIcon;
    }
    if (filterValue === 'pm1' && value > 10 && value <= 20) {
      return yellowAirIcon;
    }
    if (filterValue === 'pm1' && value > 20) {
      return redAirIcon;
    }
    if (filterValue === 'pm10' && value < 20) {
      return greenAirIcon;
    }
    if (filterValue === 'pm10' && value > 20 && value <= 40) {
      return yellowAirIcon;
    }
    if (filterValue === 'pm10' && value > 40) {
      return redAirIcon;
    }
    if (filterValue === 'pm25' && value < 15) {
      return greenAirIcon;
    }
    if (filterValue === 'pm25' && value > 15 && value <= 25) {
      return yellowAirIcon;
    }
    if (filterValue === 'pm25' && value > 25) {
      return redAirIcon;
    }
    if (filterValue === 'ppm' && value < 50) {
      return greenAirIcon;
    }
    if (filterValue === 'ppm' && value > 50) {
      return orangeAirIcon;
    }
    if (filterValue === 'temperature' && value < 18 && value > 24) {
      return greenAirIcon;
    }
    if (
      (filterValue === 'temperature' && value < 14 && value >= 18) ||
      (value > 24 && value < 28)
    ) {
      return yellowAirIcon;
    }
    if ((filterValue === 'temperature' && value < 14) || value >= 28) {
      return yellowAirIcon;
    }
    if (filterValue === 'humidity' && value >= 30 && value < 60) {
      return greenAirIcon;
    }
    if (
      (filterValue === 'humidity' && value >= 20 && value < 30) ||
      (value >= 60 && value < 80)
    ) {
      return yellowAirIcon;
    }
    if ((filterValue === 'humidity' && value < 20) || value >= 80) {
      return redAirIcon;
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
        return e[0].type === 'Int' ? (
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
                    <li>Pm1 : {parseInt(e[0].pm1, 10)} µg/m3</li>
                  ) : null}
                  {filterValue === 'pm10' ? (
                    <li>Pm10 : {parseInt(e[0].pm10, 10)} µg/m3</li>
                  ) : null}
                  {filterValue === 'pm25' ? (
                    <li>Pm2,5 : {parseInt(e[0].pm25, 10)} µg/m3</li>
                  ) : null}
                  {filterValue === 'ppm' ? (
                    <li>Ppm : {parseInt(e[0].ppm, 10)} mg/kg</li>
                  ) : null}
                  {filterValue === 'temperature' ? (
                    <li>Température : {parseInt(e[0].temperature, 10)} °c</li>
                  ) : null}
                  <li>Date : {changeToLocalDate(e[0].timestamp)}</li>
                  {filterValue === 'humidity' ? (
                    <li>Humidité : {e[0].humidity} %</li>
                  ) : null}
                </ul>
                <h2>Partager</h2>
                <Share data={e[0]} />
              </SPopup>
            </Popup>
          </Marker>
        ) : null;
      })}
    </MarkerIndoorGroup>
  );
}
