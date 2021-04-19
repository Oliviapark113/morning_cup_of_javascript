import React, {useState, useEffect} from "react"
import Container from "../components/container/container"
import ChallengesAPI from "../utils/challengesAPI"
import Row from "../components/row/row"
import Col from "../components/col/col"

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

    return(
       <Container>
         <Row>
         <Col>
         <h1>My Saved List</h1>
         </Col>
         </Row>
         <Row>
         {saveList.map(list =>
          
         ( 
         <>
         <Col className="col-md-8">
             <a href={list.url}>{list.name}</a>
             <button>DELETE</button>
           </Col>
           <Col className="col-md-4">
             <button onClick={()=>handleView(list._id)}>CHALLENGE</button>
           </Col>
           </>
           )
         )}
         </Row>
       </Container>
       
    )

  }


  export default SavedAnswerList;
