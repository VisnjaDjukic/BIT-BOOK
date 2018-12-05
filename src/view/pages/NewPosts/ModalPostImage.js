import React, { Component, Fragment } from 'react';


class ModalPostImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataInput: "",
            error: ""
        }
    }

    handleInput = (event) => {
        let reg = /^(ftp|http|https):\/\/[^ "]+$/;
        if (reg.test(event.target.value)) {
            this.setState({
                dataInput: event.target.value,
                error: ""
            })
        } else {
            this.setState({
                error: "This is not valid image url"
            })
        }
    }

    onSubmitClick = (event) => {
        this.props.handleSubmit(this.state.dataInput)
    }

    render() {
        return (
            <Fragment>
                <h4>New Image Post</h4>

                <input placeholder="Input text..." type="text" onChange={this.handleInput} className="validate" />
                <p>{this.state.error}</p>
                <div>
                    <button onClick={this.onSubmitClick} className="btn orange" >Post</button>
                    <button onClick={this.props.closeModal} className="btn orange" >Cancel</button>
                </div>
            </Fragment>
        );
    }
}

export { ModalPostImage }
