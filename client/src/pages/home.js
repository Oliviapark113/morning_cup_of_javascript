import React, { useState, useEffect } from 'react'
import Container from "../components/container/container"
import Row from "../components/row/row"
import Col from "../components/col/col"
import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react";
import Article from "../components/articles/articles"
import date from "date-and-time"



const Home = () => {
    const [articles, setArticles] = useState([])
    const { isAuthenticated } = useAuth0();

    const now = new Date()
    const newDate = date.format(now, 'ddd, MMM DD YYYY')

    useEffect(() => {
        getNews()
    },[isAuthenticated]);

    function getNews() {
        const url = `https://newsapi.org/v2/top-headlines?category=technology&country=us&country=gb&${isAuthenticated ?"pageSize=100&":""}apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
        axios.get(url)
            .then(resp => {
                console.log(resp.data.articles)
                setArticles(resp.data.articles)
            }).catch(err => console.log(err))
    }

    function onClickHandler (e) {
e.preventDefault()
if(e.target.innerHTML=== "Read More") {
    e.target.innerHTML = "Read Less"
}
else {
    e.target.innerHTML="Read More"
}

console.log(e.target.parentNode.children[4].innerHTML==="Read Less")
if(e.target.parentNode.children[4].innerHTML==="Read Less")
e.target.parentNode.children[3].classList.toggle("articleReadMore")
else {
    e.target.parentNode.children[4].classList.toggle("articleReadMore")
}

console.log(e.target.parentNode.children[4])
console.log(e)


    }

    return (
        <Container>
            <Row>
                <Col className="col-12">
                    <p className="dateAndtime">
            {newDate}

                    </p>

                </Col>
            </Row>
            <Row>
                {articles.map((article, index) => (
                    <Col className="col-3" key={index}>
                        <Article
                            title={article.title}
                            img={article.urlToImage === null ? "" : `${article.urlToImage}`}
                            author={article.author === null ? "" : `${article.author}`}
                            desc={article.description === null ? "" : `${article.description}`}
                            content={article.content === null ? "" : `${article.content}`}
                            src={article.source.name}
                            link={article.url}
                            onClick={onClickHandler}

                        />
                    </Col>
                )
                )}
            </Row>
        </Container>
    )
}
export default Home