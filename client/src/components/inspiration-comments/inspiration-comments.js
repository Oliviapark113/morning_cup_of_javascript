import React, { useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import Container from "../container/container"
import Row from "../row/row"
import CommentsInput from "../inspiration-input/inspiration-input"
import API from "../../utils/commentsAPI"
import CommentsCard from "../inspiration-card/inspiration-card"
import "./style.css"


const Comments = () => {
    const [comments, setComments] = useState([])
    const { user } = useAuth0();

    useEffect(() => {
        getComments()
    }, [])

    function getComments() {
        API.getComments()
            .then(resp => {
                setComments(resp.data)
            }).catch(err => console.log(err))
    }

    function clearHandler (e) {
        e.preventDefault()
     e.target.reset()
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target[0].value)
        // const date = Date.now().getTime()
        const dataObject = {
            id: user.sub,
            body: e.target[0].value,
            userName: user.nickname,
        }
        // console.log(dataObject)
        API.saveComment(dataObject)
            .then(resp => {
                console.log(resp)
                getComments()
            })
            .then(clearHandler(e))
            .catch(err => console.log(err))
    }

    function handleClick(e) {
        e.preventDefault()
        // console.log(e.target.id)
        API.deleteComment(e.target.id)
        .then(resp => {
            console.log(resp)
            getComments()
        })
        .catch(err => console.log(err))
    }  

    function handleChange(e) {
        e.preventDefault()
        console.log(e.target[0].value)
        console.log(e.target[0].id)
        API.updateComment(e.target[0].id, {body:e.target[0].value}).then(resp => {console.log(resp)
            console.log(e.target.children[1])
            const target = e.target.children[1]
        target.toggleAttribute("disabled")
            getComments()
        })
        .catch(err => console.log(err))


    }

    function handleEdit(e) {
        e.preventDefault()
        const target = e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[0].children[1]
        target.toggleAttribute("disabled")
        e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[0].children[2].classList.toggle("editButton")
    }

    return (
        <Container>
            <Row>
                <CommentsInput
                    onSubmit={handleSubmit} />
            </Row>
            {comments.map((comment) => {
                return <Row key={comment._id}>
                    <CommentsCard
                        {...comment}
                        onClick={handleEdit}
                        onSubmit={handleChange}
                        onClick2={handleClick}
                    />

                </Row>
            })}
        </Container>
    )
}

export default Comments