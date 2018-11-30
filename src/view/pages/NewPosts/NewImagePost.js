import React, { Component } from "react"

class NewImagePost extends Component {

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
        this.props.createPost(this.state.dataInput, "imageUrl");
    }

    render() {
        return (
            <div id="modal2" className="modal" >
                <div className="modal-content">
                    <h4>New Image Post</h4>
                    <div className="input-field col s6">
                        <input placeholder="Input image URL" type="text" onChange={this.handleInput} className="validate" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button href="#!" onClick={this.onSubmitClick} className="modal-close waves-effect btn-flat orange">Post</button>
                </div>
            </div>
        )
    }
}
export { NewImagePost }