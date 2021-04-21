import React from "react"

import { Link } from "react-router-dom"

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../logout-button/logout-button"
import LoginButton from "../login-button/login-button"
import SignupButton from "../sign-up/signup-button"

import { BsFillArchiveFill, BsJustify } from "react-icons/bs";

import '../../App.css'
import './navbar.css'

const Navbar = () => {

	const { isAuthenticated } = useAuth0();

	const handleHamburger = () => {
		// const toggleBtn = document.querySelector('.hamburger-btn')
		const navList = document.querySelector('.navbar-items')
		navList.classList.toggle('active')
	}

	return (
		<nav className="navbar navbar-expand-lg background">
			<div className="container-fluid nav-wrapper">
				<Link to="/" className="navbar-brand text-styles" href="#">Home</Link>
				{/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
				<button className="hamburger-btn" onClick={handleHamburger} >
					<BsJustify className="hamburger-styles" />
				</button>
				<div className="navbar-item container" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-items">
						<li className="nav-item">
							<Link to="/inspiration" className="nav-link text-styles nav-list" aria-current="page" href="#">Inspiration</Link>
						</li>
						<li className="nav-item">
							<Link to="/challenges" className="nav-link text-styles nav-list" aria-current="page" href="#">Challenges</Link>
						</li>
						<li className="nav-item">
							<Link to="/savedanswerlist" className="nav-link text-styles nav-list" aria-current="page" href="#"><BsFillArchiveFill /> Saved</Link>
						</li>
						{/* <li className="nav-item">
                            <Link to="/jokes" className="nav-link" aria-current="page" href="#">Jokes</Link>
                        </li> */}
					</ul>
				</div>
				<div className="right-nav-container">
					<ul className="right-nav">
						<li className="nav-item">
						{isAuthenticated?<Link to="/profile" className="nav-link text-styles nav-list" aria-current="page" href="#">Profile</Link>:<SignupButton className="nav-list"/>}
						</li>
						<li className="nav-item text-styles nav-list">
						{isAuthenticated? <LogoutButton className="nav-list"/> :<LoginButton className="nav-list"/>}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}


export default Navbar