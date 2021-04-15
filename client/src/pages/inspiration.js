import React, { useState, useEffect } from "react"
import axios from 'axios'
import Container from "../components/container/container"
import Row from "../components/row/row"
import Col from "../components/col/col"
import Arrays from '../utils/arrays'





const arrayRandomizer = (array) => {
    const randoItem = array[Math.floor(Math.random() * array.length)]
    console.log(randoItem)
}

const Inspiration = () => {
    const [idea, setIdea] = useState({
        npm: {},
        api: {},
        framework: {}
    })
    useEffect(() => {
        seeding()
    },[])
    

function seeding()  {
 setIdea({
    npm:arrayRandomizer(Arrays.searchArray),
    api:arrayRandomizer(Arrays.apiArray), 
    framework:arrayRandomizer(Arrays.frameworkArray)  
    })   
    callNPM()
}
    

function callNPM()  {
    axios.get(`https://api.npms.io/v2/search?q=${idea.npm}`)
            .then(response => {
                const searchResults = response.data.results
                console.log(searchResults[Math.floor(Math.random() * searchResults.length)])
            })
            .catch(err => console.log(err))

}

    return (
    <Container>
        <Row>
            <Col>Inspiration</Col>
        </Row>
    </Container>
)
}

export default Inspiration