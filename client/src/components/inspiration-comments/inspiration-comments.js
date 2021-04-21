import React from "react"
import { useAuth0 } from "@auth0/auth0-react";
import Container from "../container/container"
import Row from "../row/row"
import CommentsInput from "../inspiration-input/inspiration-input"
const Comments = () => {


    function handleSubmit (e) {
        e.preventDefault()
        console.log(e.target[0].value)
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