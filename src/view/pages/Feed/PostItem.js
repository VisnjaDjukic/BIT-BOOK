import React, { Component } from 'react';
import { VideoPost } from './VideoPost';
import { ImagePost } from './ImagePost';
import { TextPost } from './TextPost';


class PostItem extends Component {

    renderPost = (post) => {
        if (post.isImage()) {
            return <ImagePost src={post.imageUrl} />
        } else if (post.isVideo()) {
            return <VideoPost url={post.videoUrl} />
        } else {
            return <TextPost />
        }
    }

    render() {

        const { post } = this.props

        if (!post) {
            return <h1>Nada here</h1>
        }

        return (
            <div className="row">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-content">
                            {this.renderPost(post)}
                        </div>
                        <div className="card-action">
                            <span> Post</span>
                            <span>Comments</span>
                        </div>
                    </div>
                </div>
            </div>

        )
    }



}

export { PostItem }