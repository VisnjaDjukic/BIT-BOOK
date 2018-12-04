import React, { Component } from 'react';
import Modal from 'react-modal';

import * as postService from '../../../services/postService';


import { PostItem } from './postItem/PostItem';
import { NewPost } from '../NewPosts/NewPost';

import { ModalPostText } from '../NewPosts/ModalPostText'
import { ModalPostImage } from '../NewPosts/ModalPostImage'
import { ModalPostVideo } from '../NewPosts/ModalPostVideo'



class FeedPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false,
            postType: '',
            posts: [],
        }
    }

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts = () => {
        postService.fetchPosts()
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

    closeModal = () => {
        this.setState({
            isModalOpen: false
        })
    }

    updatePosts = () => {
        postService.fetchPosts()
            .then((posts) => {
                this.setState({
                    posts,
                    postType: ""
                })
            })
    }

    showPostForm = (type) => {
        this.setState({ postType: type, isModalOpen: true });
    }

    renderCreationPostForm = () => {
        if (this.state.postType === 'imageUrl') {
            return <ModalPostImage closeModal={this.closeModal} handleSubmit={this.handleSubmit} />;
        } else if (this.state.postType === 'videoUrl') {
            return <ModalPostVideo closeModal={this.closeModal} handleSubmit={this.handleSubmit} />;
        } else {
            return <ModalPostText closeModal={this.closeModal} handleSubmit={this.handleSubmit} />;
        }
    }

    handleSubmit = (dataFromChild) => {
        postService.postData(dataFromChild, this.state.postType)
            .then((response) => {
                if (response === true) {
                    this.updatePosts();
                }
            })
        this.setState({ postType: "", isModalOpen: false });
    }

    render() {
        const { posts } = this.state;

        return (
            <div className="container">
                <NewPost
                    onPostTypeSelected={this.showPostForm} />

                <Modal
                    isOpen={this.state.isModalOpen}
                    contentLabel="Post new Post" center>

                    {this.renderCreationPostForm()}
                </Modal>

                {this.renderItems(this.state.posts)}
            </div >
        )
    }
}

export { FeedPage };