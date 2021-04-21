import React from "react"
// import { useAuth0 } from "@auth0/auth0-react";
// import Col from "../col/col"
// import Row from "../row/row"

const CommentsCard = (props) => {

    console.log(props)
    return (



            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.userName}</h5>

                </div>
            </div>


    )
}

export default CommentsCard

