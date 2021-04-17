import React from 'react'
import "./style.css"


const InspirationCheckboxes = ({...props}) => {

  return (
    <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
    <input type="checkbox" className="btn-check" name="npm" id="btncheck1" {...props} autocomplete="on"/>
    <label class="btn btn-outline-primary" for="btncheck1">npm</label>
  
    <input type="checkbox" className="btn-check" name="api" id="btncheck2" {...props} autocomplete="on"/>
    <label class="btn btn-outline-primary" for="btncheck2">api</label>
  
    <input type="checkbox" className="btn-check" name="framework" id="btncheck3" {...props} autocomplete="on"/>
    <label class="btn btn-outline-primary" for="btncheck3">framework</label>
  </div>
  )
}

export default InspirationCheckboxes