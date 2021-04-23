import React from "react"
import { useAuth0 } from "@auth0/auth0-react";
import Col from "../col/col"
import styled from 'styled-components'


const CommentsCard = (props) => {
    const { user } = useAuth0();
    let StyleTextArea = styled.textarea`
    height: 100fpx;
    `

    // console.log(props.body.length)
    if (props.body.length >= 500) {
        StyleTextArea = styled.textarea`
        height: 200px;
        `
    }
    else if (props.body.length >= 400) {
        StyleTextArea = styled.textarea`
        height: 150px;
        `
    }
    else if (props.body.length >= 300) {
        StyleTextArea = styled.textarea`
        height: 125px;
        `
    }

    return (
        <>
            <Col className="col-2">
                <div className="card inspComment">
                    <div className="card-body">
                        <h5 className="card-title">{props.userName}</h5>
                        {user.sub === props.id ? <button className='commentBtn' onClick={props.onClick}>{'\u270E'}</button> : null}
                        {user.sub === props.id ? <button className='commentBtn' id={props._id} onClick={props.onClick2} >{'\u2715'}</button> : null}
                    </div>
                </div>
            </Col>
            <Col className="col-10">
                <div className="card">
                    <form className="card-body inspComment" onSubmit={props.onSubmit}>
                        <p>{props.date}</p>
                        <StyleTextArea className='form-control' type="text" id={props._id} placeholder={props.body} disabled />
                        <button type="submit" className="editButton editButton2">OK</button>

                    </form>
                </div>
            </Col>
        </>

    )
}

export default CommentsCard

