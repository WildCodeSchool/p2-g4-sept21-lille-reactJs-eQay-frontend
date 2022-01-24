import styled from 'styled-components';

const SNews = styled.article`
  .headNews {
    position: fixed;
    clip-path: polygon(0 0, 100vw 0, 100vw 9vh, 0 20vh);
    background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.8),
      rgba(40, 180, 133, 0.8)
    );
    background-image: linear-gradient(
      to right bottom,
      rgba($color-primary-light, 0.8),
      rgba($color-primary-dark, 0.8)
    );
    height: 20vh;
    text-align: center;
    font-size: 5vh;
    padding-top: 3%;
    width: 100%;
    z-index: 1;
    color: white;
  }
  h3 {
    padding-top: 22vh;
    text-align: center;
    font-size: 25px;
  }
  .imgDidYouKnow {
    height: 25vh;
    padding: 50px;
  }
  .imgContent {
    position: relative;
    width: 70%;
    height: 70%;
    margin: auto;
  }
  .contentNews {
    position: absolute;
    width: 55%;
    font-size: 22px;
    text-align: center;
    margin: 5vh;
    font-weight: bold;
  }
  .imgIndoorPollution {
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
  }
`;

export default SNews;
