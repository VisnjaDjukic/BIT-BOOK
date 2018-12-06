import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';

import * as postService from '../../../services/postService';


import { PostItem } from './postItem/PostItem';

import { NewPost } from '../NewPosts/NewPost';

import { DropDown } from './dropDown/DropDown';

import { ModalPostText } from '../NewPosts/ModalPostText'
import { ModalPostImage } from '../NewPosts/ModalPostImage'
import { ModalPostVideo } from '../NewPosts/ModalPostVideo'
import "./FeedPage.css"

const customStyles = {
    content: {
        width: '500px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class FeedPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false,
            postType: '',
            posts: []
        }
    }


    loadPosts = () => {
        postService.fetchPosts()
    }


    fetchPosts = () => {
        postService.fetchPosts()
            .then(myPosts => {
                this.setState({ posts: myPosts })
            })

    }

    componentDidMount() {

        this.loadPosts()
        this.fetchPosts()
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


    // showPostFilterByType = (type) => {
    //     this.setState({ postType: type });

    //     let postItemsFiltered = this.state.posts.filter((post, i) =>
    //         (post[0].type === this.state.postType) ? post : null);

    //     console.log(postItemsFiltered)
    //     // this.renderItems(postItemsFiltered);
    // }



    render() {
        const { posts } = this.state;

        return (

            <div className="container">


                <DropDown showPost={this.showPostFilterByType} />

                <NewPost
                    onPostTypeSelected={this.showPostForm} />

                <Modal
                    isOpen={this.state.isModalOpen}
                    style={customStyles}
                    contentLabel="Post new Post" center>

                    {this.renderCreationPostForm()}
                </Modal>

                {this.renderItems(posts)}

            </div >
        )
    }
}

export { FeedPage };