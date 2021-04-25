import React from "react"
import { FaGithubSquare } from "react-icons/fa";
import Row from '../row/row'
import Col from '../col/col'
import './footer.css'

function PageFooter() {
    return (<footer>
        <Row className="footer-row">
            <Col className="col-md-10">
                <p className="developers">Developers:</p>
                <ul className="footer-list">
                <li className="footer-item">
                    <a href='https://github.com/Pete-Scale' target="_blank" rel="noreferrer"><FaGithubSquare className="github-icon"/></a>Pete Scale 
                    </li>
                    <li className="footer-item">
                    <a href='https://github.com/Oliviapark113' target="_blank" rel="noreferrer"><FaGithubSquare className="github-icon"/></a>Olivia Park
                    </li>
                    <li className="footer-item">
                    <a href='https://github.com/Nvrtis/Nvrtis.github.io' target="_blank" rel="noreferrer"><FaGithubSquare className="github-icon"/></a>Nicholis Vrtis 
                    </li>
                    <li className="footer-item">
                    <a href='https://github.com/Geoff7709' target="_blank" rel="noreferrer"><FaGithubSquare className="github-icon"/></a>Geoffrey Zimmerman 
                    </li>
                </ul>
            </Col>
            <Col className="col-md-2 license">
            <button className="btn link-btn"><a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer"> <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge&logo=appveyor" alt="MIT Badge"/></a></button>
            <br/>
                <div classN="footer-copyright"> © 2021 Copyright:
                </div>

            </Col>
        </Row>
    </footer>)
}

export default PageFooter