import { MapContainer, TileLayer } from 'react-leaflet';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Filter from 'Components/Filter';
import MarkerOutdoor from 'Components/MarkerOutdoor';
import MarkerIndoor from '../MarkerIndoor';
import EqaiContext from '../../Context/EqaiContext';
import SMap from './style';
import LocateUsers from '../LocateUser';
import ExtSensor from '../ExtSensor';

export default function Map() {
  const { findUser, setFindUser, showExtSensor } = useContext(EqaiContext);
  const { filterValue } = useContext(EqaiContext);
  function handleLocate() {
    return setFindUser(!findUser);
  }
  return (
    <>
      <SMap>
        <div id="map">
          <nav>
            <button
              className="bn632-hover bn18"
              type="button"
              id="locateButton"
              onClick={handleLocate}
            >
              <span className="material-icons md-50">location_searching</span>
            </button>
            <Filter />
          </nav>
          <div className="leaflet-bottom leaflet-left">
            <div className="info legend leaflet-control">
              <div className="legend-atmo">
                <div className="legend-title">
                  <p>{filterValue.toUpperCase()}</p>
                  <Link id="about" className="imgMoreInfo" to="/moreinfo">
                    <img
                      src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/30/000000/external-question-frequently-asked-questions-faq-bearicons-detailed-outline-bearicons.png"
                      alt="questions"
                    />
                  </Link>
                </div>
                <i style={{ background: '#3eb80e' }} />
                <img
                  src="https://img.icons8.com/ios/30/3eb80e/happy--v1.png"
                  alt="smile"
                />
                <br />
                <i style={{ background: '#e1a536' }} />
                <img
                  src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/29/e1a536/external-neutral-face-emoji-with-flat-mouth-expression-smiley-regular-tal-revivo.png"
                  alt="neutral"
                />
                <br />
                <i style={{ background: '#e72747' }} />
                <img
                  src="https://img.icons8.com/glyph-neue/33/e72747/sad.png"
                  alt="sad"
                />
                <br />
                <i style={{ background: '#727272' }} />
                <img
                  src="https://img.icons8.com/ios/30/727272/boring--v1.png"
                  alt="frowning"
                />
              </div>
            </div>
          </div>
          <MapContainer
            center={[46.227, 2.213]}
            zoom={6}
            scrollWheelZoom
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerIndoor />
            <MarkerOutdoor />
            <LocateUsers />
            {showExtSensor && <ExtSensor />}
          </MapContainer>
        </div>
      </SMap>
    </>
  );
}
