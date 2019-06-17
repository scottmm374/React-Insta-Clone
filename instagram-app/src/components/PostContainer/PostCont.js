import React from 'react';
import Post from './Post';
import './Post.css';



const PostCont = props => {
    console.log("PostCont", props)
    return (
        <div className="postContainer">
            {props.posts.map(post => 
                <Post key={post.imageURL} postCont={post} />
            )}

        </div>
    );
}

export default PostCont;