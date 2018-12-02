import React from 'react';
// import { Link } from 'react-router-dom';


const ImagePost = (props) => {
    const { src, postId, type } = props;
    return (

        <div className="card-content">
           <img alt="" className="responsive-img" src={src} />
        </div>

    )
}
export { ImagePost }