import React, { Component } from 'react';
import * as commentService from '../../../services/commentService';

class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: []
        }
    }

    componentDidMount() {

        const { postId } = this.props

        commentService.fetchComments(postId)
            .then(myComments => {
                console.log(myComments)
                this.setState({ comments: myComments })
            })
    }

    render() {

        const { comments } = this.state;

        if (!comments.length) {
            return <h2>No comments</h2>
        }

        const commentsList = comments.map(comment => {
            return <CommentList comment={comment} />
        })

        return commentsList
    }
}
export { CommentList }