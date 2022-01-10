import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import L from 'leaflet';
import iconeAir from 'assets/greenAir.png';
import { Marker, Popup } from 'react-leaflet';
import MarkerIndoorGroup from 'react-leaflet-markercluster';
import SPopup from './style';
import './index.css';
import EqaiContext from '../../Context/EqaiContext';

const iconeair = new L.Icon({
  iconUrl: iconeAir,
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
  return (
    <MarkerIndoorGroup
      showCoverageOnHover={false}
      spiderfyDistanceMultiplier={2}
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
            icon={iconeair}
          >
            <Popup>
              <SPopup>
                <ul>
                  {filterValue === 'Aqi' ? <li>Aqi : {e[0].aqi}</li> : null}
                  {filterValue === 'Pm1' ? <li>Pm1 : {e[0].pm1}</li> : null}
                  {filterValue === 'Pm10' ? <li>Pm10 : {e[0].pm10}</li> : null}
                  {filterValue === 'Pm25' ? <li>Pm25 : {e[0].pm25}</li> : null}
                  {filterValue === 'Ppm' ? <li>Ppm : {e[0].ppm}</li> : null}
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
