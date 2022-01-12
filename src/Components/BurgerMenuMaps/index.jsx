import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import facebook from 'assets/facebook.png';
import linkedIn from 'assets/linkedin.png';
import insta from 'assets/insta.png';
import twitter from 'assets/twitter.png';
import './style.css';

export default function BurgerMenuMaps() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Menu>
        <Link id="home" className="menuItem" to="/">
          Carte
        </Link>
        <Link id="news" className="menuItem" to="/news">
          Infos
        </Link>
        <Link id="events" className="menuItem" to="/events">
          Evénements
        </Link>
        <Link id="goodpractices" className="menuItem" to="/goodpractices">
          Bonnes pratiques
        </Link>
        <Link id="about" className="menuItem" to="/aboutus">
          Qui sommes-nous?
        </Link>
        <a
          id="supportus"
          className="menuItem"
          href="https://www.helloasso.com/associations/eqai"
          target="_blank"
          rel="noreferrer"
        >
          Nous soutenir
        </a>
        <Link id="contactus" className="menuItem" to="/contactus">
          Contactez-nous
        </Link>
        <div className="footerBurger">
          <h2 className="followUs">Suivez-nous</h2>
          <section className="allLogo">
            <img className="imgLogo" src={facebook} alt="facebook" />
            <img className="imgLogo" src={twitter} alt="twitter" />
            <img className="imgLogo" src={linkedIn} alt="linkedin" />
            <img className="imgLogo" src={insta} alt="instagram" />
          </section>
          <h3 className="legalMention">Mentions légales</h3>
          <h3 className="copyright">
            Copyright <span className="copyrightYear"> {currentYear} </span>
          </h3>
        </div>
      </Menu>
    </>
  );
}
