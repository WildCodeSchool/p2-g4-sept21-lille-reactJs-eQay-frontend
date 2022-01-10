import HomePage from 'Components/HomePage';
import News from 'Components/News';
import Event from 'Components/Event';
import GoodPractices from 'Components/GoodPractices';
import AboutUs from 'Components/AboutUs';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/news" element={<News />} />
      <Route path="/events" element={<Event />} />
      <Route path="/goodpractices" element={<GoodPractices />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
