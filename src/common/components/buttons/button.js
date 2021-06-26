import React from "react";
import styled from "styled-components";

import { theme } from "../../constants/theme";

export const Button = ({ text, action, color, bgColor, disabled }) => {
  return (
    <StyledButton
      onClick={action}
      color={color}
      bgColor={bgColor}
      disabled={disabled}
    >
      {text}
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
`;