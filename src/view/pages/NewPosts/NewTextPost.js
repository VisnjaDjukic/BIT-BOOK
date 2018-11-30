import React, { Component } from "react"


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


    onSubmitClick = () => {

        this.props.createPost(this.state.dataInput, "text");
    }



    render() {
        return (
            <div id="modal3" className="modal"  >
                <div className="modal-content">
                    <h4>New Text Post </h4>
                    <div className="input-field col s6">
                        <input placeholder="Input text..." type="text" onChange={this.handleInput} className="validate" />
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" onClick={this.onSubmitClick} className="modal-close waves-effect btn-flat orange">Post</a>
                </div>
            </div>
        )
    }
}

export { NewTextPost }