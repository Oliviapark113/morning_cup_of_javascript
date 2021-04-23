import React from "react"

const CommentsInput = (props) => {
 
  return  (
        <div>
            <form onSubmit={props.onSubmit}>
                <input id="userComments"></input>
                <label htmlFor="userComments"></label>
                 <button type="submit">Submit</button>
            </form>
        </div>
      )
}

export default CommentsInput