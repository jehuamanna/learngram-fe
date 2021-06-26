import React, { useState, useRef, useEffect, useContext} from "react";
import { Button } from "../../common/components/buttons/button";
import { Login } from "../../common/actions/auth";
import {Redirect} from 'react-router-dom';
import {
  LoginContainer,
  InputTitle,
  Input,
  ButtonContainer,
  ErrorMessage,
  SuccessIcon,
  ErrorDiv
} from './styled-components'

import {emailValidatorRE} from '../../common/utils/validations'
import Close from "../../common/assets/icons/close.svg";
import { AuthContext } from "../../common/contexts/auth-context";
import { LEARNGRAM_ACCESS_KEY } from "../../common/constants/constants";

export const LoginForm = () => {

  const inputEl = useRef(null);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailErrorMsg, setIsEmailErrorMsg] = useState(false);
  const [isPasswordErrorMsg, setIsPasswordErrorMsg] = useState(false)
  const [isValidEmailErrorMsg, setIsValidEmailErrorMsg] = useState(false)
  const [emailErrorMsg, setEmailErrorMsg] = useState('')
  const [redirectToHome, setRedirectToHome] = useState(false)
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("Please Enter Password")

  useEffect(() => {
    inputEl && inputEl.current.focus()
  },[])
  
  useEffect(() => {
    isLoggedIn && setRedirectToHome(true)
  },[isLoggedIn])

  const handleLogin = async () => {
    if(!email){
      setIsEmailErrorMsg(true)
      setEmailErrorMsg('Please Enter Email')
    }
    if(!password){
      setIsPasswordErrorMsg(true)
    }
    const isValidEmail = emailValidatorRE.test(String(email).toLowerCase())
    if(!isValidEmail){
      setIsValidEmailErrorMsg(true)
      setEmailErrorMsg("Enter Valid Email Address")
    }
    if(!email || !password || !isValidEmail){
      return
    }
    const result =  await Login({ email, password });
    const { success, responseType, message } = result || {}
    if(success) {
      if(responseType === 'invalid-user'){
        setIsPasswordErrorMsg(true)
        setPasswordErrorMessage('Invalid Username/Password')
        setPassword("")
      } else if(responseType === 'nonexistent-user'){
        setIsPasswordErrorMsg(true)
        setPasswordErrorMessage('User does not exist. Please signup')
        setPassword("")
      } else {
        setIsLoggedIn(true)
      }
    }
    
  }

  const handlePassword = (e) => {
    setPasswordErrorMessage('Please Enter Password')
    if(e.target.value){
      setIsPasswordErrorMsg(false)
    } else {
      setIsPasswordErrorMsg(true)
    }
    setPassword(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin()
      return
    }
  }

  if(redirectToHome){
    return <Redirect to="/" />
  }

  return (
    <LoginContainer>
      <>
        <InputTitle>Email</InputTitle>
        <Input
          value={email}
          ref={inputEl}
          onChange={e => {
            if(e.target.value){
              setIsEmailErrorMsg(false)
              const isValidEmail = emailValidatorRE.test(String(e.target.value).toLowerCase())
              if(isValidEmail){
                setIsValidEmailErrorMsg(false)
                setEmailErrorMsg("")
              }else{
                setIsValidEmailErrorMsg(true)
                setEmailErrorMsg("Enter Valid Email Address")
              }
            }else{
              setIsValidEmailErrorMsg(false)
              setEmailErrorMsg("")
            }
            setEmail(e.target.value)}
          }
        />
          <ErrorMessage>
        {isEmailErrorMsg || isValidEmailErrorMsg ? 
              <ErrorDiv style={{ display: "flex" }} >
                <SuccessIcon login={true} src={ Close} width={15} />
                {emailErrorMsg}
              </ErrorDiv>: null}
          </ErrorMessage>
      </>
      <>
        <InputTitle>Password</InputTitle>
        <Input
          type="password"
          value={password}
          onChange={handlePassword}
          onKeyDown={handleKeyDown}
        />
          <ErrorMessage>
        {isPasswordErrorMsg ? 
              <ErrorDiv style={{ display: "flex" }} >
                <SuccessIcon login={true} src={ Close} width={15} />
               {passwordErrorMessage}
              </ErrorDiv>: null}
          </ErrorMessage>     
        </>
      <ButtonContainer><Button text="Login" action={handleLogin} /></ButtonContainer>
    </LoginContainer>
  );
}
