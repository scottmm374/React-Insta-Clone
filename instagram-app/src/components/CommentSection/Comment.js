import React from 'react';

const Comment = props => {
    return (
        <div>
            <span className="comment">{props.comment.text}</span>{' '}
            <span className="name">:{props.comment.username}</span>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape ({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;