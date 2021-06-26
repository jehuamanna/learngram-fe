import React, { useRef, useState, useEffect } from "react";

import { Button } from "../../common/components/buttons/button";
import { passwordValidator } from "../../common/utils/validations";
import { Signup } from "../../common/actions/auth";

import {
  SignupContainer,
  InputTitle,
  Input,
  ErrorContainer,
  SuccessIcon,
  ButtonContainer,
  ErrorMessage,
  ErrorDiv

} from './styled-components'

import Tick from "../../common/assets/icons/tick.svg";
import Close from "../../common/assets/icons/close.svg";

import { emailValidatorRE } from '../../common/utils/validations'
export const SignupForm = () => {

  const inputEl = useRef(null)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isEmailErrorMsg, setIsEmailErrorMsg] = useState(false);
  const [isValidEmailErrorMsg, setIsValidEmailErrorMsg] = useState(false)
  const [emailErrorMsg, setEmailErrorMsg] = useState('')

  useEffect(() => {
    inputEl && inputEl.current.focus()
  }, [])
  const handlePasswordChange = e => {
    const value = e.target.value;
    const errs = passwordValidator(value);
    setErrors(errs);
    setPassword(value);
  };

  const handleSignUp = async () => {
    const errs = passwordValidator(password);
    setErrors(errs);
    setLoading(true);
    if (errs.length) {
      return
    }
    const { success } = await Signup({ email, password });
    if (success) {
      setEmail('');
      setPassword('');
    }
    setLoading(false);
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
        <InputTitle>Password</InputTitle>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <ErrorMessage></ErrorMessage>
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