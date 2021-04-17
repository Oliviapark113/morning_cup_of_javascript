import React from 'react'
import "./style.css"


// deconstruct props and makes the cards for projects
const InspirationResults = ({npm, api,framework}) => {
  // console.log(props.volumeInfo.imageLinks.smallThumbnail)
  // console.log(props.volumeInfo.imageLinks.thumbnail)
// console.log(title)
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Inspiration List</h5>

        {npm==="" ? null :<p className="card-text">npm: {npm}</p>} 
        {api==="" ? null :<p className="card-text">api: {api}</p>}    
        {framework==="" ? null :<p className="card-text">api: {framework}</p>}      
        
        
        
      </div>
    </div>
  )
}

export default InspirationResults