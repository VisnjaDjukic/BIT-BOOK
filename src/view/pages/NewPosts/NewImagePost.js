import React from "react"

const NewImagePost = () => {
    return (
        <div id="modal2" className="modal">
            <div className="modal-content">
                <h4>New Image Post</h4>
                <div className="input-field col s6">
                    <input placeholder="Input image URL" type="text" className="validate" />
                </div>
            </div>
            <div className="modal-footer">
                <button href="#!" className="modal-close waves-effect btn-flat orange">Post</button>
            </div>
        </div>
    )
}
export { NewImagePost }