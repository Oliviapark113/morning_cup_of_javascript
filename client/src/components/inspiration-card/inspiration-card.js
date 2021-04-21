import React, {useEffect} from "react"
import { useAuth0 } from "@auth0/auth0-react";
import Col from "../col/col"
import API from "../../utils/commentsAPI"

const CommentsCard = (props) => {

    const { user } = useAuth0();

    console.log(props)
    function handleClick(e) {
        e.preventDefault()
        API.deleteComment(props._id)
        .then(pageRefresh())
        .catch(err => console.log(err))
    }  

    const pageRefresh = () => window.location.reload(true)
    
    function handleEdit (e) {
        e.preventDefault()
        // console.log(e)
        const target = document.getElementById(props._id)
        // console.log(target)
        target.removeAttribute("disabled")
    }
    return (
<>
<Col className="col-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.userName}</h5>
                    {user.sub===props.id?<button onClick={handleEdit}>{'\u270E'}</button>:null}
                    {user.sub===props.id?<button onClick={handleClick}>{'\u2715'}</button>:null}
                </div>
            </div>
</Col>
<Col className="col-10">
<div className="card">
                <div className="card-body">
                    <p>{props.date.split('T')[0]}</p>
                    <input type="text" value={props.body} id={props._id} disabled></input>

                </div>
            </div>
</Col>
</>

    )
}

export default CommentsCard

