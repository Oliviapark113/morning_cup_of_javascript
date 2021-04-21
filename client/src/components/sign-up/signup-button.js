import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import './signup-button.css'

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-block signup-styles"
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Sign Up
    </button>
  );
};
export default SignupButton;