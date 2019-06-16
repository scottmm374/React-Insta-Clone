import React from 'react';
import PostHead from './PostHead';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return(
        <div>
            <PostHead 
                name={props.post.username}
                thumbnail={props.post.thumbnailURL} />
            <div className="postImg">
                <img alt="thumbnail" src={props.post.imageURL} />
            </div>
            <CommentSection comments={props.post.comments} />
        </div>
    )
}

export default Post;