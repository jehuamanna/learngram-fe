import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { theme } from "../../constants/theme";
import { Logout } from "../../actions/auth";

export const Navbar = () => {
  return (
    <>
      <ToastContainer />
      <Container>
        <StyledLink href="/">Economics 101</StyledLink>
        <StyledLink onClick={() => {
          toast.success("Logging Out")
          setTimeout(() => {
            Logout()
          }, 1500) 
          }}>Logout</StyledLink>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 25px 30px;
  font-size: 35px;
  color: ${theme.background};
  border-bottom: 1px solid #818288;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4b5ef4;
`;