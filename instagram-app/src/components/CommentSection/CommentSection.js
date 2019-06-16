import React from 'react';
import PostCont from "./PostCont";
import Comment from './Comment';



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


export default CommentSection;