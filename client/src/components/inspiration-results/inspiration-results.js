import React from 'react'
import "./style.css"



const InspirationResults = ({ npm, api, framework, apiLink, frameworkLink,npmLink }) => {


  return (
    <div className="inspMeResult">
      <div className="">
        <h3 className="inspMeTitle">Inspiration List</h3>

        {npm==="" ? null :       <p className="inspRes">NPM: {npm}
        <a target="_blank" className="inspResButton" href={npmLink} rel="noreferrer" >Link</a></p>} 
        {api==="" ? null :       <p className="inspRes">API: {api}
          <a target="_blank" className="inspResButton" href={apiLink} rel="noreferrer" >Link</a></p>}    
        {framework==="" ? null : <p className="inspRes">Framework: {framework}
          <a href={frameworkLink} className="inspResButton" target="_blank" rel="noreferrer" >Link</a></p>}    
      </div>
    </div>
  )
}

export default InspirationResults