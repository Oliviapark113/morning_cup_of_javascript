import React from "react"

const CommentsInput = (props) => {
 
  return  (
        <div className='inspResult'>
            <form onSubmit={props.onSubmit}>
              <h3 className="inspMeTitle">Made something? Found something? Tell us about your adventure:</h3>
                <textarea className='form-control' id="userComments"/>
                <label htmlFor="userComments"></label>
                 <button className='inspMeButton' type="submit">Submit</button>
            </form>
        </div>
      )
}

export default CommentsInput