import React from "react"

import { Link } from "react-router-dom"

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../logout-button/logout-button"
import LoginButton from "../login-button/login-button"
import SignupButton from "../sign-up/signup-button"





const Navbar = () => {

    const { isAuthenticated } = useAuth0();




    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand" href="#">Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/challenges" className="nav-link" aria-current="page" href="#">Challenges</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/inspiration" className="nav-link" aria-current="page" href="#">Inspiration</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/jokes" className="nav-link" aria-current="page" href="#">Jokes</Link>
                    </li>
                    <li className="nav-item">
                    {isAuthenticated? <LogoutButton/> :<LoginButton/>}
                    </li>
                    <li className="nav-item">
                    {isAuthenticated?<Link to="/profile" className="nav-link" aria-current="page" href="#">Profile</Link>:<SignupButton/>}
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}


export default Navbar 