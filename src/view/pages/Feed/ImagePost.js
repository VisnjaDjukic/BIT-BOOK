import React from 'react';



const ImagePost = (props) => {
    const {src} = props;
    return (

        <div className="card-content">
          <img alt="" className="responsive-img" src={src} />
        </div>

    )
}
export { ImagePost }