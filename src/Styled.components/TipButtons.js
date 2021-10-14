import styled from 'styled-components';

export const TipButton = styled.button`
  width: 25%;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: hsl(183, 100%, 15%);
  color: white;
  border-radius: 5px;
  :hover {
    background-color: #23c3ae;
  }
`;
export const ResetButton = styled.button`
  box-shadow: none;
  width: 75%;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: #23c3ae;
  color: gray;
  text-transform: uppercase;
  border-radius: 5px;
  text-align: center;
  margin: 0 auto;
  :hover {
    background-color: hsl(185, 41%, 84%);
  }
`;

