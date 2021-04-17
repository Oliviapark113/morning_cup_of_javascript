import React, {useState, useEffect} from "react"
import Container from "../components/container/container"

import {

  useLocation
} from "react-router-dom";
import ChallengesAPI from "../utils/challengesAPI"
import Row from "../components/row/row"
import Col from "../components/col/col"

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";



const ChallengeView = () => {

  const location = useLocation();
  console.log(location)
     
  // const [viewChallenges, setViewChallenges] = useState({})


    // const getChallengeViews = () => {
    //     ChallengesAPI.getChallengeView()
    //     .then(challenge => {
    //       console.log(challenge)
          
    //     })
    // }

    // useEffect(()=>{
    //     getChallengeViews()
    // }, [])

  const onChange = (newValue) => {
      console.log("change", newValue);
    }

  return(
    <Container className="hide">
      <Col className="col-md-6 challenge-list">
            challenge
          </Col>
      <Col className="col-md-6 editor">
        <AceEditor
          mode="java"
          theme="github"
          onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
        />
      </Col>
    </Container>
    )
}

export default ChallengeView