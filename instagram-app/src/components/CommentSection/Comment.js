import React from 'react';

const Comment = props => {
    return (
        <div>
            <span className="comment">{props.comment.text}</span>{' '}
            <span className="name">:{props.comment.username}</span>
        </div>
    )
}