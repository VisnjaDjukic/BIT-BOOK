import React, { Component } from "react"

class NewVideoPost extends Component {
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
        const regex = /watch\?v\=/gi;
        const value = this.state.dataInput.replace(regex, "embed/");
        this.props.createPost(value, "videoUrl");
    }

    render() {
        return (

            <div id="modal1" className="modal" >
                <div className="modal-content">
                    <h4>New Video Post</h4>
                    <div className="input-field col s6">
                        <input placeholder="Input video link" type="text" onChange={this.handleInput} className="validate" />
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" onClick={this.onSubmitClick} className="modal-close btn-flat orange">POST</a>
                </div>
            </div>)
    }
}
export { NewVideoPost }
