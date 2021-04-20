import React from "react"
import Container from "../container/container"
import Row from "../row/row"
import Col from "../col/col"
import {Link} from "react-router-dom"

const AllChallenges= ({challenges, handleView}) =>(
    <Container>
        <Row className="challenge-row" >
            <Col className="col-md-12">
            {challenges.map(challenge => {
                 let difficulty = "EASY"
                 if(challenge.rank.id > -8 ){
                     difficulty = "HARD"
                 }
               
                   return(
                       <Container>
                           <Row className="challenge-row" key={challenge.id}>
                               <Col className="col-md-8 challenge-list">
                                   <p className="name">{challenge.name}</p>
                                   <p className="rank">{difficulty}</p>
                            
                               </Col>
                               <Col className="col-md-4 page-btn">
                                   <button className="view-detail"><a className="rank" href={challenge.url}>VIEW</a></button>
                                   <button className="view-challenge" onClick={() => handleView(challenge)}>CHALLENGE</button>
                               </Col>
                        </Row>
                     </Container>

                   )

            }
        )}
            </Col>
        </Row>
        
    </Container>
)

export default AllChallenges