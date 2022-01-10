import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './style.css';

export default function BurgerMenu() {
  return (
    <>
      <Menu>
        <Link id="home" className="menu-item" to="/">
          Carte
        </Link>
        <Link id="news" className="menu-item" to="/news">
          Infos
        </Link>
        <Link id="events" className="menu-item" to="/events">
          Evénements
        </Link>
        <Link id="goodpractices" className="menu-item" to="/goodpractices">
          Bonnes pratiques
        </Link>
        <Link id="about" className="menu-item" to="/aboutus">
          Qui sommes-nous?
        </Link>
      </Menu>
    </>
  );
}
