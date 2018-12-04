import React, { Component, Fragment } from "react";

import "./NewPost.css"

class NewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showButtons: false,
        }
    }

    handleClick = () => {
        this.setState((state) => ({
            showButtons: !state.showButtons
        }));
    }

    render() {
        const { onPostTypeSelected } = this.props;

        return (
            <Fragment>
                <a className="btn-floating btn-large waves-effect waves-light orange" onClick={this.handleClick} ><i className="material-icons">add_circle</i></a>
                {
                    this.state.showButtons
                        ? (
                            <div>
                                <a className="btn-floating btn-large waves-effect waves-light red btn" onClick={() => onPostTypeSelected('videoUrl')}> <i className="material-icons">videocam</i></a>
                                <a className="btn-floating btn-large waves-effect waves-light green" onClick={() => onPostTypeSelected('imageUrl')}><i className="material-icons">image</i></a>
                                <a className="btn-floating btn-large waves-effect waves-light blue" onClick={() => onPostTypeSelected('text')}><i className="material-icons">edit</i></a>
                            </div>
                        ) : null
                }
            </Fragment >
        );
    }
}

export { NewPost };
