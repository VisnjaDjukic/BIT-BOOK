import React, { Component } from 'react';
import * as commentService from '../../../services/commentService';
import { CommentItem } from './CommentItem';

class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: []
        }
    }

    componentDidMount() {

        const { postId } = this.props;

        commentService.fetchComments(postId)
            .then(myComments => {
                // console.log(myComments)
                this.setState({ comments: myComments })
            })
    }

    render() {

        const { comments } = this.state;

        console.log("comments", comments);

        if (!comments.length) {
            const isComment = "No comment";
            return (
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
            )
        } else {

            const commentsList = comments.map(comment => {
                return <CommentItem comment={comment} />
            })
            return commentsList;
        }
    }
}
export { CommentList }