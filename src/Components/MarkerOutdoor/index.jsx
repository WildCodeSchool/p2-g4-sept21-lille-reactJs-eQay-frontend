import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import dotenv from 'dotenv';
import L from 'leaflet';
import blueAirExt from 'assets/blueAirExt.png';
import greenAirExt from 'assets/greenAirExt.png';
import orangeAirExt from 'assets/orangeAirExt.png';
import redAirExt from 'assets/redAirExt.png';
import { Marker, Popup } from 'react-leaflet';
import MarkerIndoorGroup from 'react-leaflet-markercluster';
import Share from 'Components/ShareButton';
import SPopup from './style';
import './index.css';
import EqaiContext from '../../Context/EqaiContext';

dotenv.config();

const blueAirIcon = new L.Icon({
  iconUrl: blueAirExt,
  iconSize: [25, 25],
});
const greenAirIcon = new L.Icon({
  iconUrl: greenAirExt,
  iconSize: [25, 25],
});
const orangeAirIcon = new L.Icon({
  iconUrl: orangeAirExt,
  iconSize: [25, 25],
});
const redAirIcon = new L.Icon({
  iconUrl: redAirExt,
  iconSize: [25, 25],
});

export default function MarkerOutdoor() {
  const temp = 'temperature';
  const [allDataOutdoor, setAllDataOutdoor] = useState([]);
  const { filterValue } = useContext(EqaiContext);
  useEffect(() => {
    try {
      axios.get(`${process.env.REACT_APP_API_URL}/indoor`).then(({ data }) => {
        setAllDataOutdoor(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  function switchIcon(value) {
    if (
      (filterValue === 'pm10' && value === null) ||
      (filterValue === 'pm25' && value === null) ||
      (filterValue === 'no2' && value === null) ||
      (filterValue === 'o3' && value === null) ||
      (filterValue === 'nox' && value === null) ||
      (filterValue === 'no' && value === null)
    ) {
      return blueAirIcon;
    }
    if (filterValue === 'pm10' && (value === 0 || value < 20)) {
      return greenAirIcon;
    }
    if (filterValue === 'pm10' && (value > 20 || value <= 40)) {
      return orangeAirIcon;
    }
    if (filterValue === 'pm10' && value > 40) {
      return redAirIcon;
    }
    if (filterValue === 'pm25' && (value === 0 || value <= 15)) {
      return greenAirIcon;
    }
    if (filterValue === 'pm25' && (value > 15 || value <= 25)) {
      return orangeAirIcon;
    }
    if (filterValue === 'pm25' && value > 25) {
      return redAirIcon;
    }
    if (filterValue === 'temperature' && value > 18 && value < 24) {
      return greenAirIcon;
    }
    if (
      filterValue === 'temperature' &&
      value > 14 &&
      value < 18 &&
      value > 24 &&
      value < 28
    ) {
      return orangeAirIcon;
    }
    if (filterValue === 'temperature' && (value < 14 || value > 28)) {
      return greenAirIcon;
    }
    if (filterValue === 'humidity' && (value > 30 || value < 60)) {
      return redAirIcon;
    }
    if (
      filterValue === 'humidity' &&
      (value > 20 || value < 30 || value > 60 || value > 80)
    ) {
      return orangeAirIcon;
    }
    if (filterValue === 'humidity' && (value < 20 || value > 80)) {
      return redAirIcon;
    }
    return blueAirIcon;
  }

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
      {allDataOutdoor.map((e) => {
        return e[0].type === 'Ext' ? (
          <Marker
            position={[e[0].adresses_latitude, e[0].adresses_longitude]}
            icon={switchIcon(e[0][filterValue])}
            key={e[0].id}
          >
            <Popup>
              <SPopup>
                <ul>
                  {filterValue === 'aqi' && e[0].aqi ? (
                    <li>Aqi : {e[0].aqi}</li>
                  ) : null}
                  {filterValue === 'pm1' && e[0].pm1 ? (
                    <li>Pm1 : {e[0].pm1} µg/m3</li>
                  ) : null}
                  {filterValue === 'pm25' && e[0].pm25 ? (
                    <li>Pm25 : {e[0].pm25} µg/m3</li>
                  ) : null}
                  {filterValue === 'pm10' && e[0].pm10 ? (
                    <li>Pm10 : {e[0].pm10} µg/m3</li>
                  ) : null}
                  {filterValue === 'ppm' && e[0].ppm ? (
                    <li>Ppm : {e[0].ppm} mg/kg</li>
                  ) : null}
                  {filterValue === 'no2' && e[0].no2 ? (
                    <li>NO2 : {e[0].no2} µg-m3</li>
                  ) : null}
                  {filterValue === 'o3' && e[0].o3 ? (
                    <li>O3 : {e[0].o3} µg-m3</li>
                  ) : null}
                  {filterValue === 'nox' && e[0].nox ? (
                    <li>NOx : {e[0].nox} µg-m3</li>
                  ) : null}
                  {filterValue === 'no' && e[0].no ? (
                    <li>NO : {e[0].no} µg-m3</li>
                  ) : null}
                  {filterValue === 'temperature' && e[0][temp] ? (
                    <li>NO : {e[0][temp]} °C</li>
                  ) : null}
                  {filterValue === 'humidity' && e[0].humidity ? (
                    <li>NO : {e[0].humidity} %</li>
                  ) : null}
                  {filterValue === 'aqi' && e[0].aqi === null ? (
                    <li>Aqi : Pas de donnée</li>
                  ) : null}
                  {filterValue === 'pm1' && e[0].pm1 === null ? (
                    <li>Pm1 : Pas de donnée</li>
                  ) : null}
                  {filterValue === 'pm25' && e[0].pm25 === null ? (
                    <li>Pm25 : Pas de donnée</li>
                  ) : null}
                  {filterValue === 'pm10' && e[0].pm10 === null ? (
                    <li>Pm10 : Pas de donnée</li>
                  ) : null}
                  {filterValue === 'ppm' && e[0].ppm === null ? (
                    <li>Ppm : Pas de donnée</li>
                  ) : null}
                  {filterValue === 'no2' && e[0].no2 === null ? (
                    <li>NO2 : Pas de donnée</li>
                  ) : null}
                  {filterValue === 'o3' && e[0].o3 === null ? (
                    <li>O3 : Pas de donnée</li>
                  ) : null}
                  {filterValue === 'nox' && e[0].nox === null ? (
                    <li>NOx : Pas de donnée</li>
                  ) : null}
                  {filterValue === 'no' && e[0].no === null ? (
                    <li>NO : Pas de donnée</li>
                  ) : null}
                  {filterValue === 'temperature' && e[0][temp] === null ? (
                    <li>Température : Pas de donnée</li>
                  ) : null}
                  {filterValue === 'humidity' && e[0].humidity === null ? (
                    <li>Humidité : Pas de donnée</li>
                  ) : null}
                  <li>Date : {changeToLocalDate(e[0].timestamp)}</li>
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
