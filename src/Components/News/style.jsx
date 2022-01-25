import styled from 'styled-components';

const SNews = styled.article`
  .headNews {
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
    padding-top: 23vh;
    justify-content: center;
    align-items: center;
  }
  .imgDidYouKnow {
    height: 25vh;
  }
  .imgContent {
    background-color: red;
    position: relative;
    width: 100vw;
    height: 70%;
    margin: auto;
  }
  .contentNews {
    background: url(${(props) => props.img});
    position: absolute;
    width: 30%;
    font-size: 22px;
    text-align: center;
    font-weight: bold;
    margin: auto;
    margin: red solid 2px;
  }
  .imgIndoorPollution {
    display: flex;
    border: solid 2px blue;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    width: 60%;
  }
  .imgPublicHealth {
    width: 15%;
    height: 20%;
  }
  .headRegulation {
    display: flex;
    margin: 50px;
    justify-content: center;
  }
  .titleRegulation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .organigramme {
    width: 90vw;
  }
  h2 {
    padding: 4vh;
    text-align: center;
    font-size: 25px;
  }
  p {
    font-size: 18px;
    padding: 10px;
  }
  .regulation {
    width: 70vw;
    margin: auto;
  }
  span {
    font-weight: bold;
  }
  ul {
    list-style-type: disc;
    padding: 0 0 0 40px;
  }
  li {
    padding: 5px;
  }
  .toKnow {
    background: #9e9e9e6e;
    margin-top: 15px;
  }
  .link {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .moreInformation {
    display: flex;
    width: 70vw;
  }
  a {
    padding-bottom: 15px;
  }
`;

export default SNews;
