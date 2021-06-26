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

export const LoginForm = () => {

  const inputEl = useRef(null);
  const { authenticated } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailErrorMsg, setIsEmailErrorMsg] = useState(false);
  const [isPasswordErrorMsg, setIsPasswordErrorMsg] = useState(false)
  const [isValidEmailErrorMsg, setIsValidEmailErrorMsg] = useState(false)
  const [emailErrorMsg, setEmailErrorMsg] = useState('')
  const [redirectToHome, setRedirectToHome] = useState(false)

  useEffect(() => {
    inputEl && inputEl.current.focus()
  },[])
  
  useEffect(() => {
    if(authenticated){
      setRedirectToHome(true)
    }    
  },[authenticated])

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
    const { success } = await Login({ email, password });
    console.log(success)
    if(success) {
      setRedirectToHome(true)
    }
  }

  const handlePassword = (e) => {
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
              console.log(e.target.value)
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
               Please Enter Password
              </ErrorDiv>: null}
          </ErrorMessage>     
        </>
      <ButtonContainer><Button text="Login" action={handleLogin} /></ButtonContainer>
    </LoginContainer>
  );
}
