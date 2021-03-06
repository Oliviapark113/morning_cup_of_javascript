import React, {useState} from "react"
import Container from "../components/container/container"
import Marked from "marked"
import DOMPurify from 'dompurify';
import {
  Link,
  useLocation,
  useHistory
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
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

import { FaSave } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
import "./pagesCSS/savedChallengeView.css"
import challengesAPI from "../utils/challengesAPI";

const SavedChallengeView = () => {

  const location = useLocation();
  const [updateAnswer, setUpdateAnswer] = useState(location.state.answer);
  const [likes , setLikes]=useState(location.state.likes)
  const [editorTheme, setEditorTheme] = useState("dracula")
  const history = useHistory()
  const { user } = useAuth0();
  const challengeCode = Marked(location.state.description)
  const cleanChallengeCode = DOMPurify.sanitize(challengeCode );
  const onChange = (newValue) => {
      setUpdateAnswer(newValue)  
  }

  const handleEditorTheme = e => {
    setEditorTheme(e.target.value)
  }

  console.log(location)
  const handleUpdate = id => {
     const finalAnswer = {
       name:location.state.name ,
       url:location.state.url,
       description:location.state.description,
       rank: location.state.rank.id,
       challengeId: id,
       answer : updateAnswer
     }
  
    ChallengesAPI.updateAnswer(finalAnswer.challengeId, finalAnswer)
    .then(response => {
      setUpdateAnswer(response.data.answer)
      history.push("/savedanswerlist")
  })
    .catch(err => console.log(err))
  }

  let difficulty = "EASY"
  if(location.state.rank.id > -8 ) {
    difficulty = "HARD"
  }

  const rankColor = difficulty === "EASY" ? "easy-color" : "hard-color"

  const toggleLikes = () => {
    const userId = user.sub
    //does likes include our userIds? 
    console.log(likes)
    console.log(userId)
   let updatedLikes
       if(likes.includes(userId)){
         //if true ,if true, remove our userId from Likes 
         updatedLikes = likes.filter(id=>id !== userId)
       
       }
      
       else{
        updatedLikes = [...likes, userId] 
          //else , add our userId to array 
       }
       setLikes(updatedLikes)

       challengesAPI.updateAnswer(location.state._id,{likes:updatedLikes })

  }

  return (
    
    <Container className="view-container">
      {/* <pre>{JSON.stringify(likes, null, 2)}</pre> */}
      <Row className="view-row">
        <Col className="col-md-6 challenge-list">
          <div className="card challengeCard" >
            <div className="card-body">
              <h5 className="card-name">{location.state.name}</h5>
              <h6 className={`card-subtitle mb-2 text-muted rank ${rankColor}`}>{difficulty}</h6>
              <div dangerouslySetInnerHTML={{ __html: cleanChallengeCode}} className="card-text" />
              <div className="card-items">
                <button className="link-btn">
                  <Link to="/challenges" className="card-link">Back</Link>
                </button>
                <button className="link-btn">
                  <a href={location.state.url} target="_blank" rel="noreferrer" className="card-link">CodeWars Link</a>
                </button>
                <button className="likes-btn" onClick={toggleLikes}>
                  <BsHeartFill className="likes-icon" /> {likes.length}LIKES
                </button>
              </div>
            </div>
          </div>
        </Col>
        <Col className="col-md-6 editor">
          <Row className="select-row">
            <label htmlFor="theme">Choose a theme:</label>
            <select name="theme" id="theme" onChange={handleEditorTheme}>
              <option value="dracula">dracula</option>
              <option value="dawn">dawn</option>
              <option value="chaos">chaos</option>
              <option value="cobalt">cobalt</option>
              <option value="github">github</option>
              <option value="dreamweaver">dreamweaver</option>
            </select>
            <br></br>
          </Row>
          <Row>
            <AceEditor
              mode="javascript"
              theme={editorTheme}
              onChange={onChange}
              name="ANSWER_UNIQUE_ID"
              defaultValue ={updateAnswer}
              editorProps={{ $blockScrolling: true }}
              width="700px"
              fontSize="18px"
            />
          </Row>
          <Row>
            <Col className="col-md-5 button-container">
              <button type="button" className="update-btn" onClick={()=>{handleUpdate(location.state._id)}}>< FaSave className="save-icon" /> UPDATE</button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

)
}


export default SavedChallengeView