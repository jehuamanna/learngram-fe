import React, { useEffect, useState } from "react";
import { LoginForm } from "./login-form";
import { SignupForm } from "./signup-form";
import {
  OutsideContainer,
  InsideContainer,
  CompanyName,
  Container, 
  TabContainer,
  FormContainer,
  TabHeader,
  Spinner
} from './styled-components'
import Loader from "react-loader-spinner";

export const SignupLogin = () => {

  const [tab, setTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])
  return (
    <>
      {isLoading ? 
      <Spinner>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
      </Spinner> :  
      <OutsideContainer>
        <InsideContainer>
          <Container>
            <CompanyName>LearnGram</CompanyName>
            <FormContainer>
              <TabContainer>
                <TabHeader active={tab === 0} onClick={() => setTab(0)}>
                  Log In
                </TabHeader>
                <TabHeader active={tab === 1} onClick={() => setTab(1)}>
                  Sign Up
                </TabHeader>
              </TabContainer>
              {tab === 0
                ? <LoginForm />
                : <SignupForm />
              }
            </FormContainer>
          </Container>
        </InsideContainer>
      </OutsideContainer>}
  </>
  );
}
