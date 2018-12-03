import React, { Component } from 'react';
import Modal from 'react-modal';

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
            isModalOpen: false,
            postType: '',
            posts: [],
        }
    }

    componentDidMount() {
        this.fetchPosts();
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

    closeModal = () => {
        this.setState({
            isModalOpen: false
        })
    }

    // updatePosts = () => {
    //     postsService.fetchPosts()
    //         .then((posts) => {
    //             this.setState({
    //                 posts,
    //                 textPostModal: false,
    //                 imagePostModal: false,
    //                 videoPostModal: false
    //             })
    //         })
    // }

    renderCreationPostForm = () => {
        if (this.state.postType === 'image') {
            return <ModalPostImage closeModal={this.closeModal} />;
        } else if (this.state.postType === 'video') {
            return <ModalPostVideo />;
        } else {
            return <ModalPostText />;
        }
    }

    showPostForm = (type) => {
        this.setState({ postType: type, isModalOpen: true });
    }

    render() {
        return (
            <div className="container">
                <NewPost
                    onPostTypeSelected={this.showPostForm} />

                <Modal
                    isOpen={this.state.isModalOpen}
                    contentLabel="Post new Post" center
                >
                    {this.renderCreationPostForm()}
                </Modal>

                {this.renderItems(this.state.posts)}
            </div >
        )
    }
}

export { FeedPage };