import React, {useState} from "react"
import Comments from "./Comments"
import Votes from "./Votes"

function Header({video}){
    const [visible, setVisible] = useState(false);
    
    let count = 0;
    const displayComments = video.comments.map((comment) => {
        count++;
            return(       
                <Comments id={comment.id} key={comment.id} user={comment.user} comment={comment.comment} />
            )})

    return (
        <div>
            <h1>{video.title}</h1>
            <p>{video.views} views | Uploaded {video.createdAt}</p>
            <Votes />
            <div>
                <button onClick={() => setVisible(!visible)}>{visible ? 'Hide Comments' : 'Show Comments'}</button>
                {visible && <div id="commentsection">
                <h2>{count} Comments</h2>
                {displayComments}</div>}
            </div>
        </div>
    )
}

export default Header