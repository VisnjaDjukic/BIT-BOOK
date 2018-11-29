import React from "react"

const NewTextPost = () => {
    return (
        <div id="modal3" className="modal">
            <div className="modal-content">
                <h4>New Text Post</h4>
                <div className="input-field col s6">
                    <input placeholder="Input text..." type="text" className="validate" />
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect btn-flat orange">Post</a>
            </div>
        </div>
    )
}
export { NewTextPost }