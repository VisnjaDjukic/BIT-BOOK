import React, { Component } from 'react';

import { VideoPost } from '../VideoPost';
import { ImagePost } from '../ImagePost';
import { TextPost } from '../TextPost';
import '../postItem/PostItem.css';
import { Link } from 'react-router-dom';


class PostItem extends Component {

    renderPost = (post) => {
        if (post.isImage()) {
            return <ImagePost type={post.type} src={post.imageUrl} />
        } else if (post.isVideo()) {
            return <VideoPost type={post.type} url={post.videoUrl} />
        } else {
            return <TextPost type={post.type} text={post.text} />
        }
    }

    render() {

        const { post } = this.props;
        const { commentsNum, type } = post;


        if (!post) {
            return <h1>...</h1>
        }

        let displayComments = commentsNum;

        switch (displayComments) {
            case 0: displayComments = "No comments";
                break;
            case 1: displayComments += " Comment";
                break;
            default: displayComments += " Comments"
        }

        return (
            <div className="row">
                <div className="col s12 m12" >
                    <div className="card" >
                        <div className="card-content">
                            {this.renderPost(post)}
                        </div>
                        <div className="card-action">
                            <span>{type + " post"}</span>
                            <Link to={`/posts/${post.id}`}><span className="videoComments">{displayComments}</span></Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }



}

export { PostItem }