import React, { Component } from 'react';
import Modal from 'react-modal';

import { postData } from "../../../services/postService"

class ModalPostText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataInput: ""
            // postType:"text",
        }
    }

    handleInput = (event) => {
        this.setState({
            dataInput: event.target.value
        })
    }

    handleSubmit = () => {
        postData(this.state.dataInput, "text")
            .then((response) => {
                if (response === true) {
                    this.props.updatePosts();
                }
            })
    }

    render() {
        return (
            <Modal
                isOpen={this.props.textPost}
                contentLabel="Post new TextPost" center>

                <h4>New Text Post </h4>

                <input placeholder="Input text..." type="text" onChange={this.handleInput} className="validate" />

                <div>
                    <button onClick={this.props.closeModal} className="btn orange" >Cancel</button>
                    <button onClick={this.handleSubmit} className="btn orange" >Post</button>
                </div>
            </Modal>
        );
    }
}

export { ModalPostText }
