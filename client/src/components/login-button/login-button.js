import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import './login-button.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-block login-styles"
      onClick={e => {
        e.preventDefault()
        loginWithRedirect()}}
    >
      Log In
    </button>
  );
};
export default LoginButton;