import eqai from 'assets/eqai.png';
import { Link } from 'react-router-dom';
import './style.css';

export default function EqaiLogo() {
  return (
    <>
      <div className="logoContainer">
        <Link id="home" className="menuItem" to="/">
          <img src={eqai} alt="eqaiLogo" className="logo" />
        </Link>
      </div>
    </>
  );
}
