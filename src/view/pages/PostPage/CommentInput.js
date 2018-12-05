import React from 'react';

class CommentInput extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            textInput: "",
            disabled: true
        }
    }

    onTextChange = (event) => {

        const disabled = event.target.value.length <= 2

        this.setState({
            disabled,
            textInput: event.target.value,
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        // submit comment
        const commentText = this.state.textInput
        this.props.onSubmit(commentText)
        this.setState({ textInput: "" })
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <form action="">
                                <input type="text" onChange={this.onTextChange} className="materialize-textarea" placeholder="Add your comment" value={this.state.textInput} />
                                <button disabled={this.state.disabled} onClick={this.onSubmitHandler} className="btn waves-effect waves-light" type="submit" name="action">Send
                            <i className="material-icons right"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { CommentInput }