import styled from 'styled-components';

const SRadio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .rad-label {
    width: 128px;
    display: flex;
    align-items: center;
    background-color: white;

    border-radius: 100px;
    padding: 14px 16px;
    margin: 10px 0;

    cursor: pointer;
    transition: 0.3s;
  }

  .rad-label:hover,
  .rad-label:focus-within {
    background: hsla(0, 0%, 80%, 0.54);
  }

  .rad-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 1px;
    opacity: 0;
    z-index: -1;
  }

  .rad-design {
    width: 22px;
    height: 22px;
    border-radius: 100px;

    background: linear-gradient(
      to right bottom,
      hsl(154, 97%, 62%),
      hsl(225, 97%, 62%)
    );
    position: relative;
  }

  .rad-design::before {
    content: '';

    display: inline-block;
    width: inherit;
    height: inherit;
    border-radius: inherit;

    background: hsl(0, 0%, 90%);
    transform: scale(1.1);
    transition: 0.3s;
  }

  .rad-input:checked + .rad-design::before {
    transform: scale(0);
  }

  .rad-text {
    color: hsl(0, 0%, 60%);
    margin-left: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 900;

    transition: 0.3s;
  }

  .rad-input:checked ~ .rad-text {
    color: hsl(0, 0%, 40%);
  }
`;

export default SRadio;
