import styled from "styled-components";
import HomeBackgroundImage from "../../common/assets/images/background.jpg";
import { theme } from "../../common/constants/theme";

export const OutsideContainer = styled.div`
  background-image: url(${HomeBackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const InsideContainer = styled.div`
  background-color: ${theme.overlay};
  width: 100vw;
  height: 100vh;
`;

export const FormContainer = styled.div`
  padding-bottom: 30px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 10px #656882;
  transition: opacity 0.5s;
  opacity: 1;
`;

export const Container = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(50%, 75px);
`;

export const CompanyName= styled.p`
  color: #4b5ef4;
  font-size: 60px;
  margin: 0;
  padding-bottom: 50px;
  text-align: center;
`;

export const TabContainer = styled.div`
  display: flex;
`;

export const TabHeader = styled.div`
  width: 50%;
  height: 75px;
  background-color: ${({ active }) => active ? "white" : "#efefef9e"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: ${({ active }) => active ? theme.background : "black"};
  font-weight: ${({ active }) => active ? "bold" : "normal"};
  cursor: pointer;
`;


export const LoginContainer = styled.div`
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputTitle = styled.p`
  font-size: 30px;
  margin: 10px 0px;
`;

export const Input = styled.input`
  width: 95%;
  height: 60px;
  border: 1px solid ${theme.background};
  border-radius: 5px;
  outline: none;
  font-size: 25px;
  padding-left: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ErrorContainer = styled.div`
  padding: 15px 20px;
  background-color: ${theme.background};
  width: 85%;
  border-radius: 15px;
  color: white;
`;

export const SuccessIcon = styled.img`
  margin: 0 20px ${(props) => props.login ? "0px" : "15px"} 0;
`;

export const SignupContainer = styled.div`
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 5px;
`;

export const ErrorDiv = styled.div`
  border-radius: 5px;
  color: white;
  padding: 5px 20px;
  background-color: ${theme.background};
`;

export const Spinner = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Message = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 5px;
  color: red;
`;