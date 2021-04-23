import React, {useState, useEffect} from "react"
import Container from "../components/container/container"
import ChallengesAPI from "../utils/challengesAPI"
import Row from "../components/row/row"
import Col from "../components/col/col"
import { BsFillTrashFill, BsFillArchiveFill} from "react-icons/bs";
import "./pagesCSS/savedAnswerList.css"

import {
    Link,
    useLocation,
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
    
    console.log(saveList)

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
    const findDeleteList = saveList.find(deleteList => {
      return deleteList._id === id
    })
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
         <h1 className="save-title"><BsFillArchiveFill /> My Saved List</h1>
         </Col>
         </Row>
         <Row>
         {saveList.map(list =>
          
         ( 
         <>    
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
           </>
           )
         )}
         </Row>
       </Container>
       
    )

  }


  export default SavedAnswerList;
