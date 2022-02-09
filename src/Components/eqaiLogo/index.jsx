import eqai from 'assets/eqai.png';
import { Link } from 'react-router-dom';
import './style.css';

export default function EqaiLogo() {
  return (
    <>
      <Link className="logoContainer" to="/">
        <img src={eqai} alt="eqaiLogo" className="logo" />
      </Link>
    </>
  );
}
