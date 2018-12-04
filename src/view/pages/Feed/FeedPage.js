import React, { Component } from 'react';

import * as postsService from '../../../services/postService';


import { PostItem } from './postItem/PostItem';
import { CommentInput } from '../PostPage/CommentInput';


class FeedPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
        }
    }

    loadPosts() {
        postsService.fetchPosts()
            .then(myPosts => {
                this.setState({ posts: myPosts })
            })

    }

    componentDidMount() {
        this.loadPosts()
    }

    render() {
        const { posts } = this.state;

        return (
            <div className="container">

                {
                    posts.map(post =>
                        <PostItem key={post.id} post={post} />)
                }
            </div >
        )
    }
}

export { FeedPage };