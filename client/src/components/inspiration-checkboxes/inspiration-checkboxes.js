import React from 'react'
import "./style.css"



const InspirationCheckboxes = (props) => {

  return (
    <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
    <input type="checkbox" defaultChecked="checked" className="btn-check inscheck" name="npm" id="btncheck1" {...props} />
    <label className=" inscheck" htmlFor="btncheck1">npm</label>
  
    <input type="checkbox" defaultChecked="checked" className="btn-check inscheck" name="api" id="btncheck2" {...props}/>
    <label className=" inscheck" htmlFor="btncheck2">api</label>
  
    <input type="checkbox" defaultChecked="checked" className="btn-check inscheck" name="framework" id="btncheck3" {...props}/>
    <label className="  inscheck" htmlFor="btncheck3">framework</label>

  </div>
  )
}

export default InspirationCheckboxes