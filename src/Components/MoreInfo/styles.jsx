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
    font-size: 40px;
    padding: 1vh;
  }
  .mesure {
    padding-top: 20vh;
  }
  .title {
    margin-top: 5vh;
  }
  .moreInfo {
    position: fixed;
    clip-path: polygon(0 0, 100vw 0, 100vw 9vh, 0 20vh);
    background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111),
      rgba(40, 180, 133)
    );
    background-image: linear-gradient(
      to right bottom,
      rgba($color-primary-light),
      rgba($color-primary-dark)
    );
    color: white;
    height: 20vh;
    text-align: center;
    font-size: 5vh;
    padding-top: 2%;
    width: 100%;
    z-index: 1;
  }
  .deco {
    display: flex;
    color: white;
    height: 10vh;
    justify-content: space-evenly;
    align-items: center;
    font-style: justify;
    background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111),
      rgba(40, 180, 133)
    );
    background-image: linear-gradient(
      to right bottom,
      rgba($color-primary-light),
      rgba($color-primary-dark)
    );
    clip-path: polygon(0 10%, 100% 0, 100% 95%, 0 100%);
  }
  @media only screen and (max-width: 768px) {
    img {
      width: 100vw;
    }
  }
  @media only screen and (min-width: 1024px) {
    img {
      max-width: 1024px;
    }
  }
`;

export default SMoreInfo;
