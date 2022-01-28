import axios from 'axios';
import { useState, useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';

export default function ExtSensor() {
  const [position, setPosition] = useState(null);
  const [closerSensor, setCloserSensor] = useState(null);

  const map = useMap();

  useEffect(async () => {
    setPosition(map.getCenter());
  }, []);

  useEffect(async () => {
    if (closerSensor) {
      map.flyTo(closerSensor.coords);
    }
  }, [closerSensor]);

  useEffect(async () => {
    if (position) {
      axios
        .get(`http://localhost:5050/outdoor/${position.lat}&${position.lng}`)
        .then(({ data }) => {
          setCloserSensor(data);
        });
    }
  }, [position]);

  return (
    closerSensor && (
      <Marker position={closerSensor.coords}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    )
  );
}
