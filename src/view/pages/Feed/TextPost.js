import React from 'react';

const TextPost = (props) => {
    const { text } = props;
    return (

        <div className="card-content">
            <p>{text}</p>
        </div>
    )
}

export { TextPost }