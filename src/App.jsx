import { useState } from 'react';
import GlobalStyles from 'style';
import BurgerMenu from './Components/BurgerMenu';
import EqaiContext from './Context/EqaiContext';
import Map from './Components/Map';

function App() {
  const [findUser, setFindUser] = useState(false);
  const [showExtSensor, setShowExtSensor] = useState(false);

  return (
    <EqaiContext.Provider
      value={{ findUser, setFindUser, showExtSensor, setShowExtSensor }}
    >
      <GlobalStyles />
      <BurgerMenu />
      <Map />
      <h1> Hello !</h1>
    </EqaiContext.Provider>
  );
}

export default App;
