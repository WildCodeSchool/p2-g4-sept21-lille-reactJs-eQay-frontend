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
      <label htmlFor="aqi" className="radLabel">
        <input
          type="radio"
          id="aqi"
          className="radInput"
          name="rad"
          value="aqi"
        />
        <div className="radDesign" />
        <div className="radText">Aqi</div>
      </label>
      <label htmlFor="pm1" className="radLabel">
        <input
          type="radio"
          id="pm1"
          className="radInput"
          name="rad"
          value="pm1"
        />
        <div className="radDesign" />
        <div className="radText">Pm1</div>
      </label>
      <label htmlFor="pm25" className="radLabel">
        <input
          type="radio"
          id="pm25"
          className="radInput"
          name="rad"
          value="pm25"
        />
        <div className="radDesign" />
        <div className="radText">Pm25</div>
      </label>
      <label htmlFor="pm10" className="radLabel">
        <input
          type="radio"
          id="pm10"
          className="radInput"
          name="rad"
          value="pm10"
        />
        <div className="radDesign" />
        <div className="radText">Pm10</div>
      </label>
      <label htmlFor="ppm" className="radLabel">
        <input
          type="radio"
          id="ppm"
          className="radInput"
          name="rad"
          value="ppm"
        />
        <div className="radDesign" />
        <div className="radText">Ppm</div>
      </label>
    </SRadio>
  );
}
