import { stack as Menu } from 'react-burger-menu';
// import { SNavContainer, SNavItem, SNavItems, SNavButton } from './style';

export default function BurgerMenu() {
  return (
    <Menu pushRotate>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
    // <SNavContainer>
    //   <SNavButton>
    //     <span />
    //   </SNavButton>
    //   <SNavItems>
    //     <SNavItem>Carte</SNavItem>
    //     <SNavItem>Evenments</SNavItem>
    //     <SNavItem>Bonne Pratiques</SNavItem>
    //     <SNavItem>Qui sommes-nous ?</SNavItem>
    //   </SNavItems>
    // </SNavContainer>
  );
}
