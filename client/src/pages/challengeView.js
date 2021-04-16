import React, {useState, useEffect} from "react"
import Container from "../components/container/container"
import ChallenegsAPI from "../utils/challengesAPI"
import Row from "../components/row/row"
import Col from "../components/col/col"

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";


const ChallengeView = () => {


    // const getChallengeViews = () => {
    //     ChallenegsAPI.getChallengeViews()
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

  return(<Container>
          <AceEditor
    mode="java"
    theme="github"
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
  />
    </Container>)
}

export default ChallengeView