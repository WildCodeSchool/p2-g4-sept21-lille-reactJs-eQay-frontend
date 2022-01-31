import styled from 'styled-components';

const SEvent = styled.article`
  .headEvent {
    font-family: var(--font-family-first);
    position: fixed;
    clip-path: polygon(0 0, 100vw 0, 100vw 9vh, 0 20vh);
    background-image: var(--color-polygone);
    color: var(--color-head-title);
    font-weight: 400;
    height: 20vh;
    text-align: center;
    font-size: 8vh;
    padding-top: 2%;
    width: 100%;
    text-shadow: var(--text-shadow);
  }
  .imgActu {
    display: flex;
    height: 30vh;
    padding-top: 17vh;
    margin: auto;
  }
  .imgFrontBack {
    width: 50vh;
    border-radius: 10%;
  }
  p {
    width: 50%;
    text-align: justify;
    padding-right: 5vw;
    margin: auto;
    font-family: var(--font-family-second);
    color: var(--color-paragraph-content);
  }
  .post {
    clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
    background-image: var(--color-polygone);
    padding-top: 56px;
  }
  .contentPost {
    display: flex;
    width: 70%;
    font-size: 20px;
    padding-top: 3%;
    padding-bottom: 3%;
    margin: auto;
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 768px) {
    .headEvent {
      clip-path: polygon(0 0, 100% 0, 100% 9vh, 0 15vh);
      width: 100%;
      padding-top: 38px;
      padding-left: 25px;
    }
    .imgActu {
      padding-top: 15vh;
      padding-bottom: 3vh;
    }
    .post {
      clip-path: polygon(0 1%, 100% 0, 100% 100%, 0 100%);
      padding: 5%;
    }
    .contentPost {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
    p {
      width: 80%;
      text-align: center;
      padding-bottom: 5%;
    }

    .imgFrontBack {
      width: 90vw;
    }
  }
`;

export default SEvent;
