import React from 'react'
import "./style.css"



const InspirationResults = ({ npm, api, framework, apiLink, frameworkLink,npmLink }) => {


  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Inspiration List</h5>
        <p className="card-text">npm: {npm}
        <a target="_blank" href={npmLink} rel="noreferrer" >Link</a></p>
        <p className="card-text">api: {api}
          <a target="_blank" href={apiLink} rel="noreferrer" >Link</a></p>
        <p className="card-text">framework: {framework}
          <a href={frameworkLink} target="_blank" rel="noreferrer" >Link</a></p>
        {/* {npm==="" ? null :<p className="card-text">npm: {npm}</p>} 
        {api==="" ? null :<p className="card-text">api: {api}</p>}    
        {framework==="" ? null :<p className="card-text">api: {framework}</p>}       */}
      </div>
    </div>
  )
}

export default InspirationResults