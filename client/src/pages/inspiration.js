import React, { useEffect, useState } from "react"
import axios from 'axios'
import Container from "../components/container/container"
import Row from "../components/row/row"
import Col from "../components/col/col"
import Arrays from '../utils/arrays'
import RandomButton from '../components/random-button/random-button'
import InspirationResults from "../components/inspiration-results/inspiration-results"
import InspirationCheckboxes from "../components/inspiration-checkboxes/inspiration-checkboxes"





const arrayRandomizer = (array) => {
    const randoItem = array[Math.floor(Math.random() * array.length)]
    return randoItem
}

const Inspiration = () => {
    const [idea, setIdea] = useState({
        npm: {
            name: '',
            locationUrl: ''
        },
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
        if (idea.npm === '') seeding()
        else callNPM()
    }, [idea.npm.name])

    function seeding() {
        const npmTerm = arrayRandomizer(Arrays.searchArray)
        const apiObject = arrayRandomizer(Arrays.apiArray)
        const frameObject = arrayRandomizer(Arrays.frameworkArray)
        console.log(npmTerm)
        console.log(apiObject)
        console.log(frameObject)
        setIdea(
            {
                npm: { name: npmTerm },
                api: apiObject,
                framework: frameObject
            }
        )
    }
    function handleClick() {
        seeding()
    }
    function callNPM() {
        // console.log(idea)
        axios.get(`https://api.npms.io/v2/search?q=${idea.npm.name}`)
            .then(response => {
                const searchResults = response.data.results
                let lucky = searchResults.filter(function (npmPackage) {
                    return npmPackage.score.final > 0.4
                });
                console.log(lucky)
                const searchNpm = lucky[Math.floor(Math.random() * lucky.length)]
                setIdea({ ...idea, npm: { ...idea.npm, locationUrl: searchNpm.package.links.npm } })
            })
            .catch(err => console.log(err))
    }


function handleChange(e) {
    console.log(e)
    e.preventDefault()
}

    return (
        <Container>
            <Row>
                <InspirationCheckboxes onChange={handleChange}/>
            </Row>
            <Row>
                <Col className="col-8">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <RandomButton className="btn btn-primary" onClick={handleClick} type="button">INSPIRE ME!!</RandomButton>
                    </div>
                </Col>
                <Col
                    className="col-4">
                    <InspirationResults

                        npm={idea.npm.name}
                        npmLink={idea.npm.locationUrl}
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

// delete list
 // wisp, faries