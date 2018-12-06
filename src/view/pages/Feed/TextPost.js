import React from 'react';
// import { Link } from 'react-router-dom';

const TextPost = (props) => {
    const { text } = props;
    console.log("text:", text);

    return (

        <div className="card-content">
           <p>{text}</p>
        </div>
    )
}

export { TextPost }