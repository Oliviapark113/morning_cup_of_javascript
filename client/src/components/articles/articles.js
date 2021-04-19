import React from 'react'
import "./style.css"


// deconstruct props and makes the cards for projects
const Article = (
  {title, img, author, desc, content, src, link}
  ) => {
// console.log(content)
const image = <img src={img} className="img-fluid img" alt={title}/>
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {img==="" ? null :image }   
        {author==="" ? null :<p className="card-text">Author: {author}</p>} 
        {desc==="" ? null :<p className="card-text">Description: {desc}</p>}    
        {content==="" ? null :<p className="card-text">Description: {content}</p>}      
        
        <a href={link} target="_blank" rel="noreferrer" className="btn btn-primary">Link to Article at {src}</a>
      </div>
    </div>
  )
}

export default Article