import React from 'react';


const CommentItem = (props) => {
    const { comment } = props;
    const { body } = comment;
    return (
        <div className="row">
            <div className="col s12 m12" >
                <div className="card" >
                    <div className="card-content">
                        {body}
                    </div>
                    <div className="card-action">

                    </div>
                </div>
            </div>
        </div>

    )
}
export { CommentItem }