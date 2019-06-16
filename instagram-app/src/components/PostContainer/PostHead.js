import React from 'react';

const PostHead = props => {
    return (
        <div className="postHead">
            <img alt="postHead" src={props.thumbnailURL} />
        
        </div>
        <div>
            {props.username}
        </div>
    );
}






export default PostHead;