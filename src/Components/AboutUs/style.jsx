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
  .illustration-picture {
    width: 100%;
  }
  .total-width {
    margin: 2rem 0;
    width: 100%;
  }
  .one-third {
    width: 33.33%;
  }
  .two-third {
    width: 66.67%;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .middle {
    text-align: center;
  }
  .border-half {
    border-radius: 50%;
  }
  .border {
    border-radius: 10rem;
  }
  .margin-bottom {
    margin-bottom: 3rem;
  }
  .resize-photo {
    height: 400px;
    width: auto;
  }
`;

export default AboutPage;
