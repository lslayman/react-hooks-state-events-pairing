import React, {useState} from "react"

function Votes(){
    let [likeNumber, setLikeNumber] = useState(0);
    let [dislikeNumber, setDislikeNumber] = useState(0);
    
    function handleLikeClick(){
        return(
            setLikeNumber(likeNumber += 1)
        )
    }
    function handleDislikeClick(){
        return(
            setDislikeNumber(dislikeNumber +=1)
        )
    }
    return(
        <div id="votes">
            <button onClick = {handleLikeClick}>{likeNumber}👍</button>
            <button onClick = {handleDislikeClick}>{dislikeNumber}👎</button>
        </div>
    )
}
export default Votes