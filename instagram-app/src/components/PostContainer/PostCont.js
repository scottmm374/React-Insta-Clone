import React from 'react';
import Post from './Post';


const PostCont = props => {
    return (
        <div className="postContainer">
            {props.posts.map(post => 
                <Post key={post.imageURL} posts={post} />
            )}

        </div>
    );
}

export default PostCont;