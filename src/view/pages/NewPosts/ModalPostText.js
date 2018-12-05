import React, { Component, Fragment } from 'react';


class ModalPostText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataInput: ""
        }
    }

    handleInput = (event) => {
        this.setState({
            dataInput: event.target.value
        })
    }

    onSubmitClick = (event) => {
        this.props.handleSubmit(this.state.dataInput)
    }

    render() {
        return (
            <Fragment>
                <h4>New Text Post </h4>
                <input placeholder="Input text..." type="text" onChange={this.handleInput} className="validate" />
                <div>
                    <button onClick={this.props.closeModal} className="btn orange" >Cancel</button>
                    <button onClick={this.onSubmitClick} className="btn orange" >Post</button>
                </div>
            </Fragment>
        );
    }
}

export { ModalPostText }
