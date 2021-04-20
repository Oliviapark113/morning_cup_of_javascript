import React, {useState, useEffect} from "react"
import Container from "../components/container/container"

import {
  Link,
  useLocation,
  useHistory
} from "react-router-dom";

import Row from "../components/row/row"
import Col from "../components/col/col"

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import ChallengesAPI from "../utils/challengesAPI";



const ChallengeView = () => {

  // const [answer, setAnswer] = useState({})
  const [saveAnswer, setSaveAnswer] = useState([])

  const history = useHistory()

  const location = useLocation();
  console.log(location)


  const onChange = (newValue) => {
      // console.log("answer", newValue);
      setSaveAnswer(newValue)
     
  }

  console.log(saveAnswer)

  const handleSave = id => {
     const findAnswer = {
       name:location.state.name ,
       url:location.state.url,
       description:location.state.description,
       rank: location.state.rank.id,
       challengeId: id,
       answer : saveAnswer
     }
     console.log(findAnswer)
    ChallengesAPI.saveAnswer(findAnswer)
    .then(response => { setSaveAnswer(response.data)
    history.push("./savedanswerlist")
  })
    .catch(err => console.log(err))

  }
  // console.log(saveAnswer)


  let difficulty = "EASY"
  if(location.state.rank.id > -8 ) {
    difficulty = "HARD"
  }

  return(
    <Container>
      <Col className="col-md-6 challenge-list">
        <div className="card" >
          <div className="card-body">
            <h5 className="card-title">{location.state.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{difficulty}</h6>
            <p className="card-text">{location.state.description}</p>
            <Link to="/challenges" className="card-link">Back</Link>
            <a href={location.state.url} target="_blank" rel="noreferrer" className="card-link">CodeWars Link</a>
          </div>
        </div>
      </Col>
      <Col className="col-md-6 editor">
        <AceEditor
          mode="java"
          theme="github"
          onChange={onChange}
          name="ANSWER_UNIQUE_ID"
          // onCopy={getSavedAnswer}
          editorProps={{ $blockScrolling: true }}
        />
      <Row>
        <Col className="col-md-3 button-container">
          <button type="button" className="btn btn-primary" onClick={()=>{handleSave(location.state.id)}}>SAVE</button>
          {/* <button type="button" className="btn btn-success">UPDATE</button>
          <button type="button" className="btn btn-danger">DELETE</button> */}
        </Col>
      </Row>
      </Col>
    </Container>
    )
}

export default ChallengeView