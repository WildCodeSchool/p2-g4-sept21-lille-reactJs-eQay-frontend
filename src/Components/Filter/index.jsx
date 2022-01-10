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
        <input type="radio" value="Aqi" name="gender" /> Aqi
        <input type="radio" value="Pm1" name="gender" /> Pm1
        <input type="radio" value="Pm10" name="gender" /> Pm10
        <input type="radio" value="Pm25" name="gender" /> Pm25
        <input type="radio" value="Ppm" name="gender" /> Ppm
        <div>{filterValue}</div>
      </div>
    </SRadio>
  );
}
