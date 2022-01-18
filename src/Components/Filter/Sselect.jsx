import styled from 'styled-components';

const SSelect = styled.select`
  & {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    width: 100px;
    height: 40px;
    border-radius: 8px;
    flex-direction: row;
    font-family: var(--font-family);
    font-size: 1rem;
    border: none;
    background-color: white;
    text-align: center;

    option {
      background: blue;
      background-color: red;
    }
  }
`;

export default SSelect;
