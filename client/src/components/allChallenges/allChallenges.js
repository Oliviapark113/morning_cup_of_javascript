import React from "react"
import Container from "../container/container"
import Row from "../row/row"
import Col from "../col/col"
import {Link} from "react-router-dom"

const AllChallenges= ({challenges}) =>(
    <Container>
        <Row className="challenge-row">
            <Col className="col-md-12">
            {challenges.map(challenge=>
                 ( <ul className="challege-list">
                  <li className="challenge-title">
                      <Link to="/savedChallenge" aria-current="page" href="#">
                      {challenge.title}
                      </Link>
                  </li>

                  <li className="challenge-question">
                   {challenge.question}
                  </li>

                  <li className="challenge-difficulty">
                   {challenge.difficulty}
                  </li>

                  <li className="challenge-answer">
                   {challenge.answer}
                  </li>

                 </ul>


                 )

            )}
            </Col>
        </Row>
        
    </Container>
)

export default AllChallenges