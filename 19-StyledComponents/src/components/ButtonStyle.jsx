import styled from 'styled-components';

export const Button = styled.button `
  width: 70px;
  height: 30px;
  background-color: ${(prop) => prop.backgroundColor};
  color: white;
  cursor: pointer;

  border: solid 1px rgb(12, 12, 12);
  border-radius: 5px;

  &:hover {
    background-color: #161616;
  }
   
`