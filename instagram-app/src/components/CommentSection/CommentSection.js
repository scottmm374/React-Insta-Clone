import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';



class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        }; 
    }

    render() {
        return (
            <div>
                {this.state.comments.map((com, index) =>
                    <Comment key={index} comment={com} />)}
                   <CommentInput />
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
};

CommentSection.defaultProps = {
    comments: [
    {
        text: "Hello",
        username: "Bob"
    }
    ]
};


export default CommentSection;