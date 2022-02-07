import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import dotenv from 'dotenv';
import L from 'leaflet';
import greenAirExt from 'assets/greenAirExt.png';
import redAirExt from 'assets/redAirExt.png';
import greyAirExt from 'assets/greyAirExt.png';
import yellowAirExt from 'assets/yellowAirExt.png';
import { Marker, Popup } from 'react-leaflet';
import MarkerIndoorGroup from 'react-leaflet-markercluster';
import Share from 'Components/ShareButton';
import Spinner from 'Components/Spinner';
import SPopup from './style';
import './index.css';
import EqaiContext from '../../Context/EqaiContext';

dotenv.config();

const greenAirIcon = new L.Icon({
  iconUrl: greenAirExt,
  iconSize: [25, 25],
});
const redAirIcon = new L.Icon({
  iconUrl: redAirExt,
  iconSize: [25, 25],
});
const yellowAirIcon = new L.Icon({
  iconUrl: yellowAirExt,
  iconSize: [25, 25],
});
const greyAirIcon = new L.Icon({
  iconUrl: greyAirExt,
  iconSize: [25, 25],
});

export default function MarkerOutdoor() {
  const [allDataOutdoor, setAllDataOutdoor] = useState([]);
  const [markers, setMarkers] = useState(<></>);
  const [loading, setLoading] = useState(false);
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

  const updateMarkers = () => {
    const tmpMarkers = allDataOutdoor.map((e) => {
      const value = e[0][filterValue];
      let icon = greyAirIcon;
      let filter = 'N/A';
      let unit;
      let displayValue = 0;
      setLoading(false);
      switch (filterValue) {
        case 'aqi':
          filter = 'Aqi';
          unit = '';
          displayValue = parseInt(e[0].aqi, 10);
          if (value > 50) icon = greenAirIcon;
          else icon = redAirIcon;
          break;
        case 'pm1':
          filter = 'Pm1';
          unit = 'µg/m3';
          displayValue = parseInt(e[0].pm1, 10);
          if (value <= 10) icon = greenAirIcon;
          else if (value > 10 && value <= 20) icon = yellowAirIcon;
          else icon = redAirIcon;
          break;
        case 'pm10':
          filter = 'Pm10';
          unit = 'µg/m3';
          displayValue = parseInt(e[0].pm10, 10);
          if (value <= 20) icon = greenAirIcon;
          else if (value > 20 && value <= 40) icon = yellowAirIcon;
          else icon = redAirIcon;
          break;
        case 'pm25':
          filter = 'Pm25';
          unit = 'µg/m3';
          displayValue = parseInt(e[0].pm25, 10);
          if (value <= 15) icon = greenAirIcon;
          else if (value > 15 && value <= 25) icon = yellowAirIcon;
          else icon = redAirIcon;
          break;
        case 'ppm':
          filter = 'Ppm';
          unit = 'mg/kg';
          displayValue = parseInt(e[0].ppm, 10);
          if (value < 50) icon = greenAirIcon;
          else icon = redAirIcon;
          break;
        case 'no2':
          filter = 'NO2';
          unit = 'mg/kg';
          displayValue = parseInt(e[0].no2, 10);
          if (value < 50) icon = greenAirIcon;
          else icon = redAirIcon;
          break;
        case 'o3':
          filter = 'O3';
          unit = 'mg/kg';
          displayValue = parseInt(e[0].o3, 10);
          if (value < 50) icon = greenAirIcon;
          else icon = redAirIcon;
          break;
        case 'nox':
          filter = 'Nox';
          unit = 'mg/kg';
          displayValue = parseInt(e[0].nox, 10);
          if (value < 50) icon = greenAirIcon;
          else icon = redAirIcon;
          break;
        case 'no':
          filter = 'NO';
          unit = 'mg/kg';
          displayValue = parseInt(e[0].no, 10);
          if (value < 50) icon = greenAirIcon;
          else icon = redAirIcon;
          break;
        case 'temperature':
          filter = 'Température';
          unit = '°C';
          displayValue = parseInt(e[0].temperature, 10);
          if (value <= 14 || value > 28) icon = redAirIcon;
          else if (value <= 18 || value > 24) icon = yellowAirIcon;
          else icon = greenAirIcon;
          break;
        case 'humidity':
          filter = 'Humidité';
          unit = '%';
          displayValue = parseInt(e[0].humidity, 10);
          if (value <= 20 || value > 80) icon = redAirIcon;
          else if (value <= 30 || value > 60) icon = yellowAirIcon;
          else icon = greenAirIcon;
          break;
        default:
          icon = greyAirIcon;
          break;
      }
      if (value <= 0 || Number.isNaN(value)) {
        icon = greyAirIcon;
        unit = '';
        displayValue = 'Pas de mesure';
      }

      return (
        <Marker
          position={[e[0].adresses_latitude, e[0].adresses_longitude]}
          icon={icon}
          key={e[0].id}
        >
          <Popup>
            <SPopup>
              <h2 className="titleCaptor">Capteur extérieur</h2>
              <ul>
                <li>{`${filter} : ${displayValue} ${unit}`}</li>
                <li className="date">
                  Date : {changeToLocalDate(e[0].timestamp)}
                </li>
              </ul>
              <h2>Partager</h2>
              <Share data={e[0]} />
            </SPopup>
          </Popup>
        </Marker>
      );
    });
    setMarkers(tmpMarkers);
  };

  useEffect(() => {
    try {
      axios.get(`${process.env.REACT_APP_API_URL}/outdoor`).then(({ data }) => {
        const finalData = data.filter((value) => value.length);
        setAllDataOutdoor(finalData);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(updateMarkers, [allDataOutdoor]);
  useEffect(() => {
    setLoading(true);
    updateMarkers();
  }, [filterValue]);

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
      {loading ? <Spinner /> : markers}
    </MarkerIndoorGroup>
  );
}
