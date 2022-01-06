import { Marker, Popup, useMap } from 'react-leaflet';
import { useContext, useEffect, useState } from 'react';
import EqaiContext from '../../Context/EqaiContext';

export default function LocateUsers() {
  const { findUser, setFindUser } = useContext(EqaiContext);
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    if (findUser) {
      map.locate().on('locationfound', function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
      setFindUser(false);
    }
  }, [findUser]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
