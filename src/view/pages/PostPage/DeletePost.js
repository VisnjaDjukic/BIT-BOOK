import React, { Component } from 'react';
import {deletePost} from '../../../services/postService.js'

class DeletePost extends Component {
    constructor(props) {
        super(props)
    this.state = {
            id: this.props.id
    }
}

deleteMyPost = () =>
    { 
    deletePost(this.state.id);
    window.history.back();
}

render() {
    return(
    <button className="btn waves-effect waves-light" type="button" onClick = {this.deleteMyPost}> Delete Post
    < i className = "material-icons right" ></i >
    </button >)
}
}

export {DeletePost}
