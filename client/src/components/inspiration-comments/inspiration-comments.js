import React from "react"
import { useAuth0 } from "@auth0/auth0-react";
import Container from "../container/container"
import Row from "../row/row"
import CommentsInput from "../inspiration-input/inspiration-input"
import API from "../../utils/commentsAPI"



const Comments = () => {

    const { user } = useAuth0();

    function handleSubmit (e) {
        e.preventDefault()
        console.log(e.target[0].value)
        const dataObject = {
            id: user.sub,
            body: e.target[0].value,
            userName: user.nickname
        }
        // console.log(dataObject)
API.saveComment(dataObject)
.then(resp=>console.log(resp))
.catch(err=>console.log(err))
    }


  return  (
      <Container>
<Row>
<CommentsInput
onSubmit={handleSubmit}/>
</Row>
<Row>
    hello
</Row>
      </Container>
      )
}

export default Comments