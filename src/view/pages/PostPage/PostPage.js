import React, { Component } from 'react';

import * as commentService from '../../../services/commentService';
import { CommentList } from './CommentList';





class PostPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        this.fetchComments()
    }

    fetchComments = () => {
        const postId = this.props.match.params.id;

        commentService.fetchComments(postId)
            .then(myComments => {
                console.log(myComments)
                this.setState({ comments: myComments })
            })
    }

    render() {
        const { comments } = this.state;

        return (

            <div className="container">
                {comments.map(comment => {
                    return <CommentList comment={comment} />
                })}
            </div>
        )
        // this.props.match.params.id;
    }
}

export { PostPage };