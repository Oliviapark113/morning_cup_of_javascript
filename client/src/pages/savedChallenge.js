import React, {useState, useEffect} from "react"
import Container from "../components/container/container"
// import Row from "../row/row"
// import Col from "../col/col"

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";


const savedChallenge = () => {


    function onChange(newValue) {
        console.log("change", newValue);
      }

    // const [savedChallenges, setSavedChallenges] = useState([])

    // const getSavedChallenges = () => {
    //     ChallenegsAPI.getSavedChallenges()
    //     .then(storedChallenge => {
    //         setSavedChallenges(storedChallenge.data)
    //     })
    // }

    // useEffect(()=>{
    //     getSavedChallenges()
    // }, [])

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

export default savedChallenge