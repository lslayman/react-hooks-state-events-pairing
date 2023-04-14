import React from "react"
import Votes from "./Votes"
function Comments({id, key, user, comment}){
    
    return (
        <li key= {id} id={id}>
            <h3>{user}</h3>
            <p>{comment}</p>
            <Votes />
            <button id="remove">Remove Comment</button>
        </li>
    )
    
}

export default Comments