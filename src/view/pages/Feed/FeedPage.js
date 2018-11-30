import React, { Component } from 'react';

import * as postsService from '../../../services/postService';


import { PostItem } from './postItem/PostItem';


class FeedPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        postsService.fetchPosts()
            .then(myPosts => {
                this.setState({ posts: myPosts })
            })
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