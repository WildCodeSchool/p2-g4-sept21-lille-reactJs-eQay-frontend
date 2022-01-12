import { useState } from 'react';
import GlobalStyles from 'style';
import EqaiContext from 'Context/EqaiContext';
import Map from 'Components/Map';

export default function HomePage() {
  const [findUser, setFindUser] = useState(false);
  const [showExtSensor, setShowExtSensor] = useState(false);
  const [filterValue, setFilterValue] = useState('aqi');

  return (
    <EqaiContext.Provider
      value={{
        findUser,
        setFindUser,
        showExtSensor,
        setShowExtSensor,
        filterValue,
        setFilterValue,
      }}
    >
      <GlobalStyles />
      <Map />
    </EqaiContext.Provider>
  );
}
