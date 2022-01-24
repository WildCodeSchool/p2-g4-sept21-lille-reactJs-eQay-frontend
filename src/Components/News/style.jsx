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
    padding: 4vh;
    text-align: center;
    font-size: 25px;
  }

  .title {
    display: flex;
    padding-top: 150px;
    align-items: center;
  }
  .imgDidYouKnow {
    height: 25vh;
  }
  .imgContent {
    position: relative;
    width: 100%;
    height: 70%;
    text-align: center;
  }
  .contentNews {
    position: absolute;
    width: 55%;
    font-size: 22px;
    text-align: center;
    margin: 10vh;
    font-weight: bold;
  }
  .imgIndoorPollution {
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
  }
  .imgPublicHealth {
    width: 15%;
    height: 20%;
  }

  .headRegulation {
    display: flex;
    margin: 50px;
    justify-content: center;
  

  .titleRegulation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    }

  .organigramme {
    border: 1px solid red;
    width: 90vw;
     }
`;

export default SNews;
