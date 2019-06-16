import React from 'react';
import PostCont from "./PostCont";


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }

    render () {
        return (
            <div>
                {}
            </div>
        )
    }

}


export CommentSection;