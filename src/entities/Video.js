import Post from './Post';

class Video extends Post {
    constructor(post) {
        super(post.id, post.userId, post.type)
        this.videoUrl = post.videoUrl
    }
}

export default Video;
