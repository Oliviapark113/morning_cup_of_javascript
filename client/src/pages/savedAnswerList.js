import React, {useState, useEffect} from "react"
import Container from "../components/container/container"
import ChallengesAPI from "../utils/challengesAPI"
import Row from "../components/row/row"
import Col from "../components/col/col"
import { BsFillTrashFill} from "react-icons/bs";
import { FaSave } from "react-icons/fa";
import "./pagesCSS/savedAnswerList.css"
import NotSignedIn from "../components/user-not-signed/user-not-signed"
import { useAuth0 } from "@auth0/auth0-react";
import {
    useHistory
  } from "react-router-dom";


  const SavedAnswerList = () => {
    const { isAuthenticated } = useAuth0();
    const { user } = useAuth0();
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
      <>  {isAuthenticated?
       <Container>
         <Row>
         <Col>
         <h1 className="save-title"><FaSave/> My Saved List</h1>
         </Col>
         </Row>
         <Row>
         {saveList.map(list =>( 
           < div key={list._id}>
{user.sub===list.userId?
         <div >    
               <Row className="save-row">
                 <Col className="col-md-6">
                   <a className="challenge-link" href={list.url} target="_blank" rel="noreferrer" >{list.name}</a>
                 </Col>     
                 <Col className="col-md-3 challenge">
                   <button className="btn-style" onClick={() => handleView(list._id)}>Challenge</button>
                 </Col>
                 <Col className="col-md-1 delete">
                   <button className="btn-style" onClick={() => handleDelete(list._id)}><BsFillTrashFill className="delete-btn"/></button>
                 </Col>
               </Row>
           </div> : null }
           </div>
           )
         )}
         </Row>
       </Container>
       : <NotSignedIn/> }
       </>
    )

  }


  export default SavedAnswerList;
