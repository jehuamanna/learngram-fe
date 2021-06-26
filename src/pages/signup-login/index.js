import React, { useState } from "react";
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
} from './styled-components'

export const SignupLogin = () => {

  const [tab, setTab] = useState(0);

  return (
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
    </OutsideContainer>
  );
}
