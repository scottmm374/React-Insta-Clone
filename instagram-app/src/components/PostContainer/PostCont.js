import React from 'react';


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