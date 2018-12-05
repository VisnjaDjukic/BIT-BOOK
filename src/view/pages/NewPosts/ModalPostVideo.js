import React, { Component, Fragment } from 'react';


class ModalPostVideo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataInput: "",
            error: ""
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

    onSubmitClick = (event) => {
        this.props.handleSubmit(this.state.dataInput)
    }

    render() {
        return (
            <Fragment>
                <h4>New Video Post </h4>
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

export { ModalPostVideo }
