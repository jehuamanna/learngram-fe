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
  background-color: rgb(200 206 255 / 42%);
  width: 100vw;
  height: 100vh;
`;

export const FormContainer = styled.div`
  padding-bottom: 30px;
  max-width: 500px;
  max-height: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 10px #656882;
  transition: opacity 0.5s;
  opacity: 1;
  @media(max-height: 730px){
    padding-bottom: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(0px, 75px);
  width: 500px;
  @media(max-width: 501px){
    width: 100%;
  }

  @media(min-width: 1025px){
    transform: translate(100px, 75px);
    width: 500px;
  }
  @media(max-height: 730px){
    margin: auto 0px;
  }
  @media(max-height: 730px) and (max-width:501px){
    transform: translate(0px, 0px);
  }
`;

export const CompanyName= styled.p`
  color: #031fff;
  font-size: 60px;
  margin: 0;
  padding-bottom: 20px;
  text-align: center;
  @media(max-height: 730px){
    margin-top: 0px;
    font-size: 36px;  
    padding-bottom: 25px;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  height: 75px;
  font-size: 32px;
  padding-bottom: 13px;
  @media(max-width: 501px){
    font-size: 24px;
    height: 50px;
  }
  @media(max-height: 730px){
    font-size: 24px;
    height: 50px;
  }
`;

export const TabHeader = styled.div`
  width: 50%;
  background-color: ${({ active }) => active ? "white" : "#efefef9e"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ active }) => active ? theme.background : "#4e4444"};
  font-weight: ${({ active }) => active ? "bold" : "normal"};
  cursor: pointer;
`;


export const LoginContainer = styled.div`
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media(max-width: 501px){
    padding: 0px 20px;
  }
`;

export const InputTitle = styled.p`
  font-size: 30px;
  margin: 10px 0px;
  color: #4e4444;
  @media(max-width: 501px){
    font-size: 24px;
  }
  @media(max-height: 730px){
    margin-top: 20px;
    font-size: 22px;
  }
`;

export const Input = styled.input`
  width: 95%;
  height: 60px;
  border: 1px solid ${theme.background};
  border-radius: 5px;
  outline: none;
  font-size: 25px;
  padding-left: 20px;
  @media(max-width: 501px){
    font-size: 22px;
  }
  @media(max-height: 730px){
    height: 45px;
    font-size: 22px;
  }
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
  margin: 0 20px ${(props) => props.login ? "0px" : "8px"} 0;
`;

export const SignupContainer = styled.div`
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media(max-width: 501px){
    padding: 0px 20px;
  }
`;

export const ErrorMessage = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 5px;
  @media(max-height: 730px){
    height:10px;
  }
`;

export const ErrorDiv = styled.div`
  border-radius: 5px;
  color: white;
  padding: 5px 20px;
  background-color: ${theme.background};
  @media(max-height: 730px){
    padding: 2px 20px;
  }
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