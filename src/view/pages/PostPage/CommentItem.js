import React from 'react';
import './CommentItem.css'

const CommentItem = (props) => {
    const { comment } = props;
    const { body, authorName } = comment;
    return (

        <ul class="collection">
            <li class="collection-item avatar">
                <img src="http://marsrovermanipal.com/team-18/nopic.png" alt="" class="circle no_image" />
                <p class="author_name_comments">{authorName}</p>
                <p>{body}<br />

                </p>
            </li>
        </ul>
    )
}
export { CommentItem }