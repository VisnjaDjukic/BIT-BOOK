import React from 'react';
import "./MyUserProfile.css";


const UserProfile = (props) => {
    const { name, aboutShort, avatarUrl, postsCount, commentsCount } = props;

    const urlImg = "https://via.placeholder.com/150";

    return (
        <div className="container">
            <div className="row">
                <div className="card">
                    <div className="card-image">
                        {!avatarUrl ?
                            <div id="profileImg" style={{ backgroundImage: `url(${urlImg})` }}></div> :
                            <div id="profileImg" style={{ backgroundImage: `url(${avatarUrl})` }}></div>}
                    </div>
                    <div className="card-content">
                        <span className="card-title">{name}</span>
                        <p>{aboutShort}</p>
                    </div>
                    <div className="card-action">
                        <span><p>Posts Count: {postsCount}</p></span>
                        <span><p>Comments Count: {commentsCount}</p></span>
                    </div>
                </div>
            </div>
        </div>
    )

}



export { UserProfile } 