import React from 'react';

const VideoPost = (props) => {
    const { url } = props;
    console.log(url);


    return (
        <div className="video-container">
            <iframe
                width="100%"
                title="sdf"
                src={url}
                frameBorder="0"
                allowFullScreen
            />
        </div>
    )

}

export { VideoPost }