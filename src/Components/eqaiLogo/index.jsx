import eqai from 'assets/eqai.png';
import './style.css';

export default function EqaiLogo() {
  return (
    <>
      <div className="logoContainer">
        <img src={eqai} alt="eqaiLogo" className="logo" />
      </div>
    </>
  );
}
