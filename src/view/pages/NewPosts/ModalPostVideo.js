import React, { Component } from 'react';
import Modal from 'react-modal';

import { postData } from "../../../services/postService"

class ModalPostVideo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataInput: "",
            error: ""
            // postType:"text",
        }
    }
    handleInput = (event) => {
        let reg = /(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|[a-zA-Z0-9_\-]+\?v=)([^#\&\?\n<>\'\"]*)/gi;
        if (reg.test(event.target.value)) {
            const regex = /watch\?v\=/gi;
            const value = event.target.value.replace(regex, "embed/");
            this.setState({
                dataInput: value,
                error: ""
            })
        } else {
            this.setState({
                error: "This is not valid video url"
            })
        }
    }

    handleSubmit = () => {
        postData(this.state.dataInput, "videoUrl")
            .then((response) => {
                if (response === true) {
                    this.props.updatePosts();
                }
            })
    }

    render() {
        return (
            <Modal
                isOpen={this.props.videoPost}
                contentLabel="Post new VideoPost" center>

                <h4>New Video Post </h4>

                <input placeholder="Input text..." type="text" onChange={this.handleInput} className="validate" />
                <p>{this.state.error}</p>
                <div>
                    <button onClick={this.props.closeModal} className="btn orange" >Cancel</button>
                    <button onClick={this.handleSubmit} className="btn orange" >Post</button>
                </div>
            </Modal>
        );
    }
}

export { ModalPostVideo }
