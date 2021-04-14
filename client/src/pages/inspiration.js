import React, { useState, useEffect } from "react"
import axios from 'axios'
import Container from "../components/container/container"
import Row from "../components/row/row"
import Col from "../components/col/col"

const npmUrl = 'https://www.npmjs.com/package/'
const npmArray = [
    {
        name: 'thesaurize',
        locationUrl: `${npmUrl}thesaurize`
    },
    {
        name: 'tellmee',
        locationUrl: `${npmUrl}tellmee`
    },
    {
        name: 'discord.js-bot-control',
        locationUrl: `${npmUrl}discord.js-bot-control`
    },
    {
        name: 'fun.framework.cli',
        locationUrl: `${npmUrl}fun.framework.cli`
    },
    {
        name: '@alexfrankcodes/random-emoji',
        locationUrl: `${npmUrl}@alexfrankcodes/random-emoji`
    },
    {
        name: 'trollfacejs',
        locationUrl: `${npmUrl}trollfacejs`
    },
    {
        name: 'hubot-random-exercise',
        locationUrl: `${npmUrl}hubot-random-exercise`
    },
    {
        name: 'brain-games-pravdin-anton',
        locationUrl: `${npmUrl}brain-games-pravdin-anto`
    },
    {
        name: 'js-type-text',
        locationUrl: `${npmUrl}js-type-text`
    },
    {
        name: 'make-me-laugh',
        locationUrl: `${npmUrl}make-me-laugh`
    }
]

const apiArray = [
    {
        name: 'NASA',
        locationUrl: 'https://api.nasa.gov/'
    },
    {
        name: 'Hubble',
        locationUrl: 'http://hubblesite.org/api/documentation'
    },
    {
        name:'Freesound',
        locationUrl: 'https://freesound.org/help/developers/'
    },
    {
        name: 'Fun translations',
        locationUrl: 'https://funtranslations.com/api'
    },
    {
        name: 'jService',
        locationUrl: 'https://jservice.io'
    },
    {
        name: 'COULORlovers',
        locationUrl: 'https://www.colourlovers.com/api'},
    {
        name: 'spoonacular recipe and food',
        locationUrl: 'https://spoonacular.com/food-api'
    },
    {
        name: 'imgur',
        locationUrl: 'https://apidocs.imgur.com'
    },
    {
        name: 'Deck of Cards',
        locationUrl: 'https://www.deckofcardsapi.com'},
    {
        name: 'PokeApi',
        locationUrl: 'https://pokeapi.co'
    }
]

const framewrokArray = [
    'Pure',
    'Bulma',
    'NES',
    'Semantic UI',
    'Skeleton',
    'Materialize',
    'Milligram',
    'Tailwind'
]

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
        axios.get('https://api.npms.io/v2/search?q=star+wars')
        .then(response => {
            const searchResults = response.data.results
            console.log(searchResults[Math.floor(Math.random() * searchResults.length)])
        })
        .then(arrayRandomizer(apiArray))
        .then(arrayRandomizer(framewrokArray))
        .catch(err => console.log(err))
    },[])

    return (
    <Container>
        <Row>
            <Col>Inspiration</Col>
        </Row>
    </Container>
)
}

export default Inspiration