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
    }, [isAuthenticated]);

    function getNews() {
            const url = `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${process.env.REACT_APP_NEWS_API_KEY2}`;
            setArticles([])

            axios.get(url)
                .then(resp => {
                    for (var i = 0; i < resp.data.results.length; i++) {
                        setArticles(articles => [...articles, {
                            title: resp.data.results[i].title,
                            image: resp.data.results[i].multimedia===null? "" : resp.data.results[i].multimedia[2].url,
                            publishedAt: resp.data.results[i].created_date,
                            description: resp.data.results[i].abstract,
                            url: resp.data.results[i].url,
                            content: "",
                            source: { name: "New York Times" }
                        }
                    ])
                    };
                }).catch(err => console.log(err))
    }

    function onClickHandler(e) {
        e.preventDefault()
        if (e.target.innerHTML === "Read More") {
            e.target.innerHTML = "Read Less"
        }
        else {
            e.target.innerHTML = "Read More"
        }

        if (e.target.parentNode.children[4].innerHTML === "Read Less")
            e.target.parentNode.children[3].classList.toggle("articleReadMore")
        else {
            e.target.parentNode.children[4].classList.toggle("articleReadMore")
        }
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
                {articles.map((article, index) => {
                    if (article.image.includes(".jpg") || article.image.includes(".png")) {
                    } else {
                        article.image = ""
                    }
                    const date = article.publishedAt.split("T")[0]
                    return (
                        <Col className="col-3" key={index}>
                            <Article
                                title={article.title}
                                img={article.image === null ? "" : `${article.image}`}
                                date={article.publishedAt === null ? "" : `${date}`}
                                desc={article.description === null ? "" : `${article.description}`}
                                content={article.content === null ? "" : `${article.content}`}
                                src={article.source.name === undefined ? "New York Times" : `${article.source.name}`}
                                link={article.url}
                                onClick={onClickHandler}

                            />
                        </Col>
                    )

                }
                )}
            </Row>
        </Container>
    )
}
export default Home
