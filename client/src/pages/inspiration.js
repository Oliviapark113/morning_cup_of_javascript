import React, { useEffect, useState } from "react"
import axios from 'axios'
import Container from "../components/container/container"
import Row from "../components/row/row"
import Col from "../components/col/col"
import Arrays from '../utils/arrays'
import RandomButton from '../components/random-button/random-button'
import InspirationResults from "../components/inspiration-results/inspiration-results"
// import InspirationCheckboxes from "../components/inspiration-checkboxes/inspiration-checkboxes"





const arrayRandomizer = (array) => {
    const randoItem = array[Math.floor(Math.random() * array.length)]
    return randoItem
}

const Inspiration = () => {
    const [idea, setIdea] = useState({
        npm: '',
        api: {
            name: '',
            locationUrl: ''
        },
        framework: {
            name: '',
            locationUrl: ''
        }
    })

    useEffect(() => {
        if (idea.npm === '')seeding()
        else callNPM()
    }, [idea.npm])

    function seeding() {
        const npmTerm = arrayRandomizer(Arrays.searchArray)
        const apiObject = arrayRandomizer(Arrays.apiArray)
        const frameObject = arrayRandomizer(Arrays.frameworkArray)
        console.log(npmTerm)
        console.log(apiObject)
        console.log(frameObject)
        setIdea(
            {npm: npmTerm,
            api: apiObject,
            framework: frameObject}
        )
    }
    function handleClick() {
        seeding()
        // callNPM()
    }
    function callNPM() {
        // console.log(idea)
        axios.get(`https://api.npms.io/v2/search?q=${idea.npm}`)
            .then(response => {
                const searchResults = response.data.results
                // console.log(searchResults)
                // filter logic maintenance/quality
                const searchNpm = searchResults[Math.floor(Math.random() * searchResults.length)]
                console.log(searchNpm)
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row>
                <Col className="col-8">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <RandomButton className="btn btn-primary" onClick={handleClick} type="button">INSPIRE ME!!</RandomButton>
                    </div>
                </Col>
                <Col
                    className="col-4">
                                   <InspirationResults

                                   npm={idea.npm}
                                   api={idea.api.name}
                                   apiLink={idea.api.locationUrl}
                                   framework={idea.framework.name}
                                   frameworkLink={idea.framework.locationUrl}

                    />

                </Col>
            </Row>
        </Container>
    )
}

export default Inspiration



                        // npm={ === null ? "" : `${idea.npm}`}
                        // api={ === null ? "" : `${idea.api}`}
                        // framework={ === null ? "" : `${idea.framework}`}