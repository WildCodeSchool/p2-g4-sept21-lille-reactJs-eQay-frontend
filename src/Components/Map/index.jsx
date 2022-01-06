
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import MarkerIndoor from '../MarkerIndoor';
import { useState, useContext } from 'react';
import EqaiContext from '../../Context/EqaiContext';
import SMap from './style';
import LocateUsers from '../LocateUser';

export default function Map() {
  const { findUser, setFindUser } = useContext(EqaiContext);

  function handleLocate() {
    return setFindUser(!findUser);
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
              <span>Locate me</span>
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
            <MarkerIndoor />
             <LocationMarker />
            <LocateUsers />
          </MapContainer>
        </div>
      </SMap>
    </>

  );
}
