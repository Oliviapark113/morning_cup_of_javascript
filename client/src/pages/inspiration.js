import React, { useEffect, useState } from "react"
import axios from 'axios'
import Container from "../components/container/container"
import Row from "../components/row/row"
import Col from "../components/col/col"
import Arrays from '../utils/arrays'
import RandomButton from '../components/random-button/random-button'
import InspirationResults from "../components/inspiration-results/inspiration-results"
import InspirationCheckboxes from "../components/inspiration-checkboxes/inspiration-checkboxes"
import NotSignedIn from "../components/user-not-signed/user-not-signed"
import { useAuth0 } from "@auth0/auth0-react";
import Comments from "../components/inspiration-comments/inspiration-comments"



const arrayRandomizer = (array) => {
    const randoItem = array[Math.floor(Math.random() * array.length)]
    return randoItem
}

const Inspiration = () => {
    const { isAuthenticated } = useAuth0();
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

    const [checkboxes, setCheckBoxes] = useState({
        npm: true,
        api: true,
        framework: true
    })

    useEffect(() => {
        if (idea.npm === '') seeding()
        else callNPM()
    }, [idea.npm.name])

    function seeding() {
        const npmTerm = arrayRandomizer(Arrays.searchArray)
        const apiObject = arrayRandomizer(Arrays.apiArray)
        const frameObject = arrayRandomizer(Arrays.frameworkArray)
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
        if(idea.npm.name==="") {
            return
        } 
        else {
            axios.get(`https://api.npms.io/v2/search?q=${idea.npm.name}`)
                .then(response => {
                    const searchResults = response.data.results
                    let lucky = searchResults.filter(function (npmPackage) {
                        return npmPackage.score.final > 0.4
                    });
                    const searchNpm = lucky[Math.floor(Math.random() * lucky.length)]
                    console.log(searchNpm)
                    setIdea({ ...idea, npm: { ...idea.npm, locationUrl: searchNpm.package.links.npm } })
                })
                .catch(err => console.log(err))
            
        }
    }


    function handleChange(e) {
        // e.preventDefault()
        console.log(e.target.checked)
        const checkboxName = e.target.attributes.name.nodeValue
        const checkboxChecked = e.target.checked
        if(checkboxChecked === false){
            setIdea({ ...idea, [checkboxName]: {
                name: '',
                locationUrl: ''
            } })
        }
        setCheckBoxes({ ...checkboxes, [checkboxName]: checkboxChecked }
        )
    }

    return (
      <>
            {isAuthenticated? <Container> <Row> 
                <InspirationCheckboxes onChange={handleChange} />
            </Row>
            <Row>
                <Col className="inspMe">
                    <div className="">
                        <h3 className="inspMeTitle">Inspiration Generator</h3>
                        <p>This Inspiration Generator works in a Magical, Mystical and Fantastical way to generate a list of components that will challenge your Developer skills - choose what your random inspiration button will generate up above.</p>
                        <RandomButton className="inspMeButton" onClick={handleClick} type="button">INSPIRE ME!!</RandomButton>
                    </div>
                </Col>
                <Col
                    className="inspResult">
                    <InspirationResults

                        npm={checkboxes.npm=== true? idea.npm.name : ""}
                        npmLink={checkboxes.npm=== true? idea.npm.locationUrl : ""}
                        api={checkboxes.api=== true? idea.api.name : ""}
                        apiLink={checkboxes.api=== true? idea.api.locationUrl : ""}
                        framework={checkboxes.framework=== true? idea.framework.name :""}
                        frameworkLink={checkboxes.framework=== true? idea.framework.locationUrl : ""}

                    />

                </Col>
                </Row>
                <Row>
                    <Comments/>
                </Row>
                </Container>
            : <NotSignedIn/> }
            
            </>
    )
}

export default Inspiration
