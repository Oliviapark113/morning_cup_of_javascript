import React from "react"
// import { useAuth0 } from "@auth0/auth0-react";
import Col from "../col/col"
// import Row from "../row/row"

const CommentsCard = (props) => {

    console.log(props)
    return (

<>
<Col className="col-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.userName}</h5>

                </div>
            </div>
</Col>
<Col className="col-10">
<div className="card">
                <div className="card-body">
                    <p>{props.date}</p>
                    <input type="text" value={props.body} disabled></input>

                </div>
            </div>
</Col>
</>

    )
}

export default CommentsCard

