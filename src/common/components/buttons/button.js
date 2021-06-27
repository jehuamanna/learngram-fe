import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

import { theme } from "../../constants/theme";

export const Button = ({ isLoading, text, action, color, bgColor, disabled }) => {
  return (
    <StyledButton
      onClick={action}
      color={color}
      bgColor={bgColor}
      disabled={disabled}
    >
      {isLoading ?  
        <Loader
          type="Puff"
          color="#00BFFF"
          height={40}
          width={40}
        /> : text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 15px;
  width: 200px;
  text-transform: uppercase;
  background-color: ${({ disabled }) => disabled ? "gray" : theme.background};
  color: ${({ color }) => color ? color : "white"};
  font-size: 25px;
  border-radius: 4px;
  margin: 57px 0px 30px 0px;
  cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;