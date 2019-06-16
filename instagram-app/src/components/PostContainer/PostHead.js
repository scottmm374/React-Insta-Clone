import React from 'react';

// Post images and username

const PostHead = props => {
    console.log("PostCont", props)
    return (
        <div className="postHeader">
            <div>
            <img alt="postHead" src={props.thumbnailURL} />
        
        </div>
        <div>
            {props.username}
        </div>
        </div>
    );
}


export default PostHead;