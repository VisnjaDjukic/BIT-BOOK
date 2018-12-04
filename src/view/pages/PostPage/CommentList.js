import React, { Component, Fragment } from 'react';
import * as commentService from '../../../services/commentService';
import { CommentItem } from './CommentItem';
import { CommentInput } from './CommentInput'

class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: [],
            newComment: {}
        }
    }

    componentDidMount() {
        this.loadComments()
    }

    loadComments() {
        const { postId } = this.props;

        commentService.fetchComments(postId)
            .then(myComments => {
                // console.log(myComments)
                this.setState({ comments: myComments })
            })
    }

    submitComment = (commentText) => {
        const { postId } = this.props;

        const body = {
            "body": commentText,
            "postId": postId
        }

        console.log("body", body);

        commentService.createComment(body)
            .then(() => {
                this.loadComments()
            })
    }

    render() {
        const { comments } = this.state;

        // console.log("comments", comments);

        if (!comments.length) {
            const isComment = "No comment";
            return (
                <Fragment>
                    <CommentInput onSubmit={this.submitComment} />
                    <div className="row">
                        <div className="col s12 m12" >
                            <div className="card" >
                                <div className="card-content">
                                    {isComment}
                                </div>
                                <div className="card-action">
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        } else {

            const commentsList = comments.map((comment, id) => {
                return <CommentItem key={id} comment={comment} />
            })
            return (

                <Fragment>
                    <CommentInput onSubmit={this.submitComment} />
                    {commentsList}
                </Fragment>
            )
        }
    }
}
export { CommentList }