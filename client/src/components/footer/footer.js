import React from "react"
import { FaGithubSquare } from "react-icons/fa";
import Row from '../row/row'
import Col from '../col/col'
import './footer.css'

function PageFooter() {
    return (<footer>
        <Row className="footer-row">
            <Col className="col-md-10">
                <h3>Developers:</h3>
                <ul className="footer-list">
                    <li className="footer-item">
                    <a href='https://github.com/Oliviapark113' target="_blank" rel="noreferrer"><FaGithubSquare className="github-icon"/></a> Olivia Park 
                    </li>
                    <li className="footer-item">
                    <a href='https://github.com/Pete-Scale' target="_blank" rel="noreferrer"><FaGithubSquare className="github-icon"/></a> Pete Scale 
                    </li>
                    <li className="footer-item">
                    <a href='https://github.com/Nvrtis/Nvrtis.github.io' target="_blank" rel="noreferrer"><FaGithubSquare className="github-icon"/></a> Nicholis Vrtis 
                    </li>
                    <li className="footer-item">
                    <a href='https://github.com/Geoff7709' target="_blank" rel="noreferrer"><FaGithubSquare className="github-icon"/></a> Geoffrey Zimmerman 
                    </li>
                </ul>
            </Col>
            <Col className="col-md-2">
            <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT Badge"/></a>
            </Col>
        </Row>
    </footer>)
}

export default PageFooter