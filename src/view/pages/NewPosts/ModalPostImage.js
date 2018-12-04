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

    someFn = () => {
        const value = this.state.dataInput
        this.props.callbackFromParent(value);
    }

    render() {
        return (
            <Fragment>
                <h4>New Image Post</h4>

                <input placeholder="Input text..." type="text" onChange={this.handleInput} className="validate" />
                <p>{this.state.error}</p>
            </Fragment>
        );
    }
}

export { ModalPostImage }
