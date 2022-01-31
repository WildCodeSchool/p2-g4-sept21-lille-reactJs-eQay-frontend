import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import facebook from 'assets/facebook.png';
import linkedIn from 'assets/linkedin.png';
import insta from 'assets/insta.png';
import twitter from 'assets/twitter.png';
import './style.css';
import Mailto from 'Components/Mailto';

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
        <Link id="about" className="menuItem" to="/aboutus">
          Qui sommes-nous?
        </Link>
        <Link id="about" className="menuItem" to="/moreinfo">
          En savoir plus
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
        <div className="mailto">
          <Mailto email="contact@eqai.org" />
        </div>
        <section className="footer">
          <h2 className="followUs">Suivez-nous</h2>
          <section className="allLogo">
            <a
              className="allLogo"
              href="https://www.facebook.com/eqai.asso"
              target="_blank"
              rel="noreferrer"
            >
              <img className="imgLogo" src={facebook} alt="facebook" />
            </a>
            <a
              className="allLogo"
              href="https://twitter.com/eQAIassociation"
              target="_blank"
              rel="noreferrer"
            >
              <img className="imgLogo" src={twitter} alt="twitter" />
            </a>
            <a
              className="allLogo"
              href="http://www.linkedin.com/company/eqai"
              target="_blank"
              rel="noreferrer"
            >
              <img className="imgLogo" src={linkedIn} alt="linkedin" />
            </a>
            <a
              className="allLogo"
              href="https://www.instagram.com/eqai.association/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="imgLogo" src={insta} alt="instagram" />
            </a>
          </section>
          <h3 className="legalMention">Mentions légales</h3>
          <h3 className="copyright">
            Copyright <span className="copyrightYear"> {currentYear} </span>
          </h3>
        </section>
      </Menu>
    </>
  );
}
