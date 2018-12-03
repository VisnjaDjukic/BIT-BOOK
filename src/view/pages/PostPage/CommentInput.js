import React from 'react';

const CommentInput = () => {

    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="textarea2" className="materialize-textarea" placeholder="Add your comment" data-length="20"></textarea>
                        <label for="textarea2" ></label>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Send
                        <i className="material-icons right"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export { CommentInput }