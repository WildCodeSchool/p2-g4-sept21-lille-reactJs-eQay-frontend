import { useState } from 'react';
import BurgerMenu from './Components/BurgerMenu';
import EqaiContext from './Context/EqaiContext';

import Map from './Components/Map';
import 'reset-css';

function App() {
  const [findUser, setFindUser] = useState(false);
  const [showExtSensor, setShowExtSensor] = useState(false);

  return (
    <EqaiContext.Provider
      value={{ findUser, setFindUser, showExtSensor, setShowExtSensor }}
    >
      <BurgerMenu />
      <Map />
    </EqaiContext.Provider>
  );
}

export default App;
