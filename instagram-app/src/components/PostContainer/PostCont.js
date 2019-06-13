import React from 'react';
import CommentSection from "./CommentSection";


function PostCont (props) {
    console.log(props)
    return (
    
        <div className="comments">
        {props.instagramData.map(com => {
            return <CommentSection post={com.comments}

        })}

        </div>
    )

}

export default PostCont;