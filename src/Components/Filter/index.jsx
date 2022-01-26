import { useContext } from 'react';
import SSelect from './Sselect';
import EqaiContext from '../../Context/EqaiContext';

export default function Filter() {
  const { setFilterValue } = useContext(EqaiContext);

  return (
    <>
      <SSelect
        className="select"
        onChange={(e) => {
          setFilterValue(e.target.value);
        }}
      >
        <h3>test</h3>
        <option selected disabled>
          Choisir une mesure
        </option>
        <option value="aqi">Aqi </option>
        <option value="pm1">Pm1</option>
        <option value="pm25">Pm25</option>
        <option value="pm10">Pm10</option>
        <option value="ppm">Ppm</option>
        <option value="no2">NO2</option>
        <option value="o3">O3</option>
        <option value="nox">Nox</option>
        <option value="no">NO</option>
      </SSelect>
    </>
  );
}
