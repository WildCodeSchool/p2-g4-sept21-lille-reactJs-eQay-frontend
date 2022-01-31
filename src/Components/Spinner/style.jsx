import styled from 'styled-components';

const Sspinner = styled.div`
  .spinner-box {
    width: 200px;
    height: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: linear-gradient(
      to right,
      #25aae1,
      #40e495,
      #30dd8a,
      #2bb673
    );
    box-shadow: 0 4px 15px 0 rgb(49 196 190 / 75%);
    border-radius: 3rem;
    z-index: 999;
  }
  /* PULSE BUBBLES */
  .pulse-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pulse-bubble {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
  }
  .pulse-bubble-1 {
    animation: pulse 0.4s ease 0s infinite alternate;
  }
  .pulse-bubble-2 {
    animation: pulse 0.4s ease 0.2s infinite alternate;
    margin-left: 0.5rem;
  }
  .pulse-bubble-3 {
    animation: pulse 0.4s ease 0.4s infinite alternate;
    margin-left: 0.5rem;
  }
  .pulse-bubble-4 {
    animation: pulse 0.4s ease 0.6s infinite alternate;
    margin-left: 0.5rem;
  }
  .pulse-bubble-5 {
    animation: pulse 0.4s ease 0.8s infinite alternate;
    margin-left: 0.5rem;
  }
  /* KEYFRAMES */
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(359deg);
    }
  }
  @keyframes spin3D {
    from {
      transform: rotate3d(0.5, 0.5, 0.5, 360deg);
    }
    to {
      transform: rotate3d(0deg);
    }
  }
  @keyframes configure-clockwise {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes configure-xclockwise {
    0% {
      transform: rotate(45deg);
    }
    25% {
      transform: rotate(-45deg);
    }
    50% {
      transform: rotate(-135deg);
    }
    75% {
      transform: rotate(-225deg);
    }
    100% {
      transform: rotate(-315deg);
    }
  }
  @keyframes pulse {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0.25;
      transform: scale(0.75);
    }
  }
`;

export default Sspinner;
