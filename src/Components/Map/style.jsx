import styled from 'styled-components';

const SMap = styled.div`
  nav {
    position: absolute;
    margin: 2vh 3vw;
    right: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
  }
  .bn632-hover {
    width: 132px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .bn632-hover:hover {
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .bn632-hover:focus {
    outline: none;
  }
  .bn632-hover.bn18 {
    background-image: linear-gradient(
      to right,
      #25aae1,
      #40e495,
      #30dd8a,
      #2bb673
    );
    box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
  }
  .leaflet-container {
    height: 100vh;
    width: 100vw;
    z-index: 1;
  }
  @media only screen and (max-width: 480px) {
    nav {
      margin: 2vh 3vw;
      z-index: 10;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      height: 100%;
      justify-content: space-between;
      margin: 0;
    }
    .bn632-hover {
      position: relative;
      bottom: 0px;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    select {
      position: relative;
      top: 30px;
      right: 5vw;
    }
  }
`;

export default SMap;
