import React from 'react';


function PostCont (props) {
    console.log("postcont", props)
    return (
        <div className="comments">
            {/* <img alt="postImg  src={props.thumbnailURL}/>*/}
        </div> 
       
        <div>{props.username}</div>
    );

}

export default PostCont;