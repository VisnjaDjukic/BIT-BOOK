import React, { Component, Fragment } from "react";
import M from 'materialize-css';

import "./NewPost.css"

import { NewImagePost } from "./NewImagePost"
import { NewTextPost } from "./NewTextPost"
import { NewVideoPost } from "./NewVideoPost"

class NewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showButtons: false
        }
    }

    componentDidMount() {
        const elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, null);

    }

    handleClick = () => {
        this.setState((state) => ({
            showButtons: !state.showButtons
        }));
    }

    render() {

        return (
            <Fragment>
                <a className="btn-floating btn-large waves-effect waves-light orange" onClick={this.handleClick} ><i className="material-icons">add_circle</i></a>

                <NewTextPost />
                <NewImagePost />
                <NewVideoPost />
                {
                    this.state.showButtons
                        ? (
                            <div>
                                <a className="btn-floating btn-large waves-effect waves-light red btn modal-trigger" data-target="modal1" ><i className="material-icons">videocam</i></a>
                                <a className="btn-floating btn-large waves-effect waves-light green modal-trigger" data-target="modal2" ><i className="material-icons">image</i></a>
                                <a className="btn-floating btn-large waves-effect waves-light blue modal-trigger" data-target="modal3" ><i className="material-icons">edit</i></a>
                            </div>
                        ) : null
                }

            </Fragment >
        );
    }
}

export { NewPost };
