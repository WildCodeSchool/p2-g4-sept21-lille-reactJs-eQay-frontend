import { useContext } from 'react';
import SRadio from './style';
import EqaiContext from '../../Context/EqaiContext';

export default function Filter() {
  const { setFilterValue } = useContext(EqaiContext);

  return (
    <SRadio
      onChange={(e) => {
        setFilterValue(e.target.value);
      }}
    >
      <label htmlFor="rad" className="rad-label">
        <input type="radio" className="rad-input" name="rad" value="aqi" />
        <div className="rad-design" />
        <div className="rad-text">Aqi</div>
      </label>
      <label htmlFor="rad" className="rad-label">
        <input type="radio" className="rad-input" name="rad" value="pm1" />
        <div className="rad-design" />
        <div className="rad-text">Pm1</div>
      </label>
      <label htmlFor="rad" className="rad-label">
        <input type="radio" className="rad-input" name="rad" value="pm25" />
        <div className="rad-design" />
        <div className="rad-text">Pm25</div>
      </label>
      <label htmlFor="rad" className="rad-label">
        <input type="radio" className="rad-input" name="rad" value="pm10" />
        <div className="rad-design" />
        <div className="rad-text">Pm10</div>
      </label>
      <label htmlFor="rad" className="rad-label">
        <input type="radio" className="rad-input" name="rad" value="ppm" />
        <div className="rad-design" />
        <div className="rad-text">Ppm</div>
      </label>
    </SRadio>
  );
}
