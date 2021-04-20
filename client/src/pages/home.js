import React, { useState, useEffect } from 'react'
import Container from "../components/container/container"
import Row from "../components/row/row"
import Col from "../components/col/col"
import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react";
import Article from "../components/articles/articles"

const Home = () => {
    const [articles, setArticles] = useState([])
    const { isAuthenticated } = useAuth0();

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
    return (
        <Container>
            <Row>
                {articles.map((article, index) => (
                    <Col className="col" key={index}>
                        <Article
                            title={article.title}
                            img={article.urlToImage === null ? "" : `${article.urlToImage}`}
                            author={article.author === null ? "" : `${article.author}`}
                            desc={article.description === null ? "" : `${article.description}`}
                            content={article.content === null ? "" : `${article.content}`}
                            src={article.source.name}
                            link={article.link}
                        />
                    </Col>
                )
                )}
            </Row>
        </Container>
    )
}
export default Home