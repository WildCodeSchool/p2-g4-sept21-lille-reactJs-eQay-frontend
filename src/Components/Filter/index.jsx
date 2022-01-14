import { useContext } from 'react';
import SRadio from './style';
import EqaiContext from '../../Context/EqaiContext';

export default function Filter() {
  const { filterValue, setFilterValue } = useContext(EqaiContext);

  return (
    <SRadio
      onChange={(e) => {
        setFilterValue(e.target.value);
      }}
    >
      <label htmlFor="aqi" className="radLabel">
        <input
          type="radio"
          className="radInput"
          id="aqi"
          name="aqi"
          value="aqi"
        />
        <div className="radDesign" />
        <div className="radText">Aqi</div>
      </label>
      <label htmlFor="pm1" className="radLabel">
        <input
          type="radio"
          className="radInput"
          id="pm1"
          name="aqi"
          value="pm1"
        />
        <div className="radDesign" />
        <div className="radText">Pm1</div>
      </label>
      <label htmlFor="pm25" className="radLabel">
        <input
          type="radio"
          className="radInput"
          id="pm25"
          name="aqi"
          value="pm25"
        />
        <div className="radDesign" />
        <div className="radText">Pm25</div>
        <div />
      </label>
      {/* <label htmlFor="rad" className="radLabel">
        <input type="radio" className="radInput" name="rad" value="pm10" />
        <div className="radDesign" />
        <div className="radText">Pm10</div>
      </label>
      <label htmlFor="rad" className="radLabel">
        <input type="radio" className="radInput" name="rad" value="ppm" />
        <div className="radDesign" />
        <div className="radText">Ppm</div>
      </label> */}
      <div>{filterValue}</div>
    </SRadio>
  );
}
