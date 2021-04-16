import React from "react"
import Container from "../container/container"
import Row from "../row/row"
import Col from "../col/col"
import {Link} from "react-router-dom"

const AllChallenges= ({challenges, handleSave}) =>(
    <Container>
        <Row className="challenge-row" >
            <Col className="col-md-12">
            {challenges.map(challenge => {
                   console.log(challenge)
                 let difficulty = "easy"

                 if(challenge.rank.id > -8 ){
                     difficulty = "hard"
                 }
                   return(
                       <Container>
                           <Row className="challenge-row" key={challenge.id}>
                               <Col className="col-md-8 challenge-list">
                                   <Link to="/savedChallenge" onClick={() => handleSave(challenge.id)} className="name">{challenge.name}</Link>
                                   <p className="rank">{difficulty}</p>
                            
                               </Col>
                               <Col className="col-md-4 page-btn">
                                   <button className="view-detail"><a className="rank" href={challenge.url}>VIEW</a></button>
                                   <button className="view-challenge" onClick={() => handleSave(challenge.id)}>CHALLENGE</button>
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