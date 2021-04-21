import React from "react"
import { useAuth0 } from "@auth0/auth0-react";

const CommentsInput = (props) => {
 
function clearHandler (e) {
    e.preventDefault()
 e.target.form[0].value = null
}
    console.log(props.onSubmit)


  return  (
        <div>
            <form onSubmit={props.onSubmit}>
                <input id="userComments"></input>
                <label htmlFor="userComments"></label>
                 <button onClick={clearHandler}>Clear</button>
                 <button type="submit">Submit</button>
            </form>
        </div>
      )
}

export default CommentsInput