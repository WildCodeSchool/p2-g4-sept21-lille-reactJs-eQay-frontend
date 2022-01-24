import styled from 'styled-components';

const SAboutUs = styled.article`
  @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  .headAboutUs {
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
    color: white;
    height: 20vh;
    text-align: center;
    font-size: 5vh;
    padding-top: 2%;
    width: 100%;
    z-index: 1;
  }
  .imgMap {
    height: 40%;
    width: 40%;
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
    font-style: justify;
  }
  .contentWhyEqai,
  .contentPresAsso,
  .contentBenevole {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    font-style: justify;
  }
  h2 {
    text-align: center;
    padding: 20px;
    padding-top: 0;
    font-size: 18px;
    font-weight: bold;
  }
  p {
    margin: 10px;
    font-style: justify;
  }
  .imgData {
    height: 25%;
    width: 25%;
    padding: 20px;
  }
  .presAsso {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row-reverse;
    font-style: justify;
    width: 100%;
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
  }
  .img {
    display: flex;
    justify-content: space-evenly;
  }
  .presFounder {
    width: 100%;
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
    clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0 100%);
    padding-top: 20px;
  }
  .titleFounder {
    padding: 10px;
  }

  @media only screen and (max-width: 768px) {
    .headAboutUs {
      font-size: 30px;
      text-align: center;
      width: 100%;
      padding-top: 38px;
      padding-left: 15px;
    }

    .presAsso {
      clip-path: polygon(0 20%, 100% 5%, 100% 95%, 0 100%);
    }
    .imgData {
      height: 40%;
      width: 70%;
      padding-top: 120px;
      margin: auto;
    }
    .imgMap,
    .imgBenevole {
      height: 70%;
      width: 70%;
      padding-top: 100px;
      margin: auto;
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
      text-align: justify;
      margin-bottom: 40px;
    }
    .img {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
    }

    .presFounder {
      margin-top: 70px;
    }
  }
`;

export default SAboutUs;
