import React, {useState, useReducer} from "react"
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
import "ace-builds/src-noconflict/theme-dawn";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-dreamweaver";
import ChallengesAPI from "../utils/challengesAPI";
import { useAuth0 } from "@auth0/auth0-react";
import { BsFillHeartFill, BsFillArchiveFill } from "react-icons/bs";



const ChallengeView = () => {

  const [saveAnswer, setSaveAnswer] = useState([])

  const [count , dispatch] = useReducer((state, action)=>{
    console.log("action", action)
    console.log("state", state)
    if(action === "add"){
      return state +1 ;
    }
  },0)

  const [editorTheme , setEditorTheme]=useState("dracula")

  const history = useHistory()

  const location = useLocation();
  console.log(location)

  const { user } = useAuth0();
  const onChange = (newValue) => {
 
      setSaveAnswer(newValue)
     
  }

  const handleEditorTheme = e => {
    setEditorTheme(e.target.value)
  }


  const handleSave = id => {
     const findAnswer = {
       name:location.state.name ,
       url:location.state.url,
       description:location.state.description,
       rank: location.state.rank.id,
       challengeId: id,
       answer : saveAnswer,
       userId: user.sub
      
     }
    ChallengesAPI.saveAnswer(findAnswer)
    .then(response => { 
      console.log(response)
      setSaveAnswer(response.data)
      history.push("./savedanswerlist")
  })
    .catch(err => console.log(err))

  }
  console.log(saveAnswer)


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
            <button className = "btn btn-danger" onClick={()=>dispatch("add")}> <BsFillHeartFill /> </button> {count} Likes
          </div>
        </div>
          <label for="theme">Choose a theme:</label>
          <select name="theme" id="theme" onChange= {handleEditorTheme}>
            <option value="dracula">dracula</option>
            <option value="dawn">dawn</option>
            <option value="chaos">chaos</option>
            <option value="cobalt">cobalt</option>
            <option value="github">github</option>
            <option value="dreamweaver">dreamweaver</option>
          </select>
          <br></br>
           

      </Col>
      <Col className="col-md-6 editor">
        <AceEditor
          mode="javascript"
          theme={editorTheme}
          onChange={onChange}
          name="ANSWER_UNIQUE_ID"
          editorProps={{ $blockScrolling: true }}
        />
      <Row>
        <Col className="col-md-3 button-container">
          <button type="button" className="btn btn-primary" onClick={()=>{handleSave(location.state.id)}}><BsFillArchiveFill></BsFillArchiveFill> SAVE </button>
        </Col>
      </Row>
      </Col>
    </Container>
    )
}

export default ChallengeView