import React, {useState, useEffect} from "react"
import Container from "../components/container/container"

import {
  Link,
  useLocation
} from "react-router-dom";
import ChallengesAPI from "../utils/challengesAPI"
import Row from "../components/row/row"
import Col from "../components/col/col"

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";



const ChallengeView = () => {

  const [answer, setAnswer] = useState({})

  const location = useLocation();
  console.log(location)

  const onChange = (newValue) => {
      console.log("answer", newValue);

  }

  let difficulty = "EASY"
  if(location.state.rank.id > -8 ) {
    difficulty = "HARD"
  }

  return(
    <Container className="hide">
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
          // value={newValue}
          name="ANSWER_UNIQUE_ID"
          editorProps={{ $blockScrolling: true }}
        />
      <Row>
        <Col className="col-md-3 button-container">
          <button type="button" className="btn btn-primary" onClick={null}>SAVE</button>
          <button type="button" className="btn btn-success">UPDATE</button>
          <button type="button" className="btn btn-danger">DELETE</button>
        </Col>
      </Row>
      </Col>
    </Container>
    )
}

export default ChallengeView