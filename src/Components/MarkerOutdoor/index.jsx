import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
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

const BlueAirIcon = new L.Icon({
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
  const [allDataOutdoor, setAllDataOutdoor] = useState([]);
  const { filterValue } = useContext(EqaiContext);
  useEffect(() => {
    try {
      axios.get('http://localhost:5050/indoor').then(({ data }) => {
        setAllDataOutdoor(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  function switchIcon(value) {
    if (
      filterValue === 'no2' ||
      filterValue === 'o3' ||
      filterValue === 'nox' ||
      filterValue === 'no'
    ) {
      return BlueAirIcon;
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
    return BlueAirIcon;
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
                  {filterValue === 'no2' ? (
                    <li>No2:{parseInt(e[0].no2, 10)}</li>
                  ) : null}
                  {filterValue === 'o3' ? (
                    <li>O3:{parseInt(e[0].o3, 10)}</li>
                  ) : null}
                  {filterValue === 'nox' ? (
                    <li>NOX:{parseInt(e[0].nox, 10)}</li>
                  ) : null}
                  {filterValue === 'no' ? (
                    <li>No:{parseInt(e[0].no, 10)}</li>
                  ) : null}
                  {filterValue === 'pm10' ? (
                    <li>Pm10 : {parseInt(e[0].pm10, 10)}</li>
                  ) : null}
                  {filterValue === 'pm25' ? (
                    <li>Pm25 : {parseInt(e[0].pm25, 10)}</li>
                  ) : null}
                  {filterValue === 'temperature' ? (
                    <li>Température : {parseInt(e[0].temperature, 10)}</li>
                  ) : null}
                  <li>Date :{e[0].timestamp.toLocaleString('fr-FR')}</li>
                  {filterValue === 'humidity' ? (
                    <li>Humidité : {e[0].humidity}</li>
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
