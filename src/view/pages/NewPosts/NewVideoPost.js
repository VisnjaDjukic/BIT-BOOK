import React from "react"

const NewVideoPost = () => {
    return (

        <div id="modal1" className="modal">
            <div className="modal-content">
                <h4>New Video Post</h4>
                <div className="input-field col s6">
                    <input placeholder="Input video link" type="text" className="validate" />
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close btn-flat orange">POST</a>
            </div>
        </div>)
}

export { NewVideoPost }
