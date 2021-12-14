import styled from 'styled-components';

const SNavItem = styled.li`
  padding: 0.3rem;
  color: inherit;
  display: flex;
  flex-direction: column;
`;

const SNavItems = styled.ul``;

const SNavContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: fixed;
  width: 20%;
  height: 100vh;

  background-color: black;
  color: white;
`;

const SNavButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
`;

export { SNavContainer, SNavItem, SNavItems, SNavButton };
