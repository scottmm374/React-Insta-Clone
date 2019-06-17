import React from 'react';
import './Post.css';

// Post images and username

const PostHead = props => {
    console.log("PostCont", props)
    return (
        <div className="postHeader">
            <div className="postThumbWrap">
            <img alt="postHead" src={props.thumbnailUrl} className="postThumb"/>
        
        </div>
        <div>
            {props.username}
        </div>
        </div>
    );
}


export default PostHead;