import { MapContainer, TileLayer } from 'react-leaflet';
import { useContext } from 'react';
import ExtSensor from '../ExtSensor';
import EqaiContext from '../../Context/EqaiContext';
import SMap from './style';
import LocateUsers from '../LocateUser';

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
          </nav>

          <MapContainer
            center={[50.629, 3.057]}
            zoom={13}
            scrollWheelZoom
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <LocateUsers />
            {showExtSensor ? <ExtSensor /> : null}
          </MapContainer>
        </div>
      </SMap>
    </>
  );
}
