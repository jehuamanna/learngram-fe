import React, { useRef, useState, useEffect, useContext} from "react";
import {Redirect} from 'react-router-dom';
import { Button } from "../../common/components/buttons/button";
import { passwordValidator } from "../../common/utils/validations";
import { Signup, VerifyOTP } from "../../common/actions/auth";

import {
  SignupContainer,
  InputTitle,
  Input,
  ErrorContainer,
  SuccessIcon,
  ButtonContainer,
  ErrorMessage,
  ErrorDiv,
  Message,

} from './styled-components'

import Tick from "../../common/assets/icons/tick.svg";
import Close from "../../common/assets/icons/close.svg";
import { AuthContext } from "../../common/contexts/auth-context";

import { emailValidatorRE } from '../../common/utils/validations'
export const SignupForm = () => {

  const inputEl = useRef(null)
  const { setIsLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isEmailErrorMsg, setIsEmailErrorMsg] = useState(false);
  const [isValidEmailErrorMsg, setIsValidEmailErrorMsg] = useState(false)
  const [emailErrorMsg, setEmailErrorMsg] = useState('')
  const [secondaryField, setSecondaryField] = useState('Password')
  const [redirectToHome, setRedirectToHome] = useState(false)
  const [message, setMessage] = useState("")


  useEffect(() => {
    inputEl && inputEl.current.focus()
  }, [])
  const handlePasswordChange = e => {
    const value = e.target.value;
    setPassword(value);
    if(secondaryField === "Password"){
      const errs = passwordValidator(value);
      setErrors(errs);
      setPassword(value);
    }
  };

  const handleSignUp = async () => {
    if(secondaryField === "Password") {
      const result = await Signup({ email, password });
      const { success,responseType, message } = result || {}
      if (success) {
        if(responseType){
          if(responseType === "user-exists") {
            setMessage(message)
          }
        }else {  
          setPassword('');
          setSecondaryField('OTP')
        }
      }
    } else {
      const { success } = await VerifyOTP({ email, otp:password });
      if (success) {
        setEmail('');
        setPassword('');
        setIsLoggedIn(true)
        setRedirectToHome(true)
      }
      
    }
    setLoading(false);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSignUp()
      return
    }
  }


  if(redirectToHome){
    return <Redirect to="/" />
  }
  return (
    <SignupContainer>
      <>
        <InputTitle>Email</InputTitle>
        <Input
          ref={inputEl}
          value={email}
          onChange={e => {
            if (e.target.value) {
              setIsEmailErrorMsg(false)
              const isValidEmail = emailValidatorRE.test(String(e.target.value).toLowerCase())
              if (isValidEmail) {
                setIsValidEmailErrorMsg(false)
              } else {
                setIsValidEmailErrorMsg(true)
                setEmailErrorMsg("Enter Valid Email Address")
              }
            } else {
              setIsValidEmailErrorMsg(false)
              setEmailErrorMsg("")
            }
            setEmail(e.target.value)
          }
          }
        />
        <ErrorMessage>
          {isEmailErrorMsg || isValidEmailErrorMsg ?
            <ErrorDiv style={{ display: "flex" }} >
              <SuccessIcon login={true} src={Close} width={15} />
              {emailErrorMsg}
            </ErrorDiv> : null}

        </ErrorMessage>
      </>
      <>
        <InputTitle>{secondaryField}</InputTitle>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onKeyDown={handleKeyDown}
        />
        <Message>{message}</Message>
        {errors.filter(error => !error.valid).length > 0
          ? (
            <ErrorContainer>
              {errors.length > 0 && errors.map(error => (
                <div style={{ display: "flex" }} >
                  <SuccessIcon src={error.valid ? Tick : Close} width={15} />
                  {error.message}
                </div>
              ))}
            </ErrorContainer>
          ) :

          <ButtonContainer>
            <Button
              text="Signup"
              action={handleSignUp}
            />
          </ButtonContainer>
        }
      </>
    </SignupContainer>
  );
}