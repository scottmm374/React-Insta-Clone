import React from 'react';
import Post from './Post';


const PostCont = props => {
    return (
        <div className="postContainer">
            {props.instagramData.map(post => 
                <Post key={post.imageURL} instagramData={post} />
            )}

        </div>
    );
}

export default PostCont;