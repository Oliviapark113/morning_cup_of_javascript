import React ,{useState, useEffect}from "react"
import { useHistory } from 'react-router-dom'
import Container from "../components/container/container"
import Row from "../components/row/row"
import Col from "../components/col/col"
import ChallenegsAPI from "../utils/challengesAPI"
import AllChallenges from "../components/allChallenges/allChallenges"
import axios from "axios"
import savedChallenge from "./savedChallenge"


const Challenges =() =>{

    
    const[challenges, setChallenges] = useState([])
    const [storedChallenges, setStoredChallenges] = useState([])

    const history = useHistory()

    const handleClick = () => {

    }

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

    useEffect(()=>{
        fetchCodeAPI()
    }
    ,[])


    const handleSave = id => {
        const findChallenge = challenges.find(
            challenge =>{
               return challenge.id ===id
            }
        )
        console.log(findChallenge)

    const challengeData = {
         name: findChallenge.name,
         rank: findChallenge.rank,
         description: findChallenge.description,
         url: findChallenge.url
    }
     console.log(challengeData)

    ChallenegsAPI.addSavedChallenge(challengeData)
    .then(response =>{
        console.log(JSON.parse(response.config.data))
        setStoredChallenges([...storedChallenges, JSON.parse(response.config.data)])
        history.push("/savedChallenge")
    })
    .catch(err => console.log(err))

    }

    console.log(storedChallenges)


    return (
        <Container>
            <Row>
                <Col>
                <AllChallenges 
             challenges={challenges}
             handleSave={handleSave}
            />
                </Col>
            </Row>
        </Container>
    )
}

export default Challenges