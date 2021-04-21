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
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";
import ChallengesAPI from "../utils/challengesAPI";



const SavedChallengeView = () => {
 
  const location = useLocation();
  const [updateAnswer, setUpdateAnswer] = useState(location.state.answer);

  const history = useHistory()

 
  console.log(location)


  const onChange = (newValue) => {
      setUpdateAnswer(newValue)
     
  }

  console.log(updateAnswer)

  const handleUpdate = id => {

     const finalAnswer = {
       name:location.state.name ,
       url:location.state.url,
       description:location.state.description,
       rank: location.state.rank.id,
       challengeId: id,
       answer : updateAnswer
     }
     console.log(finalAnswer)
    ChallengesAPI.updateAnswer(finalAnswer.challengeId, finalAnswer)
    .then(response => {setUpdateAnswer(response.data.answer)
  
  })
    .catch(err => console.log(err))

  }
  console.log(updateAnswer)


  let difficulty = "EASY"
  if(location.state.rank.id > -8 ) {
    difficulty = "HARD"
  }

  return(
    <Container>
      <Col classNameName="col-md-6 challenge-list">
        <div classNameName="card" >
          <div classNameName="card-body">
            <h5 classNameName="card-title">{location.state.name}</h5>
            <h6 classNameName="card-subtitle mb-2 text-muted">{difficulty}</h6>
            <p classNameName="card-text">{location.state.description}</p>
            <Link to="/challenges" classNameName="card-link">Back</Link>
            <a href={location.state.url} target="_blank" rel="noreferrer" classNameName="card-link">CodeWars Link</a>
          </div>
        </div>
      </Col>
      <Col classNameName="col-md-6 editor">
        <AceEditor
          mode="javascript"
          theme="dracula"
          onChange={onChange}
          name="ANSWER_UNIQUE_ID"
          defaultValue ={updateAnswer}
          editorProps={{ $blockScrolling: true }}
        />
        <div className="card" style={{width: "18rem;"}}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">SAVED ANSWER</li>
            <li className="list-group-item save-answer">{location.state.answer}</li>
            <li className="list-group-item update-answer">{updateAnswer}</li>
          </ul>
        </div>
      <Row>
        <Col classNameName="col-md-3 button-container">
          <button type="button" classNameName="btn btn-primary" onClick={()=>{handleUpdate(location.state._id)}}>UPDATE SAVED ANSWER</button>
        </Col>
      </Row>
      </Col>
    </Container>
    )
}

export default SavedChallengeView