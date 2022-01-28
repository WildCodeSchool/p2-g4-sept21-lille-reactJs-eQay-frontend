import axios from 'axios';
import dotenv from 'dotenv';
import { useState, useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';

export default function ExtSensor() {
  const [position, setPosition] = useState(null);
  const [closerSensor, setCloserSensor] = useState(null);

  dotenv.config();

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
        .get(
          `${process.env.REACT_APP_API_URL}/outdoor/${position.lat}&${position.lng}`
        )
        .then(function ({ data }) {
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
