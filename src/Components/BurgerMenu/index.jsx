import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './style.css';

export default function BurgerMenu() {
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
      </Menu>
    </>
  );
}
