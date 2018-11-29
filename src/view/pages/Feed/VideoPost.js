import React from 'react';

const VideoPost = (props) => {
    const { url } = props;

    return (
        <div className="video-container">
            <iframe
                width="100%"
                title="sdf"
                // src={url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )

}

export { VideoPost }