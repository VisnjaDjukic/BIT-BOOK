import React, { Component } from 'react';
import Modal from 'react-modal';

import { postData } from "../../../services/postService"

class ModalPostImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataInput: "",
            error: ""
            // postType:"text",
        }
    }

    handleInput = (event) => {
        let reg = /^(ftp|http|https):\/\/[^ "]+$/;
        if (reg.test(event.target.value)) {
            this.setState({
                dataInput: event.target.value,
                error:""
            })
        } else {
            this.setState({
                error: "This is not valid image url"
            })
        }
    }

    handleSubmit = () => {
        postData(this.state.dataInput, "imageUrl")
            .then((response) => {
                if (response === true) {
                    this.props.updatePosts();
                }
            })
    }

    render() {
        return (
            <Modal
                isOpen={this.props.imagePost}
                contentLabel="Post new ImagePost" center>

                <h4>New Image Post</h4>

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

export { ModalPostImage }
