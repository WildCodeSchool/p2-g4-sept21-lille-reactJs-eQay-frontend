import { MapContainer, TileLayer } from 'react-leaflet';
import { useContext } from 'react';
import Filter from 'Components/Filter';
import MarkerIndoor from '../MarkerIndoor';
import EqaiContext from '../../Context/EqaiContext';
import SMap from './style';
import LocateUsers from '../LocateUser';
import ExtSensor from '../ExtSensor';

export default function Map() {
  const { findUser, setFindUser, showExtSensor, setShowExtSensor } =
    useContext(EqaiContext);

  function handleLocate() {
    return setFindUser(!findUser);
  }

  function handleExtSensor() {
    setShowExtSensor(!showExtSensor);
  }

  return (
    <>
      <SMap>
        <div id="map">
          <nav>
            <button
              className="bn632-hover bn18"
              type="button"
              id="locateButton"
              onClick={handleLocate}
            >
              <span>Localisation</span>
            </button>
            <button
              className="bn632-hover bn18"
              type="button"
              id="ExtSensorButton"
              onClick={handleExtSensor}
            >
              <span>Capteur exterieur</span>
            </button>
            <Filter />
          </nav>

          <MapContainer
            center={[46.227, 2.213]}
            zoom={6}
            scrollWheelZoom
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerIndoor />
            <LocateUsers />
            {showExtSensor && <ExtSensor />}
          </MapContainer>
        </div>
      </SMap>
    </>
  );
}
