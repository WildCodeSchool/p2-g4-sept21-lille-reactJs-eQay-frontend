import styled from 'styled-components';

const SNews = styled.article`
  .headNews {
    position: fixed;
    clip-path: polygon(0 0, 100% 0, 100% 9vh, 0 20vh);
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
    font-family: var(--font-family-first);
    color: var(--color-head-title);
    text-shadow: 4px 3px 0 #7a7a7aa8;
  }
  h3 {
    padding: 4vh;
    text-align: center;
    font-size: 25px;
    font-family: var(--font-family-first);
    color: var(--color-paragraph-title);
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
    padding-left: 20vw;
    width: 100vw;
    height: 70%;
  }
  .contentNews {
    position: absolute;
    width: 30%;
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
    margin: 30px;
  }
  .imgIndoorPollution {
    display: flex;
    margin: auto;
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
    font-family: var(--font-family-first);
    color: var(--color-paragraph-title);
  }
  p {
    color: var(--color-paragraph-content);
    font-family: var(--font-family-second);
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
    color: var(--color-paragraph-content);
    font-family: var(--font-family-second);
  }
  li {
    padding: 5px;
    color: var(--color-paragraph-content);
    font-family: var(--font-family-second);
  }
  .toKnow {
    background: #9e9e9e6e;
    margin-top: 15px;
  }
  .link {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  .moreInformation {
    display: flex;
    flex-direction: column;
    width: 70vw;
  }
  .moreInformationLogo {
    margin: auto;
    width: 20vw;
  }
  a {
    padding-bottom: 15px;
    width: 15vw;
  }
  a:hover {
    background: none;
  }
  .footNews {
    text-align: center;
    font-weight: bold;
  }
  .linkLogo {
    display: flex;
    width: 15vw;
  }
  @media only screen and (max-width: 768px) {
    .headNews {
      clip-path: polygon(0 0, 100% 0, 100% 9vh, 0 15vh);
      font-size: 30px;
      text-align: center;
      width: 100%;
      padding-top: 38px;
      padding-left: 15px;
    }
    .title {
      padding-top: 15vh;
    }
    h3 {
      font-size: 20px;
      padding: 10px;
    }
    .imgDidYouKnow {
      height: 10vh;
      padding: 10px;
    }
    .imgContent {
      width: 100vw;
      padding-left: 10px;
    }
    .contentNews {
      font-size: 1.15rem;
      font-size: 1.2rem;
      width: 90vw;
      margin: 95px 30px 0 0;
      background-color: #d4d4d478;
    }
    .imgIndoorPollution {
      width: 95%;
    }
    .headRegulation {
      margin: 10px;
    }
    .organigramme {
      width: 100vw;
    }
    .regulation {
      width: 90vw;
    }
    .link {
      justify-content: space-between;
      margin: auto;
      padding-right: 50px;
      width: 90%;
    }
    .moreInformation {
      margin: auto;
    }
    .moreInformationLogo {
      width: 40vw;
    }
    .linkLogo {
      width: 30vw;
    }
  }
`;

export default SNews;
