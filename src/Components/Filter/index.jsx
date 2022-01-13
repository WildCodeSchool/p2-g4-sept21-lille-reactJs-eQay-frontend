/* eslint-disable jsx-a11y/label-has-associated-control */
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
      <label className="radLabel">
        <input type="radio" className="radInput" name="rad" value="aqi" />
        <div className="radDesign" />
        <div className="radText">Aqi</div>
      </label>
      <label className="radLabel">
        <input type="radio" className="radInput" name="rad" value="pm1" />
        <div className="radDesign" />
        <div className="radText">Pm1</div>
      </label>
      <label className="radLabel">
        <input type="radio" className="radInput" name="rad" value="pm25" />
        <div className="radDesign" />
        <div className="radText">Pm25</div>
      </label>
      <label className="radLabel">
        <input type="radio" className="radInput" name="rad" value="pm10" />
        <div className="radDesign" />
        <div className="radText">Pm10</div>
      </label>
      <label className="radLabel">
        <input type="radio" className="radInput" name="rad" value="ppm" />
        <div className="radDesign" />
        <div className="radText">Ppm</div>
      </label>
    </SRadio>
  );
}
