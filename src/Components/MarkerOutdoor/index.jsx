import axios from 'axios';
import { useState, useEffect } from 'react';
import L from 'leaflet';
import blueAirExt from 'assets/blueAirExt.png';
import { Marker, Popup } from 'react-leaflet';
import MarkerIndoorGroup from 'react-leaflet-markercluster';
import Share from 'Components/ShareButton';
import SPopup from './style';
import './index.css';

const redAirIcon = new L.Icon({
  iconUrl: blueAirExt,
  iconSize: [25, 25],
});
export default function MarkerOutdoor() {
  const [allDataOutdoor, setAllDataOutdoor] = useState([]);
  useEffect(() => {
    try {
      axios.get('http://localhost:5050/indoor').then(({ data }) => {
        setAllDataOutdoor(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
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
            icon={redAirIcon}
            key={e[0].id}
          >
            <Popup>
              <SPopup>
                <ul>
                  {e[0].no2 && <li>No2:{parseInt(e[0].no2, 10)}</li>}
                  {e[0].o3 && <li>O3:{parseInt(e[0].o3, 10)}</li>}
                  {e[0].nox && <li>NOX:{parseInt(e[0].nox, 10)}</li>}
                  {e[0].no && <li>No:{parseInt(e[0].no, 10)}</li>}
                  {e[0].pm10 && <li>Pm10:{parseInt(e[0].pm10, 10)}</li>}
                  {e[0].pm25 && <li>Pm25:{parseInt(e[0].pm25, 10)}</li>}
                  {e[0].temperature && (
                    <li>Température : {parseInt(e[0].temperature, 10)}</li>
                  )}
                  <li>Date : {e[0].timestamp}</li>
                  {e[0].humidity && <li>Humidité : {e[0].humidity}</li>}
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
