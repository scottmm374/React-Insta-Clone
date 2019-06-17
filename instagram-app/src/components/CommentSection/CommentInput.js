import React from 'react';

const CommentInput = props => {
    console.log("CommentInput", props)
    return (
        <form>
            <input type="text" placeholder="Add a Comment..." />
        </form>
    );
};

export default CommentInput;