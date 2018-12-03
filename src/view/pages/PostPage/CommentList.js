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

        const { postId } = this.props;

        commentService.fetchComments(postId)
            .then(myComments => {
                // console.log(myComments)
                this.setState({ comments: myComments })
            })
        commentService.createComment({
            "body": this.state,
            "postId": this.state
        })
            .then(commentInfo => {

                this.setState({ newComment: commentInfo })
            })
    }

    render() {
        const { comments } = this.state;

        // console.log("comments", comments);

        if (!comments.length) {
            const isComment = "No comment";
            return (
                <Fragment> <CommentInput />
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

            const commentsList = comments.map(comment => {
                return <CommentItem comment={comment} />
            })
            return (

                <Fragment>
                    <CommentInput />
                    {commentsList}
                </Fragment>
            )
        }
    }
}
export { CommentList }