import React ,{useState, useEffect}from "react"
import { useHistory } from 'react-router-dom'
import Container from "../components/container/container"
import Row from "../components/row/row"
import Col from "../components/col/col"
import ChallenegsAPI from "../utils/challengesAPI"
import AllChallenges from "../components/allChallenges/allChallenges"
import axios from "axios"
import ChallengeView from "./challengeView"



const Challenges =() =>{

    const[challenges, setChallenges] = useState([])

    const history = useHistory();
  
    const fetchCodeAPI = async () =>{

        const idArray = ["562926c855ca9fdc4800005b", "5547929140907378f9000039", "559ac78160f0be07c200005a", "59342039eb450e39970000a6", "55a5bfaa756cfede78000026",
            "54bf1c2cd5b56cc47f0007a1", "586560a639c5ab3a260000f3", "56a32dd6e4f4748cc3000006", "55e7280b40e1c4a06d0000aa", "53629117f81a7f9b9e000d1e"]
        const result = []
        for (const id of idArray) {
            try {
               
                const response = await axios.get(`https://www.codewars.com/api/v1/code-challenges/${id}`)
                result.push(response.data)

            }
            catch (err) {
                console.log(err)
            }

        }
        setChallenges(result)   
    }

    useEffect(()=> {
      fetchCodeAPI()  
    }
    ,[])

    const handleView = challenge =>{
        history.push({
            pathname: "/challengeview",
            state: challenge
        })
        console.log(challenge)
    }
    


    return (
        <Container>
            <Row>
                <Col>
                <AllChallenges 
             challenges={challenges}
             handleView={handleView}
            />
                </Col>
     
            </Row>
        </Container>
    )
}

export default Challenges