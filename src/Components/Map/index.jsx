import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import SMap from './style';

export default function Map() {
  const [findUser, setFindUser] = useState(false);

  function handleLocate() {
    return setFindUser(!findUser);
  }

  function LocationMarker() {
    const map = useMap();
    const [position, setPosition] = useState(null);

    useEffect(() => {
      if (findUser) {
        map.locate().on('locationfound', function (e) {
          setPosition(e.latlng);
          map.flyTo(e.latlng, map.getZoom());
        });
        setFindUser(false);
      }
    }, [position]);

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }
  return (
    <>
      <button type="button" onClick={handleLocate}>
        Locate
      </button>
      <SMap>
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

          <LocationMarker />
        </MapContainer>
      </SMap>
    </>
  );
}
