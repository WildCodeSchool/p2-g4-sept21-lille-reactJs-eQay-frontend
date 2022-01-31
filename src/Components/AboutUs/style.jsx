import styled from 'styled-components';

const SAboutUs = styled.article`
  .headAboutUs {
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
  .imgMap {
    height: 50vh;
    padding: 20px;
    border-radius: 35px;
  }
  .whyEqai {
    display: flex;
    padding-top: 20vh;
    justify-content: space-evenly;
  }
  .contentFounder {
    width: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
  }
  .contentWhyEqai,
  .contentPresAsso,
  .contentBenevole {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    width: 36%;
  }
  h2 {
    text-align: center;
    padding: 20px;
    padding-top: 0;
    font-size: 2rem;
    font-weight: bold;
    font-family: var(--font-family-first);
    color: var(--color-paragraph-title);
  }
  p {
    margin: 10px;
    text-align: justify;
    color: var(--color-paragraph-content);
    font-family: var(--font-family-second);
    font-size: 18px;
  }
  .imgData {
    height: 25%;
    width: 25%;
    padding: 20px;
    border-radius: 15px;
    background-color: white;
  }
  .presAsso {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row-reverse;
    width: 100%;
    padding: 25px 0;
    background-image: var(--color-polygone);
    clip-path: polygon(0 10%, 100% 0, 100% 95%, 0 100%);
  }
  .imgBenevole {
    height: 25%;
    width: 25%;
    padding: 10px;
  }
  .benevole {
    display: flex;
    justify-content: space-evenly;
  }
  .imgFounder {
    border-radius: 110px;
    height: 200px;
    width: 200px;
    padding: 10px;
    margin-bottom: 10px;
  }
  .img {
    display: flex;
    justify-content: space-evenly;
  }
  .presFounder {
    width: 100%;
    background-image: var(--color-polygone);
    clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0 100%);
    padding-top: 20px;
  }

  @media only screen and (max-width: 768px) {
    .headAboutUs {
      text-align: center;
      width: 100%;
      font-size: 5vh;
      padding-top: 38px;
      padding-left: 30px;
      clip-path: polygon(0 0, 100% 0, 100% 9vh, 0 15vh);
    }
    .whyEqai {
      height: 20vh;
      margin-bottom: 20vh;
    }
    .presAsso {
      clip-path: polygon(0 20%, 100% 5%, 100% 95%, 0 100%);
      padding-top: 50%;
    }
    .imgData {
      height: 40%;
      width: 70%;
      margin: auto;
    }
    .imgMap {
      height: 60%;
      margin-top: 50%;
    }
    .imgBenevole {
      height: 70%;
      width: 70%;
      padding-top: 120px;
      margin: auto;
    }
    .titlePresAsso {
      padding-top: 20px;
    }
    .whyEqai,
    .presAsso,
    .benevole {
      display: flex;
      flex-direction: column;
      height: 60vh;
    }
    .contentWhyEqai,
    .contentPresAsso,
    .contentBenevole,
    .contentFounder {
      width: 75%;
      margin: auto;
      margin-bottom: 40px;
    }
    .benevole {
      padding-top: 10%;
    }
    .img {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
    p {
      text-align: center;
    }
    .presFounder {
      margin-top: 30%;
    }
  }
`;

export default SAboutUs;
