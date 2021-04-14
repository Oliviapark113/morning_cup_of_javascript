import React from "react"
import Container from "../components/container/container"
import Row from "../components/row/row"
import Col from "../components/col/col"

const Home =() =>{
    var url = `https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2021-04-14&' +
    'sortBy=popularity&' +
    'apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    
   
   
   
    return (
    <Container>
        <Row>
        <Col>Home</Col>
        </Row>
    </Container>
)
}
export default Home