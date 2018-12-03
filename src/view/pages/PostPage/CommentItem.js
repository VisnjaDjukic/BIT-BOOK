import React from 'react';
import './CommentItem.css'

const CommentItem = (props) => {
    const { comment } = props;
    const { body, authorName } = comment;
    return (

        <ul className="collection">
            <li className="collection-item avatar">
                <img src="http://marsrovermanipal.com/team-18/nopic.png" alt="" className="circle no_image" />
                <p className="author_name_comments">{authorName}</p>
                <p>{body}<br />

                </p>
            </li>
        </ul>
    )
}
export { CommentItem }