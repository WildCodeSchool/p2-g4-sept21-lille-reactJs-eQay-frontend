import styled from 'styled-components';

const AboutPage = styled.div`
  .container {
    width: 90%;
    margin: 0 auto;
    font-size: 1.3rem;
  }
  h1 {
    font-size: 3.5rem;
    margin: 2.5rem 0;
    font-weight: 700;
    text-align: center;
  }
  h2 {
    font-size: 2.5rem;
    margin: 4rem 0;
    font-weight: 400;
  }
  h3 {
    font-size: 2rem;
    margin: 3rem 0;
    font-weight: 200;
  }
  ul li {
    list-style-type: circle;
    margin-bottom: 1.5rem;
  }
  span {
    font-size: 2rem;
    font-weight: 400;
  }
  img {
    box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.19),
      0 15px 15px rgba(0, 0, 0, 0.23);
  }
  .italic {
    font-style: italic;
  }
  .illustrationPicture {
    width: 100%;
  }
  .totalWidth {
    margin: 2rem 0;
    width: 100%;
  }
  .flexColumn {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .flexCenter {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .middle {
    text-align: center;
  }
  .borderHalf {
    border-radius: 50%;
  }
  .border {
    border-radius: 10rem;
  }
  .marginBottom {
    margin-bottom: 3rem;
  }
  .smallMarginBottom {
    margin-bottom: 1rem;
  }
  .resizePhoto {
    height: 400px;
    width: auto;
  }
  .resizeSmallPhoto {
    height: 100px;
    width: auto;
  }

  @media only screen and (max-width: 1250px) {
    .resizePhoto {
      height: 200px;
      width: auto;
    }
    @media only screen and (max-width: 700px) {
      .resizePhoto {
        height: 150px;
        width: auto;
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
      }
`;

export default AboutPage;
