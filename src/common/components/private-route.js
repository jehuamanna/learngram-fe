import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/auth-context";

export const PrivateRoute = ({ component: Component, ...rest }) => {

  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props => {
        return isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}