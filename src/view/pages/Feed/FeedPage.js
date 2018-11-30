import React, { Component } from 'react';

import * as postsService from '../../../services/postService';

import { PostItem } from './postItem/PostItem';

class FeedPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        this.fetchPosts()
    }

    fetchPosts = () => {
        postsService.fetchPosts()
            .then(myPosts => {
                // console.log(myPosts)
                this.setState({ posts: myPosts })
            })
    }

    renderItems = (posts) => {
        const postItems = posts.map((post, index) => {
            return <PostItem key={index} post={post} />
        })
        return postItems
    }

    render() {
        return (
            <div className="container">
                {this.renderItems(this.state.posts)}
            </div >
        )
    }
}

export { FeedPage };