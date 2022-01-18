import styled from 'styled-components';

const SAboutUs = styled.article`
  @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  .headAboutUs {
    position: fixed;
    clip-path: polygon(0 0, 100% 0, 100% 9vh, 0 20vh);
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
  }

  .contentWhyEqai,
  .contentPresAsso,
  .contentBenevole,
  .contentFounder {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    text-align: center;
    padding: 40px;
    padding-top: 0;
    font-size: 18px;
    font-weight: bold;
  }

  p {
    margin: 10px;
    font-style: justify;
  }

  .imgData {
    height: 30%;
    width: 30%;
    padding: 20px;
  }

  .presAsso {
    display: flex;
    flex-direction: row-reverse;
    padding: 20px;
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
    clip-path: polygon(0 26%, 100% 0, 100% 89%, 0 100%);
  }

  .imgBenevole {
    height: 30%;
    width: 30%;
    padding: 20px;
  }
  .benevole {
    display: flex;
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
    padding: 30px;
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
    clip-path: polygon(0 10%, 100% 0%, 100% 100%, 0 100%);
  }

  @media only screen and (max-width: 1250px) {
    .resizePhoto {
      height: 200px;
      width: auto;
    }
    .illustrationText {
      font-size: 1.5rem;
    }
    .marginBottomBig {
      margin-bottom: 2rem;
    }
    .flex {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
  @media only screen and (max-width: 700px) {
    .resizePhoto {
      height: 150px;
      width: auto;
    }
    h1 {
      font-size: 2.5rem;
      font-weight: 500;
    }
    .illustrationText {
      font-size: 0.8rem;
    }
    .marginBottomBig {
      margin-bottom: 1rem;
    }
  }
  @media only screen and (max-width: 400px) {
    .resizePhoto {
      height: 100px;
      width: auto;
    }
    .resizeSmallPhoto {
      height: 50px;
      width: auto;
    }
    .container {
      font-size: 1rem;
    }
    .illustrationText {
      font-size: 0.5rem;
    }
    .marginBottomBig {
      margin-bottom: 0.5rem;
    }
  }
`;

export default SAboutUs;
