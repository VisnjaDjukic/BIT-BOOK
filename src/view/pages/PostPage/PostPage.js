import React, { Component } from 'react';

import { CommentList } from './CommentList';
import * as postService from '../../../services/postService';
import { ImagePost } from '../Feed/ImagePost';

class PostPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: null,
            comments: []
        }
    }

    componentDidMount() {
        this.fetchComments()
    }

    fetchComments = () => {
        const { postId, postType } = this.props.match.params;

        postService.fetchSinglePost(postId, postType)
            .then(post => {
                this.setState({
                    post
                })
            })
    }

    render() {
        const { post } = this.state;

        if (!post) {
            return <p>Loading...</p>
        }

        return (
            <div className="container">

                {/* POST image, video , text */}
                {/* <ImagePost src={post.imageUrl} /> */}
                {/* Comments */}
                <CommentList postId={post.id} />
            </div>
        )
    }
}

export { PostPage };