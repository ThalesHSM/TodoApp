import styled from "styled-components";

export const StyledInput = styled.input`
  font-size: 25px;
  padding: 0 15px;
  width: 100%;
  height: 50px;
  border-radius: 15px;
  outline: 0;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex: 1;
`;

export const StyledButton = styled.div`
  height: 50px;
  width: 100px;
  margin-left: 25px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  box-shadow: 5px;
  background-color: #258edb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;

  :hover {
    opacity: 0.9;
    transition: 0.5s;
  }
`;
