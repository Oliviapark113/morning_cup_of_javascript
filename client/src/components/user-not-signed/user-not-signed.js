import React from "react"
import './style.css'
import { useAuth0 } from "@auth0/auth0-react";

const NotSignedIn = () =>{
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="NotSignedIn" > <p className="NotSignedInText">
        Please sign in to use this function
        </p>
        <button
      className="inspMeButton"
      onClick={() =>
        loginWithRedirect({
            screen_hint: "signup",
        })
    }
    >
      Sign Up
    </button>
        </div>
)

}
export default NotSignedIn