import React, {useState, useEffect} from "react"
import Container from "../components/container/container"
import ChallengesAPI from "../utils/challengesAPI"
import Row from "../components/row/row"
import Col from "../components/col/col"
import { BsFillTrashFill} from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import "./pagesCSS/savedAnswerList.css"

import {
    useHistory
  } from "react-router-dom";


  const SavedAnswerList = () => {

    const [saveList, setSaveList] = useState([])

    const history = useHistory()
    
    useEffect(()=>{
      getSavedAnswer()
    }, [])

    const getSavedAnswer = () =>{  
 
      ChallengesAPI.getAnswers()
      .then(response=>
       setSaveList(response.data))
      .catch(err => console.log(err))
    }
    
    const handleView = id =>{

     const findSaveList = saveList.find(pickList =>{
        return pickList._id === id
      })
      console.log(findSaveList)
      history.push({
          pathname: "/savedchallengeview",
          state: findSaveList
      })
     
  }
  const handleDelete = id => {
    ChallengesAPI.deleteAnswer(id)
      .then(response => {
        console.log(response)
        getSavedAnswer()
      })
      .catch(err => console.log(err))
  }

    return(
       <Container>
         <Row>
         <Col>
         <h1 className="save-title"><FaSave/> My Saved List</h1>
         </Col>
         </Row>
         <Row>
         {saveList.map(list =>
          
         ( 
         <div key={list._id}>    
               <Row className="save-row">
                 <Col className="col-md-6">
                   <a href={list.url} target="_blank" rel="noreferrer" >{list.name}</a>
                 </Col>     
                 <Col className="col-md-3 challenge">
                   <button className="btn-style" onClick={() => handleView(list._id)}>CHALLENGE</button>
                 </Col>
                 <Col className="col-md-1 delete">
                   <button className="btn-style" onClick={() => handleDelete(list._id)}><BsFillTrashFill className="delete-btn"/></button>
                 </Col>
               </Row>
           </div>
           )
         )}
         </Row>
       </Container>
       
    )

  }


  export default SavedAnswerList;
