import React from 'react'
import "./style.css"
import { SiCoffeescript } from "react-icons/si";

// deconstruct props and makes the cards for projects
const Article = (
  {title, img, author, desc, content, src, link, onClick}
  ) => {
// console.log(content)
const image = <img src={img} className="img-fluid img altImage" alt={title}/>
  return (
    <div className="card articleCard">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {img==="" ? <SiCoffeescript className="standardImg img-fluid img" /> :image }   
        {author==="" ? null :<p className="card-text">Author: {author}</p>} 
        {desc==="" ? null :<p className="card-text">Description: {desc}</p>}    
        {content==="" ? null :<p className="card-text articleReadMore">{content}</p>}   
        {content==="" ? null : <button onClick={onClick} className="btn btn-primary articlebtn">Read More</button>}   
       
        <a href={link} target="_blank" rel="noreferrer" className="btn btn-primary articlebtn">Link to Article at {src}</a>
      </div>
    </div>
  )
}

export default Article