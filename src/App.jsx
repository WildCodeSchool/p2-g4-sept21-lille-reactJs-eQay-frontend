import AboutUs from 'Components/AboutUs';
import HomePage from 'Components/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/essai" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
