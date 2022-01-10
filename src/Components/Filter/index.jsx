import { useContext } from 'react';
import SRadio from './style';
import EqaiContext from '../../Context/EqaiContext';

export default function Filter() {
  const { filterValue, setFilterValue } = useContext(EqaiContext);

  return (
    <SRadio>
      <div
        onChange={(e) => {
          setFilterValue(e.target.value);
        }}
      >
        <input type="radio" value="aqi" name="gender" /> Aqi
        <input type="radio" value="pm1" name="gender" /> Pm1
        <input type="radio" value="pm10" name="gender" /> Pm10
        <input type="radio" value="pm25" name="gender" /> Pm25
        <input type="radio" value="ppm" name="gender" /> Ppm
        <div>{filterValue}</div>
      </div>
    </SRadio>
  );
}
