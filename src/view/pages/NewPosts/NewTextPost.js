import React, { Component } from "react"

import { fetchInputData } from "../../../services/postService"

class NewTextPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataInput: ""
        }
    }
    handleInput = (event) => {
        this.setState({
            dataInput: event.target.value
        })
    }
    handleSubmit = () => {

        const value = "/TextPosts/" + this.state.dataInput;
        const postType = "text";

        fetchInputData(value, postType)
            .then((response) => {
                console.log(response);
            })


        // resetText = () => {
        //     this.setState({
        //         dataInput: ""
        //     })
        // }
    }

    render() {
        return (
            <div id="modal3" className="modal"  >
                <div className="modal-content">
                    <h4>New Text Post </h4>
                    <div className="input-field col s6">
                        <input placeholder="Input text..." type="text" value={this.state.dataInput} onChange={this.handleInput} className="validate" />
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" onClick={this.handleSubmit} className="modal-close waves-effect btn-flat orange">Post</a>
                </div>
            </div>
        )
    }
}

export { NewTextPost }