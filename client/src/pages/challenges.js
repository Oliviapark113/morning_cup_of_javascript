import React ,{useState, useEffect}from "react"
import Container from "../components/container/container"
import Row from "../components/row/row"
import Col from "../components/col/col"
import ChallenegsAPI from "../utils/challengesAPI"
import AllChallenges from "../components/allChallenges/allChallenges"

const Challenges =() =>{

    
    const[challenges, setChallenges] = useState([])
    console.log(challenges)
   

    useEffect(()=>{
        ChallenegsAPI.getChallenges()
        .then(response => setChallenges(response.data))
        .catch(err=> console.log(err))
    }
    ,[])



    return (
        <Container>
            <Row>
                <Col>
                <AllChallenges challenges={challenges}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Challenges