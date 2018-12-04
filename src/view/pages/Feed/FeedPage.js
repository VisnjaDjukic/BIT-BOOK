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

    renderCreationPostForm = () => {
        if (this.state.postType === 'image') {
            return <ModalPostImage />;
        } else if (this.state.postType === 'video') {
            return <ModalPostVideo />;
        } else {
            return <ModalPostText />;
        }
    }

    showPostForm = (type) => {
        this.setState({ postType: type, isModalOpen: true });
    }

    // handleSubmit = (value) => {
    //     postService.postData(value, this.state.postType)
    //         .then((response) => {
    //             if (response === true) {
    //                 this.updatePosts();
    //             }
    //         })
    // }

    myCallBack = (dataFromChild) => {
        postService.postData(dataFromChild, this.state.postType)
            .then((response) => {
                if (response === true) {
                    this.updatePosts();
                }
            })
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
                    <div>
                        <button onClick={this.closeModal} className="btn orange" >Cancel</button>
                        <button onClick={this.callbackFromParent} callbackFromParent={this.myCallBack} className="btn orange" >Post</button>
                    </div>
                </Modal>

                {this.renderItems(this.state.posts)}
            </div >
        )
    }
}

export { FeedPage };