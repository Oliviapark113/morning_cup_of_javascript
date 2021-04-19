import React from 'react'

function RandomButton(props) {

    return (
        <button {...props}>
            {props.children}
        </button>
    )
}

export default RandomButton