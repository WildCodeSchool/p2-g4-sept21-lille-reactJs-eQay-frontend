import styled from 'styled-components';

const SEvent = styled.article`
  .headEvent {
    font-family: var(--font-family-first);
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
    color: var(--color-head-title);
    font-weight: 400;
    height: 20vh;
    text-align: center;
    font-size: 8vh;
    padding-top: 2%;
    width: 100%;
    text-shadow: 4px 3px 0 #7a7a7aa8;
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
  }
  .post {
    clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
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
  }
  .contentPost {
    display: flex;
    width: 70%;
    font-size: 20px;
    padding-top: 5%;
    padding-bottom: 3%;
    margin: auto;
    justify-content: space-evenly;
  }
  p {
    color: var(--color-paragraph-content);
    font-family: var(--font-family-second);
  }

  @media only screen and (max-width: 768px) {
    .headEvent {
      clip-path: polygon(0 0, 100% 0, 100% 9vh, 0 15vh);
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
  }
`;

export default SEvent;
