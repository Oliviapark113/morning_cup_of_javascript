import React from "react"
import Container from "../container/container"
import Row from "../row/row"
import Col from "../col/col"
import {Link} from "react-router-dom"

const AllChallenges= ({challenges}) =>(
    <Container>
        <Row className="challenge-row" >
            <Col className="col-md-12">
            {challenges.map(challenge => {
                   console.log(challenge)
                 let difficulty = "easy"

                 if(challenge.rank.id > -5 ){
                     difficulty = "hard"
                 }
                   return(
                     <ul className="challenge-list" key={challenge.id}>
                         <li className="name">{challenge.name}</li>
                         <li className="rank">{difficulty}</li>
                         <li className="rank">{challenge.url}</li>
                     </ul>

                   )

            }
        )}
            </Col>
        </Row>
        
    </Container>
)

export default AllChallenges