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
import { toast } from 'react-toastify';
import { emailValidatorRE } from '../../common/utils/validations'



export const SignupForm = (props) => {

  const inputEl = useRef(null)
  const { setIsLoggedIn, setIsFromLoginPage } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isEmailErrorMsg, setIsEmailErrorMsg] = useState(false);
  const [isValidEmailErrorMsg, setIsValidEmailErrorMsg] = useState(false)
  const [emailErrorMsg, setEmailErrorMsg] = useState('')
  const [secondaryField, setSecondaryField] = useState('Password')
  const [redirectToHome, setRedirectToHome] = useState(false)
  const [otpErrorMessage, setOTPErrorMessage] = useState("")


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
    }else {
      if(value === ""){
        setOTPErrorMessage("Please Enter OTP")
      } else {
        setOTPErrorMessage("")
      }
    }
  };

  const handleSignUp = async () => {
    if(password === ""){
      setOTPErrorMessage("Please Enter OTP")
      return
    }
    if(secondaryField === "Password") {
      setIsLoading(true)
      const result = await Signup({ email, password });
      setIsLoading(false)
      const { success, responseType, message } = result || {}
      if (success) {
        if(responseType){
          if(responseType === "user-exists") {
            props.toast(() => toast.error(message))
          }
        }else {  
          setPassword('');
          props.toast(() => toast.info("OTP Sent To Registered Email. Please Enter OTP"))
          setSecondaryField('OTP')
        }
      }
    } else {
      setIsLoading(true)
      const result =  await VerifyOTP({ email, otp:password });
      setIsLoading(false)
      const { success, responseType, message } = result || {}
      if (success) {
        if(responseType){
          if(responseType === "user-exists") {
            props.toast(() => toast.error(message))
          }
          else if(responseType === "user-doesnot-exists") {
            props.toast(() => toast.error(message))
          }
          else if(responseType === "invalid-otp") {
            props.toast(() => toast.error(message))
          }
          else if(responseType === "otp-six-digits") {
            props.toast(() => toast.error(message))
          }
        }else {  
          setEmail('');
          setPassword('');
          setIsLoggedIn(true)
          setIsFromLoginPage(true)
          setRedirectToHome(true)
        }
      }
      
    }
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
          <ErrorMessage>
              {otpErrorMessage ?<ErrorDiv style={{ display: "flex" }} >
                <SuccessIcon login={true} src={ Close} width={15} />
               {otpErrorMessage}
              </ErrorDiv> : null}
          </ErrorMessage>     
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
              isLoading={isLoading}
              text="Signup"
              action={handleSignUp}
            />
          </ButtonContainer>
        }
      </>
    </SignupContainer>
  );
}