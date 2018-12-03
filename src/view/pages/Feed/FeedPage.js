import React, { Component } from 'react';

import * as postsService from '../../../services/postService';

import { PostItem } from './postItem/PostItem';
import { NewPost } from '../NewPosts/NewPost';

import { ModalPostText } from '../NewPosts/ModalPostText'
import { ModalPostImage } from '../NewPosts/ModalPostImage'
import { ModalPostVideo } from '../NewPosts/ModalPostVideo'


class FeedPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            textPostModal: false,
            imagePostModal: false,
            videoPostModal: false
        }
    }

    componentDidMount() {
        this.fetchPosts()
    }

    fetchPosts = () => {
        postsService.fetchPosts()
            .then(myPosts => {
                this.setState({ posts: myPosts })
            })
    }

    renderItems = (posts) => {
        const postItems = posts.map((post, index) => {
            return <PostItem key={index} post={post} />
        })
        return postItems
    }

    openModalText = () => {
        this.setState({
            textPostModal: true,
         
        });
    }
    openModalImage = () => {
        this.setState({
            imagePostModal: true,
        });
    }
    openModalVideo = () => {
        this.setState({
            videoPostModal: true
        });
    }

    closeModalText = () => {
        this.setState({
            textPostModal: false,
        });
    }
    closeModalImage = () => {
        this.setState({
            imagePostModal: false,
        });
    }
    closeModalVideo = () => {
        this.setState({
            videoPostModal: false
        });
    }

    updatePosts = () => {
        postsService.fetchPosts()
            .then((posts) => {
                this.setState({
                    posts,
                    textPostModal: false,
                    imagePostModal: false,
                    videoPostModal: false
                })
            })
    }

    render() {
        return (
            <div className="container">
                <NewPost
                    newText={this.openModalText}
                    newImage={this.openModalImage}
                    newVideo={this.openModalVideo} />
                <ModalPostText
                    closeModal={this.closeModalText}
                    textPost={this.state.textPostModal}
                    updatePosts={this.updatePosts}
                />
                <ModalPostImage
                    closeModal={this.closeModalImage}
                    imagePost={this.state.imagePostModal}
                    updatePosts={this.updatePosts}
                />
                <ModalPostVideo
                    closeModal={this.closeModalVideo}
                    videoPost={this.state.videoPostModal}
                    updatePosts={this.updatePosts}
                />
                {this.renderItems(this.state.posts)}
            </div >
        )
    }
}

export { FeedPage };