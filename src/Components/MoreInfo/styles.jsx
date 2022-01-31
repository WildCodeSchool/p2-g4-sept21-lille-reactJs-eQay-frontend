import styled from 'styled-components';

const SMoreInfo = styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  img {
    width: 80vw;
  }
  li {
    display: flex;
    justify-content: center;
  }
  h2 {
    text-align: center;
    padding: 3vh;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: var(--font-family-first);
    color: var(--color-paragraph-title);
  }
  .mesure {
    padding-top: 20vh;
  }
  .confort {
    clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0 100%);
    background-image: var(--color-polygone);
  }
  .imgConfort {
    border-radius: 20px;
    margin-bottom: 20px;
    max-height: 579px;
    max-width: 819px;
  }
  .moreInfo {
    position: fixed;
    clip-path: polygon(0 0, 100vw 0, 100vw 9vh, 0 20vh);
    background-image: var(--color-polygone);
    font-family: var(--font-family-first);
    color: var(--color-head-title);
    height: 20vh;
    text-align: center;
    font-size: 8vh;
    width: 100%;
    padding-top: 38px;
    padding-left: 15px;
    width: 100%;
    z-index: 1;
    text-shadow: var(--text-shadow);
  }

  @media only screen and (max-width: 768px) {
    .moreInfo {
      clip-path: polygon(0 0, 100% 0, 100% 9vh, 0 15vh);
      img {
        width: 100vw;
      }
      font-size: 6vh;
    }
    .mesure {
      padding-top: 15vh;
    }
  }
  @media only screen and (min-width: 1024px) {
    img {
      max-width: 1024px;
    }
  }
`;

export default SMoreInfo;
