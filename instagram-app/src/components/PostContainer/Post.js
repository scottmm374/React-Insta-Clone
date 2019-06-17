import React from 'react';
import PostHead from './PostHead';
import CommentSection from '../CommentSection/CommentSection';
import './Post.css';

const Post = props => {
    console.log("Post", props)
    return(
        <div>
            <PostHead 
                username={props.postCont.username}
                thumbnailImg={props.postCont.thumbnailUrl} />
            <div className="imgContainer">
                <img alt="thumbnail"  className="postImg" src={props.postCont.imageUrl}/>
            </div>
            <CommentSection comments={props.postCont.comments} />
        </div>
    )
}

export default Post;